# `@davidlj95/ngx-meta` E2E scripts

Scripts here allow to create sample Angular apps using Angular CLI that embed the library.

## Setup

First, install the dependencies

```shell
pnpm install
```

## Tasks

### Build

In order to run the script, first you must build it (to avoid using `ts-node` or similar).

Run

```shell
pnpm run build
```

To build scripts. Or if you're developing them, run

```shell
pnpm run watch
```

To build them as their contents change

### Run

> [!IMPORTANT]
> Build the library first, generated apps will install the library linking it to the distribution files directory. It's important the directory exists. There's no need to re-install / re-link the library when library distribution files change. Given it's a symlink apps will consume new version straight forward. You may need to clear Angular's cache though to get fresh changes.

To run the script and generate a sample app:

```shell
pnpm run create-sample-app APP_NAME
```

Script will help with arguments if not used properly. Remember to build the script first.

> [!TIP]
> If you change library's code and the app does not show changes, try clearing up the apps' build cache. Go to the app directory and run
>
> ```sh
> ng cache clean
> ```
