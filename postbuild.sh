#!/usr/bin/env sh
# Commands to run after building
set -eu

# Change cwd to this script's directory
cd "$(dirname "$0")"

# ngx-meta Typescript definitions rollup
echo "ℹ️ Bundling Typescript definitions"
dts-bundle-generator --config dts-config.js

# Replace `index.d.ts` with bundled definitions
echo "ℹ️ Replacing Typescript index files with bundled definitions"
NGX_META_DIST_DIR="projects/ngx-meta/dist"
for dist_file_entry in "$NGX_META_DIST_DIR"/*; do
  BUNDLED_DEFINITIONS_FILENAME="bundled.d.ts"
  INDEX_DEFINITIONS_FILENAME="index.d.ts"
  bundled_definitions_file="$dist_file_entry/$BUNDLED_DEFINITIONS_FILENAME"
  index_definitions_file="$dist_file_entry/$INDEX_DEFINITIONS_FILENAME"
  if [ -f "$bundled_definitions_file" ]; then
    echo "- $bundled_definitions_file -> $index_definitions_file"
    mv "$bundled_definitions_file" "$index_definitions_file"
  fi
done

# Remove Typescript source directories
echo "ℹ️ Removing Typescript source directories"
for dist_file_entry in "$NGX_META_DIST_DIR"/*; do
  entrypoint_src_dir="$dist_file_entry/src"
  if [ -d "$entrypoint_src_dir" ]; then
    echo "- $entrypoint_src_dir"
    rm -rf "$entrypoint_src_dir"
  fi
done

# Build schematics
echo "ℹ️ Building schematics"
cd projects/ngx-meta/schematics
pnpm run build
cd "$(dirname "$0")"
