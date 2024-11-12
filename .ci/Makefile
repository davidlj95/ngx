.PHONY: *

# First so that running without command runs a build
build:
	cd .. && pnpm run build

tsc:
	cd .. && pnpm run ngx-meta:tsc

install:
	# Despite it's enabled by default on CI. This allows to mock CI locally
	# https://pnpm.io/cli/install#--frozen-lockfile
	pnpm install --frozen-lockfile

lint-gh-actions:
	ationlint

unit-test-libs:
	pnpm run test:unit:libs:coverage \
		--browsers=ChromeHeadless \
		--no-progress \
		--reporters progress

unit-test-schematics:
	cd .. && pnpm run test:unit:schematics:coverage

release:
	cd .. && pnpm semantic-release

api-extractor:
	cd .. && pnpm run ngx-meta:api-extractor

api-documenter:
	cd .. && pnpm run ngx-meta:api-documenter
