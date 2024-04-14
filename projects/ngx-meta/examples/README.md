# `@davidlj95/ngx-meta` examples

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
> Build the library first, example apps will install the library linking it to the distribution files directory. It's important the directory exists. There's no need to re-install / re-link the library when library distribution files change. Given it's a symlink apps will consume new version straight forward. You may need to clear Angular's cache though to get fresh changes (see notice below).

To run the script and create an example app:

```shell
pnpm run create-example-app APP_NAME
```

Created app will be located inside `apps` directory

Script will help with arguments if not used properly. Remember to build the script first.

> [!TIP]
> If you change library's code and the app does not show changes, try clearing up the apps' build cache. Go to the app directory and run
>
> ```sh
> ng cache clean
> ```

### Example apps

Tasks for each created example app (inside `apps` directory)

#### Setup

All creation will be set up the app for you, installing dependencies too.

#### Serve

To serve the app, change to its directory and run

```sh
pnpm start
```

#### Build

To build it, change to its directory and use

```sh
pnpm run build
```

> [!NOTE]
> In order to analyze the app's bundle with `source-map-explorer`, remember to build it with
>
> ```shell
> pnpm run build --source-map
> ```

## Tips

### WebStorm run configurations

A run configuration exists to create an example app with latest version of Angular

Use the CLI for rest of versions (don't want to maintain all those run configs)

You will also find a run configuration to build the library and serve the latest Angular version example app

## Quirks

### Typescript errors

Do restart the Typescript language service when updating library's code if the example app reports errors in the IDE. Sometimes it gets lost as doesn't detect that library code changed.

In WebStorm, you can [search for an action](https://www.jetbrains.com/help/webstorm/searching-everywhere.html#ws_search_actions) named `Restart Typescript service`

In Visual Studio Code, with a Typescript file opened, [open the command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) and look for `Typescript: Restart TS Server`
