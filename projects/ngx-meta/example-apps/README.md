# `@davidlj95/ngx-meta` example apps infra

Scripts here allow to create example Angular apps using Angular CLI that use library's main features

## Library usages

The code using the library that example apps use can be found in templates directory:

- [Standalone apps](./templates/standalone/src/app)
- [Module-based apps](./templates/module/src/app)

## Setup

First, install the dependencies

```shell
pnpm install
```

## Tasks

### Creation

Tasks that create example Angular apps

#### Build

In order to run the app creation script, first you must build it (to avoid using `ts-node` or similar).

Run

```shell
pnpm run build
```

To build scripts. Or if you're developing them, run

```shell
pnpm run watch
```

To build them as their contents change

#### Run

> [!IMPORTANT]
> Build the library first, example apps will install the library linking it to the distribution files directory. It's important the directory exists. If you update library code, and doesn't show up, check the [live code update tip](#live-code-updates-within-example-apps) below

To run the script and create an example app:

```shell
pnpm run create-example-app ANGULAR_CLI_ALIAS
```

Created app will be located inside `apps` directory

Script will help with arguments if not used properly. Remember to build the script first.

### Example apps

Tasks for each created example app (inside `apps` directory)

#### Setup

All creation will be set up the app for you, installing dependencies too.

#### Serve

To serve the app, change to its directory and run

```sh
pnpm start
```

To serve it with SSR, build it first (see below). You can then use the common run script

```sh
pnpm run ci:serve
```

Which will serve the app in a port where E2E tests will be run against. This is the same run script used in CI/CD to execute E2E tests.

#### Build

To build it, change to its directory and use

```sh
pnpm run build
```

##### For bundle size analysis

In order to analyze the app's bundle size with [bundle size analysis infra](../bundle-size/README.md), remember to build it with source maps included:

```shell
pnpm run build --source-map
```

##### With server side rendering

To build the app for browser and for server, run (if present):

```shell
pnpm run build:ssr
```

Apps using Angular v17's `application` builder do not have a `build:ssr` run script. That's because a regular `build` will build for browser and server if SSR is enabled.

##### With everything

To build the app ready for bundle size analysis and E2E tests (hence with server code built), run

```shell
pnpm run ci:build
```

## Tips

### WebStorm run configurations

A run configuration exists to create an example app with latest version of Angular

Use the CLI for rest of versions (don't want to maintain all those run configs)

You will also find a run configuration to build the library and serve the latest Angular version example app

### Live code updates within example apps

To get live code updates in example apps while updating library code:

- **Build with watch mode**. Run `pnpm watch` in repo root. This way each change you do to the library will be compiled into the distribution directory which example apps use to access the library.
- **Install example app dependencies again**. This is needed everytime you fire a new build. Run `pnpm install` in the example app directory. This is because library is installed [via hard-links to avoid issues with symlinks](https://pnpm.io/cli/link#whats-the-difference-between-pnpm-link-and-using-the-file-protocol). That's also the reason it's interesting to run build with `watch` mode, so that you just do it once, `install` and all code updates will be reflected. Otherwise, for each build, you need to `install` deps of the example app again to create the hard-links again. That's because every build creates new files and changes `inode`s so hardlinks created for example apps still point to older files.
- **Serve the app**

There are WebStorm run configurations to perform this workflow for latest Angular major version example app

## Quirks

### Typescript errors

Do restart the Typescript language service when updating library's code if the example app reports errors in the IDE. Sometimes it gets lost as doesn't detect that library code changed.

In WebStorm, you can [search for an action](https://www.jetbrains.com/help/webstorm/searching-everywhere.html#ws_search_actions) named `Restart Typescript service`

In Visual Studio Code, with a Typescript file opened, [open the command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) and look for `Typescript: Restart TS Server`
