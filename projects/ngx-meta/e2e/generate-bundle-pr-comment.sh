#!/usr/bin/env sh
# Generates a PR comment about ngx-meta library bundle size from JSON outputs
# of source-map-explorer analysis of app main bundles where the library is
# used

# Initialize variables
input_file=""
header=""
output_file=""
git_ref=""

# Function to display usage information
display_usage() {
  cat <<BLOCK
Usage: $0 -h|--header HEADER -i|--input-file SME_JSON_FILE
       -o|--output-file OUTPUT_FILE [-r|--git-ref GIT_REF]

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
if ! command -v jq > /dev/null 2>&1; then
  echo "❌ jq is not installed"
  exit 1
fi

# 👇 Keep in sync with CI comment finder
echo "### 📦 Bundle size ($header)" >"$output_file"
{
  if [ -n "$git_ref" ]; then
    echo "Git ref: $git_ref"
  fi
  echo ""
  echo "| Module file | Size |"
  echo "| --: | :-- |"
} >>"$output_file"

# Process each line from stdin
lib_files="$(jq '.results[0].files
  | with_entries(select(.key|contains("ngx-meta")))' "$input_file")"
files="$(echo "$lib_files" | jq -r 'keys[]')"
for file in $files; do
  bytes_size=$(echo "$lib_files" | jq -r ".[\"$file\"].size")
  beautified_file="$(
    echo "$file" |
      sed 's|webpack:///||' |
      sed 's|node_modules/@davidlj95/||' |
      sed 's|/fesm2022/davidlj95-ngx-meta||'
  )"
  beautified_size="$(numfmt --to=iec-i --suffix='B' "$bytes_size")"
  echo "| \`$beautified_file\` | $beautified_size |" >>"$output_file"
done
