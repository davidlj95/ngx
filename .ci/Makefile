.PHONY: *

# First so that running without command runs a build
build:
	cd .. && pnpm run build

install:
	# Despite it's enabled by default on CI. This allows to mock CI locally
	# https://pnpm.io/cli/install#--frozen-lockfile
	pnpm install --frozen-lockfile

unit-test-libs:
	pnpm run test:unit:libs:coverage \
		--browsers=ChromeHeadless \
		--no-progress \
		--reporters progress
