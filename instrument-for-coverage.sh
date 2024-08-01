#!/usr/bin/env sh
set -eu

# Change cwd to this script's directory
cd "$(dirname "$0")"

NGX_META_DIST_DIR="projects/ngx-meta/dist/fesm2022"

echo "ℹ️ Instrumenting for coverage with 'nyc'"
echo "     - Directory: '$NGX_META_DIST_DIR'"
nyc instrument "$NGX_META_DIST_DIR" --in-place

echo "ℹ️ Replacing 'ngDevMode' plain usages to avoid tree-shaking"
BACKUP_EXT=".bak"
find "$NGX_META_DIST_DIR" -type f -name '*.*js' -exec \
  sed -i"$BACKUP_EXT" 's/ngDevMode/globalThis.ngDevMode/g' {} \;
rm -rf "$NGX_META_DIST_DIR"/*"${BACKUP_EXT:?}"
