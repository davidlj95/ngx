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
  sed "s/> \[!NOTE\]/!!! note \"Beta version\"\n/g" \
    > "$INCLUDES_DIR/$README_FILENAME"

# 📅 CHANGELOG.md
echo "ℹ️ Copying CHANGELOG file"
cp ../src/CHANGELOG.md "$INCLUDES_DIR/"

# 📦 Bundle size
echo "ℹ️ Copying bundle size reports"
BUNDLE_SIZE_INCLUDES_DIR="$INCLUDES_DIR/bundle-size"
BUNDLE_SIZE_OUTPUT_DIR="../bundle-size/out"
BUNDLE_SIZE_REPORT_FILENAME="bundle-size-report.md"
for bundle_size_output_app_dir in "$BUNDLE_SIZE_OUTPUT_DIR/"*; do
  app_name="$(echo "$bundle_size_output_app_dir" | sed "s|$BUNDLE_SIZE_OUTPUT_DIR/||g")"
  report_file="$bundle_size_output_app_dir/$BUNDLE_SIZE_REPORT_FILENAME"
  if [ -r "$report_file" ]; then
    echo "ℹ️ Copying Angular $app_name example app bundle size report"
    echo "🔸 Report file: \"$report_file\""
    bundle_size_includes_app_dir="$BUNDLE_SIZE_INCLUDES_DIR/$app_name"
    mkdir -p "$bundle_size_includes_app_dir"
    cp "$report_file" "$bundle_size_includes_app_dir/$BUNDLE_SIZE_REPORT_FILENAME"
  else
    echo "⚠️ Bundle size report for example app $app_name not found"
  fi
done
