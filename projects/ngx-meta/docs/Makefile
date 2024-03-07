.PHONY: *

build: prebuild
	poetry run mkdocs build

prebuild:
	./prebuild.sh

install:
	poetry install --no-root
	pnpm install

serve: prebuild
	poetry run mkdocs serve

serve-public: prebuild
	poetry run mkdocs serve -a 0.0.0.0:8000

