#!/usr/bin/env sh
# Util used by scripts
# App name must be defined

[ -z "$app_name" ] &&
  echo "❌  (utils) specify app name before loading" >&2 &&
  exit 1

OUTPUT_DIR="out"
export APP_OUTPUT_DIR="$OUTPUT_DIR/$app_name"
export ANALYSIS_JSON_OUTPUT_FILE="$APP_OUTPUT_DIR/source-map-explorer.json"

upsert_app_output_dir() {
  mkdir -p "$APP_OUTPUT_DIR"
}

