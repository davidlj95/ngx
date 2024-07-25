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

lint-code:
	pnpm run lint:code --max-warnings 0

lint-gh-actions:
	ationlint

unit-test:
	pnpm run test:unit:coverage --browsers=ChromeHeadless --no-watch --no-progress \
		--reporters progress

format-check:
	cd .. && pnpm run format-check-all

release:
	cd .. && pnpm semantic-release

api-extractor:
	cd .. && pnpm run ngx-meta:api-extractor

api-documenter:
	cd .. && pnpm run ngx-meta:api-documenter
