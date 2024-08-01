#!/usr/bin/env sh

[ -z "$1" ] &&
  echo "Usage: $0 app-name" >&2 &&
  exit 1
app_name="$1"

set -eu

# Change cwd to this script's directory
cd "$(dirname "$0")"

app_dir="../example-apps/apps/$app_name"
! [ -d "$app_dir" ] &&
  echo "App directory '${app_dir}' does not exist" >&2 &&
  exit 1

export COVERAGE_JSON_REPORT_NAME="e2e-$app_name.json"
pnpm start-server-and-test \
  "cd '$app_dir' && pnpm run ci:serve" \
  "http://localhost:4200" \
  "cypress run"
