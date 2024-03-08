#!/usr/bin/env sh
# Prepares the documentation site before building
CONTENTS_DIR="content"
INCLUDES_DIR="includes"

# 🆎 Fonts
FONTS_DIR="$CONTENTS_DIR/fonts"

echo "ℹ️ Copying downloaded fonts"
mkdir -p "$FONTS_DIR"
# 👇 `cp -L` is required
# In GitHub Actions, symlinks are used and copied symlinks are invalid
# https://github.com/davidlj95/ngx/actions/runs/7741714508/job/21109249970
cp -Lr "node_modules/@fontsource"* "content/fonts"
find "$FONTS_DIR" -name '*.md' -delete

# 🏡 README.md
echo "ℹ️ Copying trimmed README file"
README_FILENAME="README.md"
README_FILE="../src/$README_FILENAME"
# Everything but last x lines
sed "s|../docs/content||g" $README_FILE | # Fix logo path
  sed "s/> \([A-Z]\)/    \1/g" | # Remove quoted block + proper admonition 👇
  sed "s/> \[!IMPORTANT\]/!!! warning \"Alpha version\"\n/g" \
    > "$INCLUDES_DIR/$README_FILENAME"

# 📅 CHANGELOG.md
echo "ℹ️ Copying CHANGELOG file"
cp ../src/CHANGELOG.md "$INCLUDES_DIR/"

# 📦 Bundle size
echo "ℹ️ Copying bundle size reports"
e2e_app_dir_pattern="../e2e/a"
for e2e_app_dir in "$e2e_app_dir_pattern"*; do
  version="$(echo "$e2e_app_dir" | sed "s|$e2e_app_dir_pattern||g")"
  report_filename="bundle-size-report.md"
  report_file="$e2e_app_dir/$report_filename"
  destination_file="includes/a$version-$report_filename"

  if [ -r "$report_file" ]; then
    cp "$report_file" "$destination_file"
    echo "ℹ️ Copying Angular v$version E2E app bundle size report"
  else
    echo "⚠️ Bundle size report for version $version not found"
  fi
done
