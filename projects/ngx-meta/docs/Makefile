.PHONY: *

build: prebuild
	poetry run mkdocs build

prebuild:
	pnpm run copy-fonts

install:
	poetry install --no-root
	pnpm install

serve: prebuild
	poetry run mkdocs serve

