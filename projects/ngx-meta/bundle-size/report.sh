#!/usr/bin/env sh
# Generates a bundle size report: size of including ngx-meta library inside an app's bundle size
# Using JSON outputs from source-map-explorer analysis of app main bundles where the library is used
set -eu

cd "$(dirname "$0")" || exit 1

# Function to display usage information
BASE_FILE_ARG="--base-file"
OUTPUT_FILE_ARG="--output-file"
GIT_REF_ARG="--git-ref"
HIDDEN_INFO_ARG="--hidden-info"
display_usage() {
  cat <<BLOCK
Usage: $0 APP_NAME
       [$OUTPUT_FILE_ARG OUTPUT_FILE]
       [$GIT_REF_ARG GIT_REF] [$HIDDEN_INFO_ARG INFO]

       APP_NAME: name of example app to report about
       $BASE_FILE_ARG: analysis JSON file to compare against
       $OUTPUT_FILE_ARG: output file to report in Markdown format
       $GIT_REF_ARG: add Git reference this report relates to
       $HIDDEN_INFO_ARG: add a comment to the report as a Markdown non-visible comment
BLOCK
  exit 1
}

# Parse command line arguments
app_name=""
base_file=""
output_file=""
git_ref=""
hidden_info=""
while [ "$#" -gt 0 ]; do
  case "$1" in
  "$BASE_FILE_ARG")
    shift
    base_file="$1"
    ;;
  "$OUTPUT_FILE_ARG")
    shift
    output_file="$1"
    ;;
  "$GIT_REF_ARG")
    shift
    git_ref="$1"
    ;;
  "$HIDDEN_INFO_ARG")
    shift
    hidden_info="$1"
    ;;
  *)
    if [ -z "$app_name" ]; then
      app_name="$1"
    else
      display_usage
    fi
    ;;
  esac
  shift
done

# Check for mandatory arguments
if [ -z "$app_name" ]; then
  display_usage
fi
. "./utils.sh"

# Defaults
input_file="$ANALYSIS_JSON_OUTPUT_FILE"
[ -z "$output_file" ] && output_file="$APP_OUTPUT_DIR/bundle-size-report.md"

# Check for input file existence
if ! [ -r "$input_file" ]; then
  echo "❌  Input file '$input_file' can't be read" >&2
  echo "   Export an analysis with JSON format before reporting"
  exit 1
fi

# Ensure jq is available
if ! command -v jq >/dev/null 2>&1; then
  echo "❌ jq is not installed"
  exit 1
fi

base_file_provided() {
  test -n "$base_file"
}

base_file_exists() {
  test -r "$base_file"
}

# 👇 Keep in sync with CI comment finder
echo "### 📦 Bundle size (Angular $app_name)" >"$output_file"
{
  if [ -n "$hidden_info" ]; then
    echo "<!-- $hidden_info -->"
  fi
  if [ -n "$git_ref" ]; then
    echo "[Git ref: \`$git_ref\`](https://github.com/davidlj95/ngx/commit/$git_ref)"
  fi
  echo ""
  printf "| Module file | Size |"
  if base_file_provided; then
    echo " Base size | Difference"
  else
    echo ""
  fi
  printf "| --- | --- |"
  if base_file_provided; then
    echo " --- | --- |"
  else
    echo ""
  fi
} >>"$output_file"

# Process input file
get_sizes_from_sme_file() {
  jq -r \
    '.results[0].files | with_entries(select(.key|contains("ngx-meta")))' \
    "$1"
}
get_files_from_sizes() {
  echo "$1" | jq -r 'keys[]'
}
get_size_for_file() {
  sizes="$1"
  file="$2"
  size="$(echo "$sizes" | jq -r ".[\"$file\"].size")"
  if [ "$size" = "null" ]; then
    echo "0"
    return
  fi
  echo "$size"
}

input_lib_sizes="$(get_sizes_from_sme_file "$input_file")"
input_files="$(get_files_from_sizes "$input_lib_sizes")"
base_lib_sizes=""
base_files=""
if base_file_exists; then
  base_lib_sizes="$(get_sizes_from_sme_file "$base_file")"
  base_files="$(get_files_from_sizes "$base_lib_sizes")"
fi
files="$(printf "%s\n%s" "$input_files" "$base_files" | sort | uniq)"

# Format
format_size_column() {
  bytes="$1"
  absolute_bytes="$(echo "$bytes" | tr -d "-")"
  long_size="$(printf "%d bytes" "$bytes")"
  short_size_absolute="$(numfmt --to=iec-i --suffix='B' "$absolute_bytes")"
  short_size="$short_size_absolute"
  if [ "$absolute_bytes" != "$bytes" ]; then
    short_size="-$short_size_absolute"
  fi
  echo "$long_size ($short_size)"
}

format_diff_column() {
  diff_bytes_size="$1"
  if [ "$diff_bytes_size" -eq 0 ]; then
    echo "No change"
    return
  fi
  base_bytes_size="$2"

  diff_size="$(format_size_column "$diff_bytes_size")"
  # Operate with precision, but output 2 decimals only
  # https://askubuntu.com/a/217575/605666#comment1744264_217575
  diff_percent="$(echo "res=$diff_bytes_size/$base_bytes_size*100; scale=2; res/1" | bc -l)"
  echo "$diff_percent%: $diff_size"
}

total_input_bytes_size=0
total_base_bytes_size=0
total_diff_bytes_size=0

NO_BASE_EXISTS_MSG="Not available"
{
  for file in $files; do
    beautified_file="$(
      echo "$file" |
        sed 's|webpack:///||' |
        sed 's|node_modules/@davidlj95/||' |
        sed 's|/fesm2022/davidlj95-ngx-meta||'
    )"
    input_bytes_size="$(get_size_for_file "$input_lib_sizes" "$file")"
    total_input_bytes_size="$((total_input_bytes_size + input_bytes_size))"
    printf "| \`%s\` | %s |" "$beautified_file" "$(format_size_column "$input_bytes_size")"
    if base_file_provided; then
      if base_file_exists; then
        base_bytes_size="$(get_size_for_file "$base_lib_sizes" "$file")"
        total_base_bytes_size="$((total_base_bytes_size + base_bytes_size))"
        diff_bytes_size="$((input_bytes_size - base_bytes_size))"
        total_diff_bytes_size="$((total_diff_bytes_size + diff_bytes_size))"
        echo " $(format_size_column "$base_bytes_size") | $(format_diff_column "$diff_bytes_size" "$base_bytes_size") |"
      else
        echo " ${NO_BASE_EXISTS_MSG} | ${NO_BASE_EXISTS_MSG} |"
      fi
    else
      echo ""
    fi
  done

  printf "| **Total** | **%s** |" "$(format_size_column "$total_input_bytes_size")"
  if base_file_provided; then
    if base_file_exists; then
      printf " **%s** |" "$(format_size_column "$total_base_bytes_size")"
      echo " **$(format_diff_column "$total_diff_bytes_size" "$total_base_bytes_size")** |"
    else
      echo " Not available | Not available |"
    fi
  else
    echo ""
  fi

  echo ""
  if base_file_provided && ! base_file_exists; then
    printf "Base size data is not available yet. "
    echo "Try again when the CI/CD has finished running on main branch"
  fi
} >>"$output_file"
