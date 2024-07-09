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
  - [Quirks](#quirks)

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
- **Something strange happens? [Quirks](#quirks)** may help

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

Check out [API Report](#api-report) section for more information

#### Testing

Do add an E2E test when adding some metadata to ensure it's add and removed as expected.

Avoid unit tests for setting a specific metadata if the logic to set the metadata is straight forward (ie: no `if`s or loops).

#### Documentation

Remember to add some docs to the [comparison page](projects/ngx-meta/docs/content/why/comparison.md) when adding new metadata.

If adding a whole metadata module, add it to the built-in modules section too.

#### CI/CD jobs

To easily reproduce locally CI/CD jobs, most commands run by CI/CD are stored in [`.ci/Makefile` file](.ci/Makefile).

For instance, you can run `make build` (or just `make` in this case) to ensure the command used to build is the same one the CI/CD job will use.

#### Release and versioning

Every release is identified by a version number that follows [Semantic Versioning 2.0 specification](https://semver.org/)

In order to automatically detect if a new release is needed and what kind of version number bump is needed (major, minor or patch), commit messages since last release are analyzed.
That's why [commit messages follow a convention](#commit-messages). So that they can be analyzed later to automate the version bump and release process.

Every push to main branch analyzes all commits since latest release. Based on commit messages there's enough information to decide if a new release is needed. If a new version is needed the release process associates the commit with a tag, creates a release in GitHub with notes generated from commit messages and publishes a new package version to NPM.

See [release task](#release) for more information about how to operate releases.

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
pnpm run test:unit
```

> [!TIP]
> There's also a WebStorm run configuration (`Unit tests: all`) to run all unit tests and report the results inside the IDE

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

Check out [`ngx-meta` docs `README.md` to operate docs project](projects/ngx-meta/docs/README.md)

#### Release

[Semantic Release] is used to create releases by analyzing [commit messages' semantic information](#commit-messages). Here you'll find how to simulate a release.

##### Dry run: working on a branch

Semantic Release [behaves differently depending on the checked out branch](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#workflow-configuration).

If you're working on a branch and want to force a release, you can temporarily
add your branch to the release configuration.

For instance, add the following to the `branches` configuration in the `.releaserc.js` file to simulate a beta release as if the branch was in the main branch

```json
{
  "name": "current-branch-where-work-is-being-done",
  "prerelease": "beta",
  "channel": false
}
```

###### Beware of the `channel` option

Default is `undefined` for first release branch, but branch name for the rest. So in order to properly simulate the release process, you'll have to manually configure that. [`false` can be used to indicate default distribution channel](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#branches-properties).

###### Branch needs to be pushed

Otherwise, it [does not exist for semantic release](https://github.com/semantic-release/semantic-release/blob/v23.1.1/lib/branches/expand.js#L11). Same for commits on that branch. If not pushed, it's like they don't exist.

##### Dry run: minimal

To have a minimal idea of what would happen when running the release process, you can run [Semantic Release] in [dry run mode](https://semantic-release.gitbook.io/semantic-release/usage/configuration#dryrun). This includes: authentication checks, commit analysis to see if a new release is needed and the release notes for it in case it's needed.

> [!WARNING]
> Push permissions to the repository are needed to pass the `git` auth check.
> That's a [hardcoded check](https://github.com/semantic-release/semantic-release/blob/v23.1.1/index.js#L86-L102). So there's unfortunately no way to bypass this
> If you don't have permissions, check out the [next dry run approach](#dry-run-publish)

> [!TIP]
> 👇 Env vars are needed for plugins which check authentication (GitHub & NPM).
> You can also comment them out in the configuration file if you're not interested in how they behave. If interested in them and worrying about security, don't: read-only tokens are okay.

First, some env vars need to be defined. Check out [sample release env file] to see which ones with current configuration.

[sample release env file]: .env.release.sample

> [!TIP]
> You can copy the sample file into a `.env` file and set the credentials there. The file is ignored in git, won't be commited by accident.
> Then, use a tool like [ohmyzsh's `dotenv` plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dotenv) or
> [use `direnv`](https://github.com/direnv/direnv) to automatically load the env vars into your shell.

> [!TIP]
> To simulate a release, you can (and indeed should) use read-only tokens.
> Check out the [sample release env file] for more details

With env vars set, run

```shell
# 👇 --dry-run is the default mode when not on CI, but just to be explicit & moar sure
pnpm semantic-release --dry-run
```

This is useful to know the version bumped and release notes generated, but prepare and publish NPM steps are skipped. Keep reading to know how to dry run them.

##### "Dry run": publish

What if you want to simulate what would be published to the NPM registry? Or how the generated release notes would look in GitHub? Or how the generated CHANGELOG.md would look like? Keep reading to see how to safely test that.

However, bear in mind that it won't be a dry run (hence the quotes). Semantic Release will be called as if actually performing a release, but with a different registry and repository. There's [no way of dry running a release with semantic release that includes prepare, publish, success or failure steps](https://github.com/semantic-release/semantic-release/blob/v23.1.1/lib/definitions/plugins.js#L72).

###### Private, local registry

A private registry can be used to simulate packaging and publishing steps. [Verdaccio] is a popular choice at this time.

Install [Verdaccio] and run it:

```shell
pnpm i -g verdaccio # you may be instructed to run a setup step
verdaccio
```

Now let's configure this project to use [Verdaccio]. [Semantic Release's NPM plugin] will also [read that configuration in order to publish there and not to the official NPM registry](https://github.com/semantic-release/npm?tab=readme-ov-file#npm-configuration).

```shell
npm config set registry http://localhost:4873/ --location project
```

> [!NOTE]
> The `--location project` flag is added so just NPM configuration for this project is changed. Instead of the [default behaviour which changes the user's configuration](https://docs.npmjs.com/cli/v10/commands/npm-config#set). A `.npmrc` file will be created in the repo if it doesn't exist. Don't worry, it's git ignored. It won't end up in version control.

Time for authentication! Create a user in the fresh [Verdaccio] private registry.

> [!NOTE]
> Skip this step if you already have a user for the private registry.
> Ensure you're logged in instead by running `npm login`

```shell
npm adduser ngx-meta
# 👆 Registry should be Verdaccio's localhost URL
#    Any username, password email can be set in there.
```

> [!NOTE]
> Skip this step if you already have a token for the user.

> [!TIP]
> If you forgot the token for the user, you can use `npm token ls` to list existing tokens.
> However the full token won't be listed there. Copy the id. Then remove it by running `npm token revoke <tokenId>`. Create a new one now :)

Now, we need a token. Let's create one:

```shell
npm token create
```

Take note of it. This token will be used by [Semantic Release] to authenticate against the registry as seen in the [minimal dry run](#dry-run-minimal)

###### Different repository

Unfortunately [Semantic Release] [hardcodes pushing to the git repository](https://github.com/semantic-release/semantic-release/blob/v23.1.1/index.js#L207-L212). So there's no way to dry-run that part :(

Then what it can be done is to use another git repository for this purpose. Options:

**🔒 SAFEST (but a bit cumbersome): Create a fork/copy of the repository**

To copy all existing tags needed to simulate a release at the current state. Or [copy it if you can't fork it as you own it](https://stackoverflow.com/a/10966784/3263250).

Then, when using [Semantic Release], set the repository URL to this new repository:

```shell
pnpm semantic-release --repository-url https://github.com/user/ngx.git
```

**⚡️ TRICKY (but fastest): Use a noop git remote**

> [!CAUTION] > **It's tricky and dangerous**. If not setup properly, or Semantic Release implementation changes, this could end up actually performing actions on the actual repository. Also, you'll need to later clear the objects created by semantic release which will be in your local git repository. Unless you know what you're doing and are very careful, **skip this approach**.

A trick that can be done is to [create a dummy remote that does nothing](https://stackoverflow.com/a/30543552/3263250) by setting `.` as the repository URL.

This way Semantic Release will push everything to this no-op repository URL / remote URL.

```shell
pnpm semantic-release --repository-url .
```

> [!CAUTION]
> Disable the GitHub plugin in the configuration if using this approach.
> Otherwise release notes & comments will be created as usual. That's another reason not to use this approach.

> [!IMPORTANT]
> Semantic Release's release notes generator plugin needs to be disabled if using this approach. As otherwise [it fails when trying to read parts from `.` which is not a URL](https://github.com/semantic-release/release-notes-generator/blob/v13.0.0/index.js#L37-L39)

> [!NOTE]
> You could use `.` as the URL for the `origin` git remote. [Semantic Release would grab that and use it for the repository URL](https://github.com/semantic-release/semantic-release/blob/v23.1.1/lib/get-config.js#L73) if not set anywhere else. But it would end up [trying to be converted to a URL](https://github.com/semantic-release/semantic-release/blob/v23.1.1/lib/get-git-auth-url.js#L79) anyway. Plus the repository URL may be grabbed from somewhere else therefore using the real repository to operate, which would end up making real changes in there. Also the remote to change would have to be `origin`, which is [hardcoded in the implementation](https://github.com/semantic-release/semantic-release/blob/v23.1.1/lib/git.js#L174). Finally, [`pushURL` is not respected by semantic release](https://github.com/semantic-release/semantic-release/blob/v23.1.1/lib/git.js#L234-L236) so the `origin` URL has to be changed.

_Cleanup_

After running semantic release with this approach, you'll end up with the git objects that semantic release created in your local repository. You'll need to clean them up to avoid weird scenarios in the future (like fetching a tag that already exists as was created during a "dry-run")

This means [currently](https://github.com/semantic-release/semantic-release/blob/v23.1.1/index.js#L207-L212):

```shell
git tag -d <createdTag> # you can use `git tag -l` to list them
git notes prune -v # to clear notes about non-existing tags
# 👆 Seems tag deletion already deletes the note though
```

If using Semantic Release's git plugin (or another that writes to git), you'll need to remove the created commit by it too.

###### Running the release

With the private registry setup and the new repository created, you can run the release.

Bear in mind to [mangle the configuration if working on a branch](#dry-run-working-on-a-branch). Set up the needed env vars [as seen in minimal dry run](#dry-run-minimal). With following differences:

- **GitHub**: if just interested in NPM publish or using the tricky approach for the repository to use, you can skip that part by commenting out the plugin in the configuration. Otherwise, provide a token that can write to the repository created for running the release simulation.
- **NPM**: provide the auth token instead obtained in the [private local registry step](#private-local-registry)

Let's check out everything is ready:

```shell
npm config get registry
# 👆 Output should be local private registry URL, not NPMjs one
echo $NPM_TOKEN
# 👆 Output doesn't start with `npm_`
#    Should return NPM auth token created for local registry
cat .releaserc.js
# 👆 GitHub plugin commented if:
#     - Env var not configured
#     - Read-only access token provided
#     - Using local repository trick
#    Release notes plugin generator commented if using local repository trick
#    Branch configuration altered if working on a branch
```

> ![IMPORTANT]
> Just [one more thing](https://www.youtube.com/watch?v=hvlHi7iTdaw&t=6s) 😜
> [Verdaccio doesn't support `provenance`](https://github.com/orgs/verdaccio/discussions/3903)
> So disable `publishConfig.provenance` in the built `package.json`. Otherwise, Verdaccio won't accept the package submission.

Finally, run the release rehearsal

```shell
pnpm semantic-release \
  --repository-url <anotherRepository> \
  --no-ci
```

> [!NOTE]
> If using the local repository trick [as a different repository](#different-repository), remember to do the clean-up!

> [!NOTE]
> To try again releasing the same release, you can [unpublish it from Verdaccio](https://github.com/verdaccio/verdaccio/issues/365#issuecomment-337901629):
>
> ```shell
> npm unpublish --force <pkg>@<version> --registry http://localhost:4873
> ```
>
> Be careful of specifying the registry. You don't want the package to be actually removed from NPM registry!

[Semantic Release]: https://github.com/semantic-release/semantic-release
[Semantic Release's NPM plugin]: https://github.com/semantic-release/npm
[Verdaccio]: https://verdaccio.org/

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

### Quirks

#### Can't run unit tests: `TestBed` error

If you see this error:

```sh
Error: Need to call TestBed.initTestEnvironment() first
    at TestBedImpl.compiler (node_modules/.pnpm/@angular+core@17.2.3_rxjs@7.8.1_zone.js@0.14.2/node_modules/@angular/core/fesm2022/testing.mjs:1970:19)
```

Maybe you accidentally ran `pnpm install` inside a project's source code (ie: `projects/ngx-meta/src`). **Remove the `node_modules` inside that directory** and error should go away.

> See https://stackoverflow.com/a/74903074/3263250

Remember to stop the Karma server before running tests again.
