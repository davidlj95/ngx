#!/usr/bin/env sh
# Generates a PR comment about ngx-meta library bundle size from JSON outputs
# of source-map-explorer analysis of app main bundles where the library is
# used

# Initialize variables
base_file=""
input_file=""
header=""
output_file=""
git_ref=""
hidden_info=""

# Function to display usage information
display_usage() {
  cat <<BLOCK
Usage: $0 -h|--header HEADER -i|--input-file SME_JSON_FILE
       -b|--base-file SME_JSON_FILE -o|--output-file OUTPUT_FILE
       [-r|--git-ref GIT_REF] [--hidden-info INFO]

       SME stands for Source Map Explorer
BLOCK
  exit 1
}

# Parse command line arguments
while [ "$#" -gt 0 ]; do
  case "$1" in
  -h | --header)
    shift
    header="$1"
    ;;
  -b | --base-file)
    shift
    base_file="$1"
    ;;
  -i | --input-file)
    shift
    input_file="$1"
    ;;
  -o | --output-file)
    shift
    output_file="$1"
    ;;
  -r | --git-ref)
    shift
    git_ref="$1"
    ;;
  --hidden-info)
    shift
    hidden_info="$1"
    ;;
  *)
    display_usage
    ;;
  esac
  shift
done

# Check for mandatory arguments
if [ -z "$header" ] || [ -z "$input_file" ] || [ -z "$output_file" ]; then
  display_usage
fi

# Check for input file existence
if ! [ -r "$input_file" ]; then
  echo "❌ Input file '$input_file' can't be read" >&2
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
echo "### 📦 Bundle size ($header)" >"$output_file"
{
  if [ -n "$hidden_info" ]; then
    echo "<!-- $hidden_info -->"
  fi
  if [ -n "$git_ref" ]; then
    echo "Git ref: $git_ref"
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
lib_files="$(jq '.results[0].files
  | with_entries(select(.key|contains("ngx-meta")))' "$input_file")"
files="$(echo "$lib_files" | jq -r 'keys[]')"

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
    input_bytes_size=$(echo "$lib_files" | jq -r ".[\"$file\"].size")
    total_input_bytes_size="$((total_input_bytes_size + input_bytes_size))"
    printf "| \`%s\` | %s |" "$beautified_file" "$(format_size_column "$input_bytes_size")"
    if base_file_provided; then
      if base_file_exists; then
        base_bytes_size="$(jq -r ".results[0].files[\"$file\"].size" "$base_file")"
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
