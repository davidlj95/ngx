# Bundle size

In order to keep library take as few bytes as possible from your app's bundle size, we keep track of how much bytes the library takes from your bundle size.

## Last commit on `main`

Here's how much bytes the library takes of your main bundle size when using all its features:

--8<-- "includes/bundle-size/v18/bundle-size-report.md"
--8<-- "includes/bundle-size/v17/bundle-size-report.md"
--8<-- "includes/bundle-size/v16/bundle-size-report.md"
--8<-- "includes/bundle-size/v15/bundle-size-report.md"

## Pull request

Every pull request contains a comment tracking the bundle size including changes in that pull request. See [CI/CD workflow](https://github.com/davidlj95/ngx/blob/d87cd273ab70cfcd4f64e2faa0ccd1f97f2fa241/.github/workflows/reusable-bundle-size.yml#L89-L89) or an [example PR comment](https://github.com/davidlj95/ngx/pull/192#issuecomment-1895710843)
