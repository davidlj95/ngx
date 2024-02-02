.PHONY: *

build: prebuild
	poetry run mkdocs build

prebuild:
	mkdir -p content/fonts
	# `cp -L` is required.
	# In GitHub Actions, symlinks are used and copied symlinks are invalid
	# https://github.com/davidlj95/ngx/actions/runs/7741714508/job/21109249970
	cp -Lr node_modules/@fontsource* content/fonts
	find content/fonts -name '*.md' -delete
	# Everything but last 4 lines
	sed "$$(($$(wc -l < ../src/README.md)-4)),\$$d" ../src/README.md | \
		sed "s|../docs/content||g" | \
		sed "s/> \([A-Z]\)/    \1/g" | \
		sed "s/> \[!IMPORTANT\]/!!! warning \"Alpha version\"\n/g" \
		> includes/README.md
	cp ../src/CHANGELOG.md includes/

install:
	poetry install --no-root
	pnpm install

serve: prebuild
	poetry run mkdocs serve

serve-public: prebuild
	poetry run mkdocs serve -a 0.0.0.0:8000

