#!/usr/bin/env sh
ACTIONLINT_CMD="actionlint"

if ! which "$ACTIONLINT_CMD" > /dev/null 2>&1; then
  echo "⚠️ $ACTIONLINT_CMD command is not installed." >&2
  echo "   GitHub Actions code won't be linted" >&2
  echo "   Checkout https://github.com/rhysd/actionlint for installation instructions" >&2
  exit 0
fi

actionlint
