#!/usr/bin/env sh
script_path="$(readlink -f "$0")"
script_file_name="$(basename "$script_path")"
script_dir_path="$(dirname "$script_path")"
cd "$script_dir_path" || exit 1

app_name="$1"
if [ -z "$app_name" ]; then
  echo "Usage: $script_file_name <appName>" >&2
  exit 1
fi
shift

echo "ℹ️ App name is \"${app_name}\"" >&2
echo "ℹ️ Looking for app dist dir" >&2
app_dist_browser_dir="$app_name/dist/${app_name}"
echo "    - Dist browser dir: \"${app_dist_browser_dir}\"" >&2
if ! [ -d "$app_dist_browser_dir" ] || ! [ -r "$app_dist_browser_dir" ]; then
  echo "❌  Dist browser dir not found. Build the app first" >&2
  exit 1
else
  echo "✅  Dist browser dir found" >&2
fi

echo "ℹ️ Looking for main bundle of app" >&2
main_bundle_file_glob="$app_name/dist/${app_name}/browser/main*.js" >&2
echo "    - File glob: \"${main_bundle_file_glob}\"" >&2
# shellcheck disable=SC2086
if ! main_bundle_file="$(ls $main_bundle_file_glob 2> /dev/null)"; then
  echo "❌  No main bundle file found" >&2
  exit 1
fi
echo "    - File: \"${main_bundle_file}\""

echo "ℹ️ Running source map explorer" >&2
pnpm --silent source-map-explorer "$main_bundle_file" "$@"
