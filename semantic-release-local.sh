#!/usr/bin/env sh
# Runs Semantic Release with a local private registry
# See contributing docs for more information

# Warn if not using local branch just in case
current_branch="$(git rev-parse --abbrev-ref HEAD)"
if [ -z "$LOCAL_SEMANTIC_RELEASE_BRANCH_AS_MAIN" ] && [ "$current_branch" != "main" ]; then
  echo "💡 Publishing from local branch as if it was main one hasn't been configured."
  echo "   It's probable no release will be done"
  echo "   export LOCAL_SEMANTIC_RELEASE_BRANCH_AS_MAIN=true # to use local branch as if it was main one"
fi

# Ensure repository URL set
if [ -z "$LOCAL_SEMANTIC_RELEASE_REPOSITORY_URL" ]; then
  echo "❌  Repository URL hasn't been configured. Set one to avoid publishing to real one"
  echo "   export LOCAL_SEMANTIC_RELEASE_REPOSITORY_URL=. # for the tricky one to work locally"
  echo "   export LOCAL_SEMANTIC_RELEASE_REPOSITORY_URL=https://github.com/user/ngx.git # to use a copy/fork"
  exit 1
else
  echo "👍 Repository URL set to \"$LOCAL_SEMANTIC_RELEASE_REPOSITORY_URL\""
fi

set -eu

# Change cwd to this script's directory
cd "$(dirname "$0")"

DIST_PACKAGE_JSON='projects/ngx-meta/dist/package.json'

# Ensure package.json exists
if ! [ -r "$DIST_PACKAGE_JSON" ]; then
  echo "❌  Package JSON file '$DIST_PACKAGE_JSON' does not exist or is not readable"
  echo "   Build the library first"
  exit 1
else
  echo "👍 Package JSON file exists"
fi

# Ensure not logged in to `npm` registry
NPM_REGISTRY='https://registry.npmjs.org/'
if npm whoami --registry "$NPM_REGISTRY" &>/dev/null; then
  echo "⚠️ You are authorized to use the real NPM registry"
  echo "   For safety, you should comment the .npmrc file where credentials are set"
  echo "   Otherwise if something goes wrong, something could be published there"
  read -p "   Do you want to continue anyway (yes/no)?  " yn
  case $yn in
  [Yy]*) continue ;;
  [Nn]*) exit 1 ;;
  *) echo "Please answer yes or no." ;;
  esac
else
  echo "👍 Not logged in to real NPM registry. Nice caution"
fi

# Tweak the package.json file
# - Registry: local registry
package_json="$(cat "$DIST_PACKAGE_JSON")"
cleanup() {
  echo "ℹ️ Restoring original package JSON file"
  echo "$package_json" >"$DIST_PACKAGE_JSON"
  echo "✅  Done"
  if [ "$LOCAL_SEMANTIC_RELEASE_REPOSITORY_URL" == "." ]; then
    echo "ℹ️ If run was successful, remember to clear created objects"
    echo "   Like git tags if any: 'git tag -d <tag>'"
  fi
}
trap cleanup EXIT INT HUP

LOCAL_REGISTRY_URL='http://localhost:4873'
tweaked_package_json="$(
  jq ".publishConfig.registry=\"${LOCAL_REGISTRY_URL}\"" \
    $DIST_PACKAGE_JSON
)"
echo "ℹ️ Tweaking package JSON file"
echo "   Setting local registry"
echo "$tweaked_package_json" >"$DIST_PACKAGE_JSON"

# Verify tweak
registry="$(jq -r ".publishConfig.registry" "$DIST_PACKAGE_JSON")"
if [ "$registry" != "$LOCAL_REGISTRY_URL" ]; then
  echo "❌ Registry wasn't updated. Can't proceed."
  exit 1
fi

# Run it
echo "ℹ️ Running semantic release"
pnpm semantic-release --no-ci
