## [`ngx-meta` v1.0.0-alpha.7](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.6...ngx-meta-v1.0.0-alpha.7) (2023-11-29)

### Bug Fixes

- open graph listener as provider + root guards ([#47](https://github.com/davidlj95/ngx/issues/47)) ([dd90573](https://github.com/davidlj95/ngx/commit/dd90573dfc8c73b758731066166deeef790d5f09))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#43](https://github.com/davidlj95/ngx/issues/43)) ([8cb4763](https://github.com/davidlj95/ngx/commit/8cb47634eb8dbec726a17d2c8000f308bfb20dd0))

### Tests

- **e2e:** add common routes fixture ([#45](https://github.com/davidlj95/ngx/issues/45)) ([4211f12](https://github.com/davidlj95/ngx/commit/4211f1267d915e5ed00563a016684e7e89245272))
- **e2e:** rename general metadata json fixture ([#44](https://github.com/davidlj95/ngx/issues/44)) ([47bd795](https://github.com/davidlj95/ngx/commit/47bd795e32279923de0b3f311622c28dda94d4b8))

### Build System

- improve a17 e2e app dx ([#42](https://github.com/davidlj95/ngx/issues/42)) ([42d3c1c](https://github.com/davidlj95/ngx/commit/42d3c1c0f0b1e5f7d8daa0291d9ae909f49efd81))

### Continuous (Integration|Deployment)

- **e2e:** remove e2e apps Angular cache ([#46](https://github.com/davidlj95/ngx/issues/46)) ([a799ac4](https://github.com/davidlj95/ngx/commit/a799ac457d2c2f07633afb77b400fbd0c3985603))

## [`ngx-meta` v1.0.0-alpha.6](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.5...ngx-meta-v1.0.0-alpha.6) (2023-11-29)

### Bug Fixes

- move general md appliers to providers ([#41](https://github.com/davidlj95/ngx/issues/41)) ([08b5f04](https://github.com/davidlj95/ngx/commit/08b5f04fd65d07b3f19abd0ebbb935dd19bddf58))

### Miscellaneous Chores

- **release:** update generated assets ([#28](https://github.com/davidlj95/ngx/issues/28)) ([4699911](https://github.com/davidlj95/ngx/commit/4699911aa90df75e28e1b2729d6be72754fdf925))

### Code Refactoring

- generate dist in project dir ([#38](https://github.com/davidlj95/ngx/issues/38)) ([6aa4649](https://github.com/davidlj95/ngx/commit/6aa4649faef7de75405bafdc690a64e728702aad))
- link appliers with API types ([#32](https://github.com/davidlj95/ngx/issues/32)) ([9bfbdf7](https://github.com/davidlj95/ngx/commit/9bfbdf7c4e61d1170b196e53aef65cfcb5039d0f))
- move lib src into separate dir ([#33](https://github.com/davidlj95/ngx/issues/33)) ([146f929](https://github.com/davidlj95/ngx/commit/146f929ec6b56939d843c574f9f931c77d4b4ca2))
- remove meta command ([#31](https://github.com/davidlj95/ngx/issues/31)) ([db42eb0](https://github.com/davidlj95/ngx/commit/db42eb0197e2bfd3be851661f7e3d193e0681400))

### Tests

- add Angular v17 app ([#34](https://github.com/davidlj95/ngx/issues/34)) ([525c738](https://github.com/davidlj95/ngx/commit/525c73894a449f420edaecfbabcb15324a45a552))
- add Cypress with first test ([#36](https://github.com/davidlj95/ngx/issues/36)) ([2f8aac6](https://github.com/davidlj95/ngx/commit/2f8aac64d9ebdeb6bff4cafc248f7fc6672d920f))

### Build System

- **angular:** set pnpm as package manager ([723c18d](https://github.com/davidlj95/ngx/commit/723c18d2816122364ecb870cd2f14c0a2640a2a1))
- **deps-dev:** update pnpm to v8.11.0 ([6f1a7be](https://github.com/davidlj95/ngx/commit/6f1a7be9ba294ce6ed42351845bbacb1504fed0b))
- **deps:** pin dependencies ([#37](https://github.com/davidlj95/ngx/issues/37)) ([66a5328](https://github.com/davidlj95/ngx/commit/66a5328e78312fcf5effa50dc8d489bb2bbc8cef))
- **deps:** pin peter-evans/create-pull-request action to 1534078 ([#29](https://github.com/davidlj95/ngx/issues/29)) ([d32cd06](https://github.com/davidlj95/ngx/commit/d32cd06855ba6ec274760ab7f8656e5966d41f97))
- fix ngx-meta dist path ([25b57eb](https://github.com/davidlj95/ngx/commit/25b57eb9b075bf06c50f4963aa5813d898c57839))
- fix wrong dist after refactor ([7202eff](https://github.com/davidlj95/ngx/commit/7202eff5c87ba2ad8a4f2bc0877200ee54e7849e))

### Continuous (Integration|Deployment)

- **e2e:** add Angular e2e apps cache ([#40](https://github.com/davidlj95/ngx/issues/40)) ([669cb0e](https://github.com/davidlj95/ngx/commit/669cb0ec294c351bbaa603cbe74fb478db878025))
- **e2e:** add matrix to run for multiple versions ([#39](https://github.com/davidlj95/ngx/issues/39)) ([4e4834a](https://github.com/davidlj95/ngx/commit/4e4834acecbfce79b00daecfbe7fed265e259c02))
- **main:** add e2e to main workflow ([9871f89](https://github.com/davidlj95/ngx/commit/9871f89245435c886d3d54f94f87fb06a56407f7))

## [`ngx-meta` v1.0.0-alpha.5](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.4...ngx-meta-v1.0.0-alpha.5) (2023-11-26)

### Miscellaneous Chores

- debug release PR plugin ([e53a922](https://github.com/davidlj95/ngx/commit/e53a9229c65f4c07a2e697fd826c1410bdfba387))
- **release:** maintenance debugging PR flow ([e246882](https://github.com/davidlj95/ngx/commit/e246882a2222411b76c0c37472d4029928a8e898))
- **release:** remove @semantic-release/git step ([970d6d5](https://github.com/davidlj95/ngx/commit/970d6d532df9287bb5aa1bdedb3cd0f644b7dc1e))
- **release:** update CHANGELOG.md ([#27](https://github.com/davidlj95/ngx/issues/27)) ([a895467](https://github.com/davidlj95/ngx/commit/a895467f8592af97a7b1558852d4dbb573b545fe))
- remove broken semantic-release github PR dep ([6645d45](https://github.com/davidlj95/ngx/commit/6645d45abbf3febe9b50a42bfb7ce58eaa74af53))

### Build System

- enable release debug ([78500fd](https://github.com/davidlj95/ngx/commit/78500fdee0957aea54edd5346fee7a636f9a5e77))
- **release:** publish CHANGELOG via git ([3fd979d](https://github.com/davidlj95/ngx/commit/3fd979de399a4474b8f2a99fabc6d30d9ad89681))
- **release:** rename fake release branch ([d0dcd70](https://github.com/davidlj95/ngx/commit/d0dcd70343887f663048070d423a5678fb46863d))

### Continuous (Integration|Deployment)

- add github token back to release step ([2a513c0](https://github.com/davidlj95/ngx/commit/2a513c0a412407870877dcb8f42597bd2875a8df))
- add permissions back to release wf ([ad1ae3d](https://github.com/davidlj95/ngx/commit/ad1ae3dc91d3130e24308df952091dd8c7342688))
- do not include notes in release commit msg ([3a8123b](https://github.com/davidlj95/ngx/commit/3a8123b8977c451bd7fdf33c68624249b3fe7544))
- fix git env vars & associate to user ([7fc9d06](https://github.com/davidlj95/ngx/commit/7fc9d068d04cb35c518c222d42362c92a42d7eba))
- **release:** add required privileges to create PRs ([116b8dd](https://github.com/davidlj95/ngx/commit/116b8dd8c23e5f8ac33847915c735622d77b5bb7))
- **release:** back to GitHub token for auth ([553be44](https://github.com/davidlj95/ngx/commit/553be441987e057fd40e0bf31fc0ab19043c1e9e))
- **release:** enable created PR auto-merge & fix title ([280a425](https://github.com/davidlj95/ngx/commit/280a4253e373b68d0531055b71cc3f721e1bcd1d))
- **release:** fix error when no PR is created ([f8f3127](https://github.com/davidlj95/ngx/commit/f8f3127e21e52fd6cad4278bac13d9f7431897a8))
- **release:** fix gh CLI cmd again (missing flag) ([2295253](https://github.com/davidlj95/ngx/commit/2295253c9659e8dd0af4701f3d16894537e60bb1))
- **release:** fix gh merge CLI cmd ([a775e33](https://github.com/davidlj95/ngx/commit/a775e33aae4d623c02b62d2184bdd49c780fe828))
- **release:** use action to publish outputs ([090fc35](https://github.com/davidlj95/ngx/commit/090fc35bd8a09e7fad1f8e2dd4803e899a38e05b))
- rename gh token env var ([181256f](https://github.com/davidlj95/ngx/commit/181256fb1c0c49addf16668600c40cc97e76df40))
- revert to previous cache way ([#23](https://github.com/davidlj95/ngx/issues/23)) ([53af7c4](https://github.com/davidlj95/ngx/commit/53af7c480b7e60c822c06eac7fdc6e6ffc2bca53))
- workaroud for git/github & semantic release ([0b5649a](https://github.com/davidlj95/ngx/commit/0b5649a0a4004ee8b6d1572d9e84ef7f6b7c9331))

## Older alpha releases

Can be viewed through [GitHub Releases](https://github.com/davidlj95/ngx/releases)

No CHANGELOG was published then.
