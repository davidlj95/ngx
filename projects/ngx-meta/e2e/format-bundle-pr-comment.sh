#!/usr/bin/env sh
# Formats TSV output of `source-map-explorer` so it can be pretty printed
# in a GitHub PR comment
# Accepts header as first argument
if [ "$#" -ne 1 ]; then
  echo "Usage: source-map-explorer --tsv | $0 <header>"
  exit 1
fi

header="$1"

# 👇 Keep in sync with CI comment finder
echo "### 📦 Bundle size ($header)"
echo "Commit: $(git rev-parse --short HEAD)"
echo ""
echo "| Module file | Size |"
echo "| --: | :-- |"

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
    sed 's|node_modules/@davidlj95/||' |
    sed 's|/fesm2022/davidlj95-ngx-meta||'
  )"
  beautified_size="$(numfmt --to=iec-i --suffix='B' $size)"
  echo "| \`$beautified_file\` | $beautified_size |"
done
