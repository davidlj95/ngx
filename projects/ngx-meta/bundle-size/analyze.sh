#!/usr/bin/env sh
# Analyzes bundle size of the library when bundled inside an app
# Using source maps & thanks to `source-map-explorer`
set -eu

cd "$(dirname "$0")" || exit 1

app_name="$1"
[ -z "$app_name" ] && echo "❌  App name not specified" >&2 && exit 1
. "utils.sh"

app_browser_dist_dir="../examples/apps/$app_name/dist/$app_name/browser"

sme_command() {
  MAIN_BUNDLE_NAME_PREFIX=main
  MAIN_BUNDLE_NAME_SUFFIX=.js
  # shellcheck disable=SC2125
  main_bundle_file="$app_browser_dist_dir/$MAIN_BUNDLE_NAME_PREFIX"*"$MAIN_BUNDLE_NAME_SUFFIX"
  echo "🔸 Main bundle file: \"${main_bundle_file}\"" >&2
  # shellcheck disable=SC2086
  if ! [ -f $main_bundle_file ]; then
    echo "❌  Main bundle file not found" >&2
    echo "   Remember to build the app first with source maps enabled" >&2
    echo "   ng build --source-map" >&2
    exit 1
  fi
  pnpm source-map-explorer "$main_bundle_file" "$@"
}

echo "⚙️ Analyzing ${app_name} main bundle" >&2
export_format_arg="$2"
if [ -z "$export_format_arg" ]; then
  sme_command
  exit
fi
JSON_ARG="--json"
case "$export_format_arg" in
"$JSON_ARG")
  echo "ℹ️ Exporting analysis as JSON" >&2
  echo "🔸 Output file: \"$ANALYSIS_JSON_OUTPUT_FILE\"" >&2
  upsert_app_output_dir
  sme_command "$JSON_ARG" >"$ANALYSIS_JSON_OUTPUT_FILE"
  ;;
*)
  echo "❌  Unknown export format arg '$export_format_arg'" >&2
  echo "   Available export format args: $JSON_ARG" >&2
  exit 1
  ;;
esac
