#!/usr/bin/env sh
# Formats TSV output of `source-map-explorer` so it can be pretty printed
# in a GitHub PR comment
# Initialize variables
header=""
output_file=""
git_ref=""

# Function to display usage information
display_usage() {
    echo "Usage: $0 -h|--header HEADER -f|--file OUTPUT_FILE [-r|--git-ref GIT_REF]"
    exit 1
}

# Parse command line arguments
while [ "$#" -gt 0 ]; do
    case "$1" in
        -h|--header)
            shift
            header="$1"
            ;;
        -f|--file)
            shift
            output_file="$1"
            ;;
        -r|--git-ref)
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
if [ -z "$header" ] || [ -z "$output_file" ]; then
    display_usage
fi

# 👇 Keep in sync with CI comment finder
echo "### 📦 Bundle size ($header)" > "$output_file"
{
  if [ -n "$git_ref" ]; then
    echo "Git ref: $git_ref"
  fi
echo ""
echo "| Module file | Size |"
echo "| --: | :-- |"
} >> "$output_file"

# Process each line from stdin
while IFS= read -r line; do
  # Skip unneeded lines
  case "$line" in
  '>'*) continue ;; # pnpm run command ran output
  *ngx-meta*) ;; # we want those!
  *) continue ;; # discard anything else
  esac
  file=$(echo "$line" | cut -f1)
  size=$(echo "$line" | cut -f2)
  beautified_file="$(
    echo "$file" |
    sed 's|webpack:///||' |
    sed 's|node_modules/@davidlj95/||' |
    sed 's|/fesm2022/davidlj95-ngx-meta||'
  )"
  beautified_size="$(numfmt --to=iec-i --suffix='B' "$size")"
  echo "| \`$beautified_file\` | $beautified_size |" >> "$output_file"
done
