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

lint:
	pnpm run lint --max-warnings 0

test:
	pnpm run test --browsers=ChromeHeadless --no-watch --no-progress \
		--reporters progress --code-coverage

run-main:
	cd .. && act

reset:
	docker ps -a --format '{{.Names}}' | grep -e '^act-' | xargs docker rm -f

format-check:
	cd .. && pnpm run format-check-all

release:
	cd .. && pnpm semantic-release

api-extractor:
	cd .. && pnpm run ngx-meta:api-extractor

api-documenter:
	cd .. && pnpm run ngx-meta:api-documenter
