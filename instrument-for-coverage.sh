#!/usr/bin/env sh
set -eu

# Change cwd to this script's directory
cd "$(dirname "$0")"

NGX_META_DIST_DIR="projects/ngx-meta/dist/fesm2022"

echo "ℹ️ Instrumenting for coverage with 'nyc'"
echo "     - Directory: '$NGX_META_DIST_DIR'"
nyc instrument "$NGX_META_DIST_DIR" --in-place
