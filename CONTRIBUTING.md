# Contributing

Hey 👋 Glad you're here 😊 Contributions are very welcome ❤️

- [Code of conduct](#code-of-conduct)
- [Submission guidelines](#submission-guidelines)
  - [Discussions](#discussions)
  - [Issues](#issues)
  - [Pull requests](#pull-requests)
- [Developing](#developing)
  - [Conventions](#conventions)
  - [Tasks](#tasks)
  - [Tools](#tools)

## Code of conduct

To keep the project open and inclusive, please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) (TL;DR: don't be an a\*\*hole)

## Submission Guidelines

### Discussions

If you want to discuss an idea, improvement, feature request or something related to one of the libraries hosted in this repository, please do by visiting the [GitHub Discussions] page. And remember to follow the [code of conduct](#code-of-conduct)

[GitHub Discussions]: https://github.com/davidlj95/ngx/discussions

- ✅ **Do use** [GitHub Discussions] to talk about ideas, enhancement, improvements, feature requests or anything else
- ❌ **Do not** use [GitHub Issues] to suggest new features or enhancements.

### Issues

Before submitting an issue, please do search the [GitHub Issues] tracker first. An issue may exist already.

[GitHub Issues]: https://github.com/davidlj95/ngx/issues

Issues should be about bugs or existent features that do not work as expected. For other topics, do use discussions.

Provide a minimal reproduction where the wrong behaviour is observed to speed up the reproduction and confirmation of bugs.

If you know the bug and can provide a bug fix, your pull request is more than welcome ❤️

- ✅ **Do** search first existing [GitHub Issues] before posting a new one
- ✅ **Do** provide a minimal reproduction example to ease bug reproduction and confirmation.
- ❤️ **Do** open a pull request with a bug fix, if you are able to provide one
- ❌ **Do not** use [GitHub Issues] to talk about non-issues. Use [GitHub Discussions] instead.

### Pull requests

Happy to see you want to provide some code or docs 🥰

Search first there is no open (or closed) pull request already in [GitHub Pull Requests] page to avoid duplicating efforts. If there's none, feel free to open yours.

Whilst developing the code, remember to follow conventions stated in [developing](#developing) section. Don't worry, there aren't any quirky ones apart from the regular ones you'd expect in a regular project.

Add a little description describing your change. Then, open a pull request.

> You can check [GitHub's documentation about creating pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) for more information. You'll probably need to fork the repository first.

A reviewer will check your code and provide feedback. If everything's ready, they may merge your pull request. That's it 🚀

> You can then proceed to remove your branch and repository fork if you want.

[GitHub Pull Requests]: https://github.com/davidlj95/ngx/pulls

- ❤️ **Do** contribute with a pull request. They're very welcome 🥰
- ✅ **Do** search [GitHub Pull Requests] to find an existing pull request first. Even if it's in closed state.
- ✅ **Do** describe your changes with a description

## Developing

You can go and just start writing code. The CI/CD will tell you if you fail to comply with a required code style / convention. However, if you want to know them in advance:

- **Follow [conventions](#conventions)** when developing some code and committing it with `git`
- **See how to perform usual [tasks](#tasks)** such as building, testing, ...
- **Take a look at [tools](#tools)** recommended to help you develop

### Conventions

#### Commit messages

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) convention is used to format commit messages. This means commit messages must be in the shape of:

```
<type>(optional scope): <description>

[optional body]

[optional footer(s)]
```

Pretty similar to [Angular's commit message format](https://github.com/angular/angular/blob/17.2.3/CONTRIBUTING.md#commit)

[`commitlint`](https://commitlint.js.org/) is used to enforce the convention

If you don't provide a commit message with proper conventions, the CI/CD job checking that will fail.

[Git hooks] are provided to automatically ensure your message follows the convention when committing.

To help you start writing commit messages if you have never used the convention, you can run

```sh
pnpm run commit
```

To create your first commit message. Type a wrong type and the tool will list you the types available.

There is no formal convention on scopes. Though for `ngx-meta`, metadata module name in kebab case is used. For instance, to add an Open Graph related feature, commit message could be: `feat(open-graph): add article vertical`

#### TSDoc comments

Every exported member must be documented using [TSDoc](https://tsdoc.org/). Specifically, [API Extractor subset of TSDoc](https://api-extractor.com/pages/tsdoc/doc_comment_syntax/)

At least, it must provide the visibility of the exported member. Mainly either [`@alpha`](https://api-extractor.com/pages/tsdoc/tag_alpha/), [`@beta`](https://api-extractor.com/pages/tsdoc/tag_beta/), [`@internal`](https://api-extractor.com/pages/tsdoc/tag_internal/) or [`@public`](https://api-extractor.com/pages/tsdoc/tag_public/)

Checkout [API Report](#api-report) section for more information

#### Testing

Do add an E2E test when adding some metadata to ensure it's add and removed as expected.

Avoid unit tests for setting a specific metadata if the logic to set the metadata is straight forward (ie: no `if`s or loops).

#### Documentation

Remember to add some docs to the [comparison page](projects/ngx-meta/docs/content/why/comparison.md) when adding new metadata.

If adding a whole metadata module, add it to the built-in modules section too.

#### CI/CD jobs

To easily reproduce locally CI/CD jobs, most commands run by CI/CD are stored in [`.ci/Makefile` file](.ci/Makefile).

For instance, you can run `make build` (or just `make` in this case) to ensure the command used to build is the same one the CI/CD job will use.

### Tasks

#### Package management

As you can see in [`package.json`'s](package.json) `packageManager` field, `pnpm` is used to manage packages. [`corepack`](https://github.com/nodejs/corepack) is used to manage the package manager 🤯

To install packages needed to develop, do

```sh
pnpm install
```

#### Build

After installing dependencies as seen in [package management](#package-management), just run

```
pnpm run build
```

To build all libraries

#### Test

##### Unit tests

Unit tests are run with Angular's default test runner [Karma](https://karma-runner.github.io) and written in [Jasmine](https://jasmine.github.io/)

To run them all

```sh
pnpm run test
```

##### E2E tests

Refer to [`ngx-meta`'s E2E README.md for more information](projects/ngx-meta/e2e/README.md)

#### Format

[Prettier](https://prettier.io/) is used for consistent code formatting.

You can run

```sh
pnpm run format-check-all
```

To look for formatting errors. And

```sh
pnpm run format-all
```

To fix them all

[Git hooks] are provided to automatically ensure code is formatted before committing it.

#### Lint

[ESLint](https://eslint.org/) is used to lint the project amongst [Angular ESLint](https://github.com/angular-eslint/angular-eslint). As recommended by Angular when doing `ng lint`.

To lint the whole project:

```sh
pnpm run lint
```

[Git hooks] are provided to automatically lint changed files when committing. Thanks to [`lint-staged`](https://github.com/lint-staged/lint-staged)

#### API Report

[API Extractor] generates a report of the exposed API of a package in order to keep track of public API signatures. In order to for instance help detecting breaking changes.

[API Extractor]: https://api-extractor.com/

The report must be generated every time the API surface of a package changes.

To do so, first compile the project using `tsc`:

```sh
pnpm run ngx-meta:tsc
```

Then, run API Extractor locally

```sh
pnpm run ngx-meta:api-extractor:local
```

It will generate the API Report file for you to commit it.

CI/CD will ensure the API Report is up-to-date with current code.

#### API Reference docs

[API Extractor] also generates the base to generate API Reference docs. **Run it first** as explained in previous step before generating API Reference docs.

To generate docs, [API Documenter](https://www.npmjs.com/package/@microsoft/api-documenter) sibling package is used. Run

```shell
pnpm run ngx-meta:api-documenter
```

To generate API Reference docs, which will end up in the [documentation](#documentation) directory.

#### Docs

Checkout [`ngx-meta` docs `README.md` to operate docs project](projects/ngx-meta/docs/README.md)

### Tools

#### IDE

[JetBrains WebStorm](https://www.jetbrains.com/webstorm/) is used to develop this project. The repository contains many run configurations and settings to help you. However, feel free to use whatever tool you prefer :)

#### Git hooks

[Git hooks]: #git-hooks

Some Git hooks are provided to help you:

- Follow commit conventions
- Format code automatically before committing
- Lint code automatically before committing

thanks to [`husky`](https://github.com/typicode/husky).

They should be installed by default. If not, do run

```sh
pnpm husky
```
