## [`ngx-meta` v1.0.0-beta.14](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.13...ngx-meta-v1.0.0-beta.14) (2024-10-02)

### Features

- change provider API to return environment providers ([#875](https://github.com/davidlj95/ngx/issues/875)) ([2d84e04](https://github.com/davidlj95/ngx/commit/2d84e04f10b466f4fd1f4810d10ee416eb77f38b))

### Documentation

- add public api surface docs ([#860](https://github.com/davidlj95/ngx/issues/860)) ([ff5ca0e](https://github.com/davidlj95/ngx/commit/ff5ca0eb26dfdec4732d174db545f12c958fadc5))
- recommend standalone APIs over module-based APIs ([#859](https://github.com/davidlj95/ngx/issues/859)) ([42edc50](https://github.com/davidlj95/ngx/commit/42edc505d833e47bc4ecaf65430652da9b1a62fb))
- remove [@see](https://github.com/see) usages & use ref name syntax ([#834](https://github.com/davidlj95/ngx/issues/834)) ([0c7cecd](https://github.com/davidlj95/ngx/commit/0c7cecd85d84628677542b7c0590a7003b4b3efa))

### Miscellaneous Chores

- add comments to coverage ignored blocks ([#846](https://github.com/davidlj95/ngx/issues/846)) ([953e126](https://github.com/davidlj95/ngx/commit/953e12601feefe6b684c3668541d4bafa79c373a))
- improve API ref docs and types ([#858](https://github.com/davidlj95/ngx/issues/858)) ([bdfbfa6](https://github.com/davidlj95/ngx/commit/bdfbfa691024b68bcaa5ced104af1015f9c7bea4))
- **release:** update CHANGELOG.md ([#832](https://github.com/davidlj95/ngx/issues/832)) ([405e298](https://github.com/davidlj95/ngx/commit/405e29813cdbd67f9426980f6d071dd9aa53d4a5))
- remove unneeded double underscore prefixes ([#869](https://github.com/davidlj95/ngx/issues/869)) ([7239d54](https://github.com/davidlj95/ngx/commit/7239d544ea292c66bdf5a7e3ac6854d5717e7aad))

### Code Refactoring

- add an index per core feature listing exports ([#863](https://github.com/davidlj95/ngx/issues/863)) ([e67faff](https://github.com/davidlj95/ngx/commit/e67faff613292b227a7009f428d9ba909edbfe7c))
- group core module files into features ([#862](https://github.com/davidlj95/ngx/issues/862)) ([e65ff6d](https://github.com/davidlj95/ngx/commit/e65ff6d5a1e5c9b13b1642baf128f6bed80891fd))
- group json ld module files by feature dirs ([#864](https://github.com/davidlj95/ngx/issues/864)) ([2300236](https://github.com/davidlj95/ngx/commit/2300236f03ceb897be842558729251ee1048f73c))
- group Open Graph module by feature dirs ([#865](https://github.com/davidlj95/ngx/issues/865)) ([fa5a0c1](https://github.com/davidlj95/ngx/commit/fa5a0c10115baa5734b99e745c3473a3b60b1545))
- group routing module files into dirs by feature ([#866](https://github.com/davidlj95/ngx/issues/866)) ([e163938](https://github.com/davidlj95/ngx/commit/e1639381b027a81be695f6cf5d3b40cbd72587b4))
- group standard module files by feature dirs ([#867](https://github.com/davidlj95/ngx/issues/867)) ([5ffd491](https://github.com/davidlj95/ngx/commit/5ffd491c7717433d7ad8e2e9a2a864f925b0c930))
- group Twitter Card files by feature dirs ([#868](https://github.com/davidlj95/ngx/issues/868)) ([791593e](https://github.com/davidlj95/ngx/commit/791593e59b69ddc6bd1638f38d6dceada631ea64))
- move Open Graph main types into directory ([#871](https://github.com/davidlj95/ngx/issues/871)) ([c531cdf](https://github.com/davidlj95/ngx/commit/c531cdfca1d95b5159259a2b180683f88909cda9))
- provide head element mgr with root factory ([#836](https://github.com/davidlj95/ngx/issues/836)) ([099197d](https://github.com/davidlj95/ngx/commit/099197d1ab02f2740aa638c244db5b8efc336dc9))
- provide metadata loader with factory fn ([#841](https://github.com/davidlj95/ngx/issues/841)) ([e83fc97](https://github.com/davidlj95/ngx/commit/e83fc97f3b0723ab4eb102cb7f30a6c90657f667))
- provide metadata registry in root ([#840](https://github.com/davidlj95/ngx/issues/840)) ([fcc891b](https://github.com/davidlj95/ngx/commit/fcc891b140585f6b96f35137a0cdeb4d22f863de))
- provide metadata resolver using factory fn ([#839](https://github.com/davidlj95/ngx/issues/839)) ([eef8c5a](https://github.com/davidlj95/ngx/commit/eef8c5ae1d88adef307ed2a3a74302d68b7ed1a0))
- remove lib prefix from route values service ([#837](https://github.com/davidlj95/ngx/issues/837)) ([20733f1](https://github.com/davidlj95/ngx/commit/20733f1069daaaf5e52e2e85093abe0025291ea3))
- remove prefix from router listener service ([#843](https://github.com/davidlj95/ngx/issues/843)) ([e5e2b7b](https://github.com/davidlj95/ngx/commit/e5e2b7b6a3ad1c762303198fed7ec901fc648093))
- remove underscore prefix from core feature APIs ([#861](https://github.com/davidlj95/ngx/issues/861)) ([eeae8dc](https://github.com/davidlj95/ngx/commit/eeae8dc3e0c5c5eb7a0f01e72d3e2d3e53495e56))
- remove underscore prefix from module name ([#870](https://github.com/davidlj95/ngx/issues/870)) ([23d8a0e](https://github.com/davidlj95/ngx/commit/23d8a0ed00e938688a0c7a06a0247de70c21bbc6))
- rename defaults token to defaults ([#838](https://github.com/davidlj95/ngx/issues/838)) ([b85ca2c](https://github.com/davidlj95/ngx/commit/b85ca2cc6be2f4b14822f0d623a097f30a83d804))
- simplify route metadata strategy ([#845](https://github.com/davidlj95/ngx/issues/845)) ([5c1a2e7](https://github.com/davidlj95/ngx/commit/5c1a2e7ab3f244b217adfa7395fd92a820014d5d))
- turn metadata registry into a lightweight token ([#872](https://github.com/davidlj95/ngx/issues/872)) ([cbf54bc](https://github.com/davidlj95/ngx/commit/cbf54bcab87a930b80a80d71e2fa1aef2772ac27))
- turn router listener into a lightweight injectable ([#844](https://github.com/davidlj95/ngx/issues/844)) ([58b240e](https://github.com/davidlj95/ngx/commit/58b240e60205e4822a963e879ca92808487c6c50))
- use core provider API from module API ([#874](https://github.com/davidlj95/ngx/issues/874)) ([c1212b7](https://github.com/davidlj95/ngx/commit/c1212b74ec8e8afefe40c46170c30b1b44f093b2))
- use inject for route listener init ([#842](https://github.com/davidlj95/ngx/issues/842)) ([df7349e](https://github.com/davidlj95/ngx/commit/df7349e7d01c9a0ef85c4cf7f094a691bef31d59))
- use route metadata strategy to get route values ([#847](https://github.com/davidlj95/ngx/issues/847)) ([fac8e4a](https://github.com/davidlj95/ngx/commit/fac8e4a0425a798d147781692db5c308b770a6b8))

### Build System

- add missing commitlint types dev dep ([#835](https://github.com/davidlj95/ngx/issues/835)) ([d2cca3d](https://github.com/davidlj95/ngx/commit/d2cca3dbbc95e0c91703de18dd3de551ca80cb19))
- **deps:** update actions/setup-node digest to 0a44ba7 ([69aa5fb](https://github.com/davidlj95/ngx/commit/69aa5fb17b1fe58c76ffc39d32a46c3213f4e133))
- **deps:** update dependency mkdocs-material to v9.5.39 ([c5be2b8](https://github.com/davidlj95/ngx/commit/c5be2b84463bd1ae9e28f8996dcb8db870dbf66a))
- **deps:** update peter-evans/create-pull-request digest to 5e91468 ([ec39a40](https://github.com/davidlj95/ngx/commit/ec39a402829410dcc081d0f8ae83f8a5596b0570))
- **deps:** update pnpm to v9.11.0 ([021902e](https://github.com/davidlj95/ngx/commit/021902ef6fa4541d3a1a88663298bc3572a0c32e))
- **deps:** update rhysd/actionlint:latest docker digest to 89d3f90 ([7a6165a](https://github.com/davidlj95/ngx/commit/7a6165a4328f1d5654f04a1ece3fe1399f4fd795))
- **dev-deps:** update dependency @cypress/code-coverage to v3.13.2 ([77c04cf](https://github.com/davidlj95/ngx/commit/77c04cfa68a34caa4520dc4edc4abd28495f8c88))
- **dev-deps:** update dependency execa to v9.4.0 ([2deb03b](https://github.com/davidlj95/ngx/commit/2deb03bd920781504bc8e054596b6485a018e0b6))
- **dev-deps:** update dependency nyc to v17.1.0 ([701eb67](https://github.com/davidlj95/ngx/commit/701eb67a3304e181441acd035370c0e12dbbfd51))
- **dev-deps:** update dependency semantic-release to v24.1.2 ([3a46457](https://github.com/davidlj95/ngx/commit/3a46457fc1ac6e2de3951c99e8009b7c125fbd3c))
- move files for format ignore to global gitignore ([#833](https://github.com/davidlj95/ngx/issues/833)) ([3f1d6b6](https://github.com/davidlj95/ngx/commit/3f1d6b67d5b88975057475e5903896a66c30da0e))

## [`ngx-meta` v1.0.0-beta.13](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.12...ngx-meta-v1.0.0-beta.13) (2024-09-25)

### Features

- allow feature APIs in core module + deprecate options ([#830](https://github.com/davidlj95/ngx/issues/830)) ([47e027e](https://github.com/davidlj95/ngx/commit/47e027e9a2fc5f1e418690af2f935b9ad5a1651e))

### Documentation

- improve OG, Twitter types ([#827](https://github.com/davidlj95/ngx/issues/827)) ([5e94c81](https://github.com/davidlj95/ngx/commit/5e94c810998d19ba8cee08d719fae585ebdae2be))
- improve standard module docs ([#824](https://github.com/davidlj95/ngx/issues/824)) ([f0bdc83](https://github.com/davidlj95/ngx/commit/f0bdc837f2022d2377a3b712a4eb9b14d02c7496))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#825](https://github.com/davidlj95/ngx/issues/825)) ([fe26da6](https://github.com/davidlj95/ngx/commit/fe26da6294311dd1086ad821f1b54842daf05484))
- rename unit test suites ([#828](https://github.com/davidlj95/ngx/issues/828)) ([2f6b805](https://github.com/davidlj95/ngx/commit/2f6b805f4c0c82cb7f1001fc1660dee4e5b72e7a))

### Tests

- improve ngx meta core module unit tests ([#829](https://github.com/davidlj95/ngx/issues/829)) ([5befe1e](https://github.com/davidlj95/ngx/commit/5befe1e8a7183c3f33ab81dedbb8b6e61718ab00))

### Build System

- fix e2e cypress tests failing if no coverage ([#826](https://github.com/davidlj95/ngx/issues/826)) ([033fb15](https://github.com/davidlj95/ngx/commit/033fb15d96919a7f50917cbf8848f39c5b542967))
- **ide:** set WebStorm to use path mappings only when needed ([#831](https://github.com/davidlj95/ngx/issues/831)) ([0ef6ed2](https://github.com/davidlj95/ngx/commit/0ef6ed263c69cfc3c607ba5947f9721bd0104098))

## [`ngx-meta` v1.0.0-beta.12](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.11...ngx-meta-v1.0.0-beta.12) (2024-09-19)

### Features

- expose standard theme color metadata provider ([#823](https://github.com/davidlj95/ngx/issues/823)) ([d1fb1e7](https://github.com/davidlj95/ngx/commit/d1fb1e72f7c74cac117302dd54f76e2e9b7dfca3))

### Documentation

- add reminder about values setting in defaults guide ([#775](https://github.com/davidlj95/ngx/issues/775)) ([96bdb40](https://github.com/davidlj95/ngx/commit/96bdb407b480efd55b8193aa74350380d3c29a6d))
- several links / content improvements around ([#813](https://github.com/davidlj95/ngx/issues/813)) ([5dead88](https://github.com/davidlj95/ngx/commit/5dead882b311af91e2bbea04b5b8a409f1ece666))

### Miscellaneous Chores

- be more specific with indexed object type ([#815](https://github.com/davidlj95/ngx/issues/815)) ([f9bb51b](https://github.com/davidlj95/ngx/commit/f9bb51b5c26efbffbd2fc546582adc0a83d2f5c6))
- **release:** update CHANGELOG.md ([#774](https://github.com/davidlj95/ngx/issues/774)) ([4bb2c10](https://github.com/davidlj95/ngx/commit/4bb2c104e3563381d643cb1e4ca1571871a7c49e))
- remove unused no-op util ([#821](https://github.com/davidlj95/ngx/issues/821)) ([1138874](https://github.com/davidlj95/ngx/commit/1138874cd61767d62fc81caab652555173516ee9))

### Build System

- **deps:** update actions/setup-python digest to f677139 ([8a1b6c6](https://github.com/davidlj95/ngx/commit/8a1b6c6b78144c82223b6cc985035bf68d988371))
- **deps:** update actions/upload-artifact digest to 5076954 ([c84e76c](https://github.com/davidlj95/ngx/commit/c84e76ca0654cafc267106a0e6df71ea8ae35fa9))
- **deps:** update Angular to v18.2.0 ([#777](https://github.com/davidlj95/ngx/issues/777)) ([02dcfb1](https://github.com/davidlj95/ngx/commit/02dcfb1dfb0fb3d63b34005166bb8d987b7b03c1))
- **deps:** update cypress-io/github-action action to v6.7.5 ([77ba9ef](https://github.com/davidlj95/ngx/commit/77ba9efdfd54ee6dc4f902c9a01e4fee9762528f))
- **deps:** update cypress-io/github-action action to v6.7.6 ([82b2163](https://github.com/davidlj95/ngx/commit/82b216323ef6473d73b637b5dd93541fd9581860))
- **deps:** update dependency mkdocs-git-revision-date-localized-plugin to v1.2.7 ([0c81697](https://github.com/davidlj95/ngx/commit/0c81697eb05fdda9be3c61f7585138276e54d882))
- **deps:** update dependency mkdocs-material to v9.5.33 ([bfb5c0f](https://github.com/davidlj95/ngx/commit/bfb5c0fdbbcffa832a00f9e13bf38eecf513e43e))
- **deps:** update dependency mkdocs-material to v9.5.34 ([ab46988](https://github.com/davidlj95/ngx/commit/ab46988744c83a0954e3cd0ee9f7bcdfc2d1a94e))
- **deps:** update dependency node to v20.17.0 ([22eb890](https://github.com/davidlj95/ngx/commit/22eb890c2842c2fe9a263c3b1a85bc51a7ec7632))
- **deps:** update peter-evans/create-pull-request action to v7 ([#809](https://github.com/davidlj95/ngx/issues/809)) ([ad78be1](https://github.com/davidlj95/ngx/commit/ad78be17c6631a08283379175fdb19fdd083f628))
- **deps:** update pnpm to v9.7.1 ([90f4e28](https://github.com/davidlj95/ngx/commit/90f4e2843f691d1a7659ec902a6e20154582ec19))
- **deps:** update pnpm to v9.9.0 ([5319234](https://github.com/davidlj95/ngx/commit/53192344bd7913cebd0cff65fd1cb839f8bdb97e))
- **deps:** update python to v3.12.5 ([#811](https://github.com/davidlj95/ngx/issues/811)) ([41737dd](https://github.com/davidlj95/ngx/commit/41737dd543cd4986630be58406a3387750f769d5))
- **deps:** update python to v3.12.6 ([a9d8ba7](https://github.com/davidlj95/ngx/commit/a9d8ba77a29ece75b9b77d7496ffc48c49a1c869))
- **dev-deps:** update angular-cli monorepo ([749b122](https://github.com/davidlj95/ngx/commit/749b122a554a2041a5adc1ef41ad1f21dd71751e))
- **dev-deps:** update commitlint monorepo to v19.4.1 ([ea6d5ac](https://github.com/davidlj95/ngx/commit/ea6d5ac2e639c45bf4ccb7e0ba20dd84d785e447))
- **dev-deps:** update dependency @cypress/code-coverage to v3.12.45 ([cab8e28](https://github.com/davidlj95/ngx/commit/cab8e28d8e3c8ef2a7042d0483e7d48c20f735e9))
- **dev-deps:** update dependency @cypress/code-coverage to v3.12.46 ([97a4a48](https://github.com/davidlj95/ngx/commit/97a4a48d2bd24b4cd099d88b3ac8aa26b9650194))
- **dev-deps:** update dependency @cypress/code-coverage to v3.12.47 ([cf256e5](https://github.com/davidlj95/ngx/commit/cf256e5f79920030dacc2775214e7ef177a8d232))
- **dev-deps:** update dependency @cypress/code-coverage to v3.12.48 ([b023cb5](https://github.com/davidlj95/ngx/commit/b023cb5d494068f530a0991b5567586163ca3a75))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.47.6 ([fd3e2e0](https://github.com/davidlj95/ngx/commit/fd3e2e0c5bb14dd719092bca6351fb18a80df45c))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.47.7 ([43e82a8](https://github.com/davidlj95/ngx/commit/43e82a8dbcf34ac8676e25c2a65917dac144199b))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.47.9 ([4db1a1d](https://github.com/davidlj95/ngx/commit/4db1a1dea76f297d709fea877232a581aacb77d2))
- **dev-deps:** update dependency @types/node to v20.15.0 ([e05ee3f](https://github.com/davidlj95/ngx/commit/e05ee3f51b2ee168deeaff40febee7284ec71edb))
- **dev-deps:** update dependency @types/node to v22.5.4 ([1121c7a](https://github.com/davidlj95/ngx/commit/1121c7abb4e6ee729001e82c9ec3d00226ab6104))
- **dev-deps:** update dependency cypress to v13.13.3 ([98c50f7](https://github.com/davidlj95/ngx/commit/98c50f761b4f29cf68a61721e29b03e78280ae55))
- **dev-deps:** update dependency cypress to v13.14.2 ([5d727fd](https://github.com/davidlj95/ngx/commit/5d727fde2ad9de5652f44b2fce5d491b88ae7101))
- **dev-deps:** update dependency execa to v9.3.1 ([4782753](https://github.com/davidlj95/ngx/commit/4782753906cd14baaa13583ffeb64751297f7bd1))
- **dev-deps:** update dependency husky to v9.1.5 ([df63f1a](https://github.com/davidlj95/ngx/commit/df63f1acdaba50a62a3e3989d54a1c5a16047055))
- **dev-deps:** update dependency husky to v9.1.6 ([42b0947](https://github.com/davidlj95/ngx/commit/42b09475731491b273aad25db383c3e84034152b))
- **dev-deps:** update dependency lint-staged to v15.2.10 ([048826d](https://github.com/davidlj95/ngx/commit/048826d58e80b676e9570f1d93dff26306c2081a))
- **dev-deps:** update dependency lint-staged to v15.2.9 ([5fdf4af](https://github.com/davidlj95/ngx/commit/5fdf4afbeeaee63bc1aae5a10e2c4083cff52287))
- **dev-deps:** update dependency ng-mocks to v14.13.1 ([de9429b](https://github.com/davidlj95/ngx/commit/de9429bebc144e17eec58b34fba48fec6a7a658c))
- **dev-deps:** update dependency ng-packagr to v18.2.0 ([6f702f2](https://github.com/davidlj95/ngx/commit/6f702f2ef7af631cb26afbba84fadea2d18462f0))
- **dev-deps:** update dependency ng-packagr to v18.2.1 ([8134eec](https://github.com/davidlj95/ngx/commit/8134eecef266295da8e8a6f83b181d0267845487))
- **dev-deps:** update dependency semantic-release to v24.1.0 ([e576546](https://github.com/davidlj95/ngx/commit/e57654685ceec5a885906a85fee4fe1873568244))
- **dev-deps:** update dependency semantic-release to v24.1.1 ([17a1564](https://github.com/davidlj95/ngx/commit/17a1564435c190cf0326c9836fbd8667b096dc87))
- **dev-deps:** update dependency start-server-and-test to v2.0.7 ([db2ba6f](https://github.com/davidlj95/ngx/commit/db2ba6f5295277b88a3ee448c8be5a5943302ce8))
- **dev-deps:** update dependency tslib to v2.7.0 ([deffedf](https://github.com/davidlj95/ngx/commit/deffedf30efa2cd520c78a71cbdea97679ab1064))
- **dev-deps:** update fontsource monorepo ([fd0efe1](https://github.com/davidlj95/ngx/commit/fd0efe1bc5b83b73e264c81ec14fdc8f8a3b424c))

## [`ngx-meta` v1.0.0-beta.11](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.10...ngx-meta-v1.0.0-beta.11) (2024-08-13)

### Features

- **standard:** add theme color meta ([#772](https://github.com/davidlj95/ngx/issues/772)) ([3205f08](https://github.com/davidlj95/ngx/commit/3205f0818ca18e22af26162417f0f6e2e262a7f8))

### Documentation

- add link to supported metadata elements in features page ([#773](https://github.com/davidlj95/ngx/issues/773)) ([09087ee](https://github.com/davidlj95/ngx/commit/09087eeb9243ffe885a94123f8d79cc138fcb3aa))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#770](https://github.com/davidlj95/ngx/issues/770)) ([9083287](https://github.com/davidlj95/ngx/commit/9083287f6e45ccee80f165b63ceeed0eb0aa4a25))

## [`ngx-meta` v1.0.0-beta.10](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.9...ngx-meta-v1.0.0-beta.10) (2024-08-12)

### Features

- allow null Twitter Card creator or site ([#769](https://github.com/davidlj95/ngx/issues/769)) ([4d175f3](https://github.com/davidlj95/ngx/commit/4d175f31fe9a1d0be1c20643821f0425216ebf6f))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#767](https://github.com/davidlj95/ngx/issues/767)) ([e84f1a8](https://github.com/davidlj95/ngx/commit/e84f1a8e80443116faff3e07ce643c870e592523))

## [`ngx-meta` v1.0.0-beta.9](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.8...ngx-meta-v1.0.0-beta.9) (2024-08-12)

### Reverts

- Revert "build(deps): update python to v3.12.5" ([#766](https://github.com/davidlj95/ngx/issues/766)) ([464dc36](https://github.com/davidlj95/ngx/commit/464dc364fbd042fe8d58ce924b807df28f866cdd))

### Miscellaneous Chores

- **config:** migrate renovate config ([#750](https://github.com/davidlj95/ngx/issues/750)) ([fab3f3c](https://github.com/davidlj95/ngx/commit/fab3f3c17fd9892652337218cb203f6786c0d9ab))
- **release:** update CHANGELOG.md ([#748](https://github.com/davidlj95/ngx/issues/748)) ([1d4e403](https://github.com/davidlj95/ngx/commit/1d4e4032613fb5997c5b0ae589de0a9e2f91db0b))

### Code Refactoring

- use dev msg formatter around ([#749](https://github.com/davidlj95/ngx/issues/749)) ([c73d06f](https://github.com/davidlj95/ngx/commit/c73d06f34e421255b3b984201d6f7c7d37226c1c))

### Build System

- **deps:** update actions/upload-artifact digest to 834a144 ([f63cef8](https://github.com/davidlj95/ngx/commit/f63cef8ba783d315221ac681f020d3c3dba721c6))
- **deps:** update python to v3.12.5 ([4aca420](https://github.com/davidlj95/ngx/commit/4aca4209ee3da53b2fc35fa3dccb1776d4e8a83c))
- **dev-deps:** update dependency @commitlint/cli to v19.4.0 ([f6fe00c](https://github.com/davidlj95/ngx/commit/f6fe00c3948917231ac14ac88539c07dff2cbb35))
- **dev-deps:** update dependency @types/node to v20.14.15 ([ffbee98](https://github.com/davidlj95/ngx/commit/ffbee98595820a4afac7df4c4d2c4404bee57a98))
- **dev-deps:** update dependency @types/node to v22.2.0 ([6f9504a](https://github.com/davidlj95/ngx/commit/6f9504a6f946e590f9b816f076c18769b470d85b))
- **dev-deps:** update dependency cypress to v13.13.2 ([5242743](https://github.com/davidlj95/ngx/commit/524274304fd63bd24d3f5abb1c75d0fa8ab9d9e5))
- **dev-deps:** update dependency eslint-plugin-cypress to v3.5.0 ([e51c552](https://github.com/davidlj95/ngx/commit/e51c552a08ebdd9a20df4b3e9e0b16bc76162a90))
- **dev-deps:** update dependency husky to v9.1.4 ([c966d60](https://github.com/davidlj95/ngx/commit/c966d60cff06cffd0e083090622d2caacc746be0))
- **dev-deps:** update dependency lint-staged to v15.2.8 ([1137c3d](https://github.com/davidlj95/ngx/commit/1137c3df3e4340c7fa51a8a9c37fd5aed274e2d1))
- **dev-deps:** update typescript-eslint monorepo to v7.18.0 ([51b1999](https://github.com/davidlj95/ngx/commit/51b199986db7f7cf40ac89cb636c8e3cde3225e5))
- **example-apps:** detect standalone based on version default ([#759](https://github.com/davidlj95/ngx/issues/759)) ([5e760ce](https://github.com/davidlj95/ngx/commit/5e760cea62c64ec45694b9a28b99caed973f2ce9))

## [`ngx-meta` v1.0.0-beta.8](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.7...ngx-meta-v1.0.0-beta.8) (2024-08-05)

### Features

- add dev msg if too long OG/Twitter descriptions ([#747](https://github.com/davidlj95/ngx/issues/747)) ([b2f845b](https://github.com/davidlj95/ngx/commit/b2f845bb7187eafb211f39be95a8ddcb55b79859))

### Style

- remove unneeded `setter` describe block in tests ([#739](https://github.com/davidlj95/ngx/issues/739)) ([8f516cc](https://github.com/davidlj95/ngx/commit/8f516cc7954ed7b24ae97ef441bb64abd8a38ad9))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#740](https://github.com/davidlj95/ngx/issues/740)) ([ea6dcc1](https://github.com/davidlj95/ngx/commit/ea6dcc112f6e729350e7da6be05278277703b84f))

### Build System

- **deps:** update dependency mkdocs-material to v9.5.31 ([8d70da9](https://github.com/davidlj95/ngx/commit/8d70da9d6e47471422fc39e01c858dd05f0b8cbf))
- **deps:** update dependency zone.js to v0.14.8 ([762c5fc](https://github.com/davidlj95/ngx/commit/762c5fcced1d7522c3b14ef96a6b71587c885b28))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.47.5 ([7fa25e2](https://github.com/davidlj95/ngx/commit/7fa25e2ee47edeb93dc4fa9c1e990a837222fe20))

## [`ngx-meta` v1.0.0-beta.7](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.6...ngx-meta-v1.0.0-beta.7) (2024-08-03)

### Features

- add dev error 4 non http(s) Twitter Card image URLs ([#738](https://github.com/davidlj95/ngx/issues/738)) ([1ad2375](https://github.com/davidlj95/ngx/commit/1ad23755f7321478c9d21367da7554d45cca0ad9))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#736](https://github.com/davidlj95/ngx/issues/736)) ([7617f97](https://github.com/davidlj95/ngx/commit/7617f977f2a58c12fac800a81dcfa8ff5595161c))

### Build System

- revert dead code elimination hack for coverage ([#737](https://github.com/davidlj95/ngx/issues/737)) ([073700a](https://github.com/davidlj95/ngx/commit/073700a062aabdbb7ce309fd4e801b922e5eb7af))

### Continuous (Integration|Deployment)

- fix bundle size PR comment workflow ([120aa80](https://github.com/davidlj95/ngx/commit/120aa8025a5f1a17b0999826d634f2cf0c27870f))

## [`ngx-meta` v1.0.0-beta.6](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.5...ngx-meta-v1.0.0-beta.6) (2024-08-02)

### Features

- add dev error 4 non http(s) Open Graph image URLs ([#731](https://github.com/davidlj95/ngx/issues/731)) ([85e6ad3](https://github.com/davidlj95/ngx/commit/85e6ad3fadf986c4c7a89356cdd944fdb98f8cd5))

### Documentation

- add Codecov to README.md ([#676](https://github.com/davidlj95/ngx/issues/676)) ([3ff0979](https://github.com/davidlj95/ngx/commit/3ff0979fe3f7c4199fb95e532d1d2a331e41a68b))
- add coverage section to contributing guide [skip ci] ([#708](https://github.com/davidlj95/ngx/issues/708)) ([5dff223](https://github.com/davidlj95/ngx/commit/5dff2233ca140e7195110fb672a151a574ccfd82))
- add recent coverage tooling changes ([#735](https://github.com/davidlj95/ngx/issues/735)) ([d532c6e](https://github.com/davidlj95/ngx/commit/d532c6ea60c9cd95572f82d3b2ebf761c4cb9c2e))
- expand version compatibility check ([af7dd47](https://github.com/davidlj95/ngx/commit/af7dd473ad4dc31c3940a44dcc386204f448887d))
- improve contributors guide ([#697](https://github.com/davidlj95/ngx/issues/697)) ([1bb30b0](https://github.com/davidlj95/ngx/commit/1bb30b06fce46a3b434c039b505ca20bb7be2dda))
- remove 1 indent level from contributing guide [skip ci] ([#706](https://github.com/davidlj95/ngx/issues/706)) ([0c0ff95](https://github.com/davidlj95/ngx/commit/0c0ff95e3080abcdfddbe408794aecdb86266dbd))
- update comparison with code coverage [skip ci] ([#721](https://github.com/davidlj95/ngx/issues/721)) ([6c7e261](https://github.com/davidlj95/ngx/commit/6c7e2615427bae882eb3c4796d3420b361863088))
- update README.md badge with renovate logo ([f772bdf](https://github.com/davidlj95/ngx/commit/f772bdf5c6eeab72768ee577beaeb2505b3bc557))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#667](https://github.com/davidlj95/ngx/issues/667)) ([be3f5a4](https://github.com/davidlj95/ngx/commit/be3f5a445b7fc763c11e5b0bb2107765683da8ec))
- remove from Makefile act CI/CD related targets ([9c34a71](https://github.com/davidlj95/ngx/commit/9c34a71faac2de3a19ca000a82cd0c48544ea658))

### Code Refactoring

- use kebab-case for GH Actions matrix vars ([#694](https://github.com/davidlj95/ngx/issues/694)) ([5485abb](https://github.com/davidlj95/ngx/commit/5485abba724eb372ca2adadb029cd112e2bc7be0))

### Tests

- add coverage reporting to Cypress E2E tests ([#679](https://github.com/davidlj95/ngx/issues/679)) ([323a701](https://github.com/davidlj95/ngx/commit/323a701b5c436ecc4112101e8d2e57d29e4c24a9))
- add missing core module tests ([#728](https://github.com/davidlj95/ngx/issues/728)) ([77bfc3e](https://github.com/davidlj95/ngx/commit/77bfc3ee648437860affb43cc3cc766dba27cbc7))
- add unit test for `clear` method ([#727](https://github.com/davidlj95/ngx/issues/727)) ([15196ed](https://github.com/davidlj95/ngx/commit/15196edb9cb62a4b8c9b69d12cdebf564204a4ff))
- configure Codecov ([#675](https://github.com/davidlj95/ngx/issues/675)) ([eeeb541](https://github.com/davidlj95/ngx/commit/eeeb541143b7c3f8721098631825ca38e3292347))
- increase coverage after reviewing some reports ([#720](https://github.com/davidlj95/ngx/issues/720)) ([e2a09a0](https://github.com/davidlj95/ngx/commit/e2a09a08b59fd6591b19314fdd7d1ebdd9bd79eb))
- report coverage via Codecov ([#673](https://github.com/davidlj95/ngx/issues/673)) ([9549377](https://github.com/davidlj95/ngx/commit/9549377353ded7de76c6714e0cd18b3ce443f26a))
- specify which tasks are about unit tests ([#672](https://github.com/davidlj95/ngx/issues/672)) ([145d574](https://github.com/davidlj95/ngx/commit/145d574418e739084c63ff3a4c59801ea9873bbf))

### Build System

- add lint for Cypress spec files ([#722](https://github.com/davidlj95/ngx/issues/722)) ([c4ff62f](https://github.com/davidlj95/ngx/commit/c4ff62f91d0dca876b6a8d87a7b1487427cd7974))
- add run script for unit tests with coverage ([#718](https://github.com/davidlj95/ngx/issues/718)) ([02c7353](https://github.com/davidlj95/ngx/commit/02c7353b1b08bbb76a1341692d878537166426f9))
- allow merging coverage reports locally ([#705](https://github.com/davidlj95/ngx/issues/705)) ([8151b7f](https://github.com/davidlj95/ngx/commit/8151b7f1e28aef2705b3f3cc458271a6b18e59a1))
- automate running E2E tests with coverage ([#734](https://github.com/davidlj95/ngx/issues/734)) ([66d9a58](https://github.com/davidlj95/ngx/commit/66d9a58b6b13168ce0dec4265ef0efe14283bd70))
- consider tree shaking for code coverage reporting ([#732](https://github.com/davidlj95/ngx/issues/732)) ([ef4cde1](https://github.com/davidlj95/ngx/commit/ef4cde12128d913109bdc416f1cdd092780553ba))
- **deps:** pin rhysd/actionlint docker tag to 435ecdb ([#699](https://github.com/davidlj95/ngx/issues/699)) ([12152b7](https://github.com/davidlj95/ngx/commit/12152b7ef859f9dca961ed735fea8d97293e629c))
- **deps:** update actions/download-artifact digest to fa0a91b ([14ae350](https://github.com/davidlj95/ngx/commit/14ae350711ca3fd5db057fd16ad043f475b00ba8))
- **deps:** update actions/setup-node digest to 1e60f62 ([67caba2](https://github.com/davidlj95/ngx/commit/67caba2651b3511494fad6b74aae7d73777e8f06))
- **deps:** update actions/setup-python digest to 39cd149 ([8947a0a](https://github.com/davidlj95/ngx/commit/8947a0a63ea46341de56394d1987d604dd8abdd2))
- **deps:** update actions/upload-artifact digest to 0b2256b ([b6a7fdc](https://github.com/davidlj95/ngx/commit/b6a7fdc11e46c986d93cc42c0f8fd31698771dcb))
- **deps:** update actions/upload-artifact digest to 0b2256b ([#700](https://github.com/davidlj95/ngx/issues/700)) ([d4f67e7](https://github.com/davidlj95/ngx/commit/d4f67e708d2baebbd8f93358414e97d53f43e79a))
- **deps:** update codecov/codecov-action action to v4.5.0 ([2eebd45](https://github.com/davidlj95/ngx/commit/2eebd4593475299bc50d814d3d054140de02c768))
- **deps:** update cypress-io/github-action action to v6.7.2 ([55c700b](https://github.com/davidlj95/ngx/commit/55c700b6c32dcaf1a6f9059299f15090e2f9201b))
- **deps:** update dependency mkdocs-material to v9.5.28 ([84ce609](https://github.com/davidlj95/ngx/commit/84ce609fdb140f0a03281f2aea3b3fd75b880ad9))
- **deps:** update dependency mkdocs-material to v9.5.29 ([53d6fd1](https://github.com/davidlj95/ngx/commit/53d6fd194787da6109fbdf4bf594e87ff860f667))
- **deps:** update dependency mkdocs-material to v9.5.30 ([3c64ddd](https://github.com/davidlj95/ngx/commit/3c64ddd8f328d0af3cc14156b4e979ab809704b9))
- **deps:** update dependency node to v20.15.1 ([f473b67](https://github.com/davidlj95/ngx/commit/f473b672ba9a8f14b9f566a2926b12250ed41c2c))
- **deps:** update dependency node to v20.16.0 ([60744ec](https://github.com/davidlj95/ngx/commit/60744ec78378e24663ceb6c799c2e1244c61bb8b))
- **deps:** update pnpm to v9.5.0 ([13fa925](https://github.com/davidlj95/ngx/commit/13fa925904b9463323ee494ce31bff4b12280d2a))
- **deps:** update pnpm to v9.6.0 ([9e546b7](https://github.com/davidlj95/ngx/commit/9e546b7360eff81e015f0786f995f92b83ba6507))
- **deps:** update python to v3.12.4 ([#671](https://github.com/davidlj95/ngx/issues/671)) ([e1352ea](https://github.com/davidlj95/ngx/commit/e1352eaafe8a131ca3b0dd08367a647f0121caf1))
- **deps:** update to Angular v18.1 ([#703](https://github.com/davidlj95/ngx/issues/703)) ([d3ec2f1](https://github.com/davidlj95/ngx/commit/d3ec2f19888f127e8328838c988418f7d665e3a4))
- **dev-deps:** update dependency @cypress/code-coverage to v3.12.44 ([e6d91f0](https://github.com/davidlj95/ngx/commit/e6d91f0757ccbc39ebdeea5ffcc49cda2670551b))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.47.2 ([22b63c9](https://github.com/davidlj95/ngx/commit/22b63c977f83022c8b5f6a6e4450ec637c06e797))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.47.3 ([46f25ff](https://github.com/davidlj95/ngx/commit/46f25ff772d1766ab4dc7be145ffea76928a5cfe))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.47.4 ([721bda1](https://github.com/davidlj95/ngx/commit/721bda1faf43c8a7013114b75823ca7a5f60770d))
- **dev-deps:** update dependency @types/node to v20.14.12 ([4521931](https://github.com/davidlj95/ngx/commit/45219310e4a562b434a31681a26a0253bd3adb09))
- **dev-deps:** update dependency cypress to v13.13.0 ([df4cdc6](https://github.com/davidlj95/ngx/commit/df4cdc642a9a0bd23a691113a5c92835e90e23e9))
- **dev-deps:** update dependency cypress to v13.13.1 ([48232da](https://github.com/davidlj95/ngx/commit/48232da6ba273041738c87da1b1bb18b24641aab))
- **dev-deps:** update dependency husky to v9.1.1 ([059b7be](https://github.com/davidlj95/ngx/commit/059b7be174668ce89b39bd421b9b064777dfe9aa))
- **dev-deps:** update dependency jasmine-core to v5.2.0 ([94e0795](https://github.com/davidlj95/ngx/commit/94e079554f0c5d5d5a7f4126efbcaaf307b88334))
- **dev-deps:** update dependency karma to v6.4.4 ([55826a0](https://github.com/davidlj95/ngx/commit/55826a0c0f3d69168c2945f325e8ddcf4ba97b81))
- **dev-deps:** update dependency ng-packagr to v18.1.0 ([c6bdab1](https://github.com/davidlj95/ngx/commit/c6bdab1bddcbbfe7ac4b9176984b8b6303f29953))
- **dev-deps:** update dependency prettier to v3.3.3 ([b386f7f](https://github.com/davidlj95/ngx/commit/b386f7f6cfabf324e4ec21d166fffccf36156a5e))
- **dev-deps:** update dependency semver to v7.6.3 ([6db3a4d](https://github.com/davidlj95/ngx/commit/6db3a4d4873b1b557eeed6e05f602945ced8d982))
- **dev-deps:** update dependency typescript to v5.5.3 ([305a36d](https://github.com/davidlj95/ngx/commit/305a36de6073751c813bbe6a928765425f223f8c))
- **dev-deps:** update typescript-eslint monorepo to v7.17.0 ([28fd6fe](https://github.com/davidlj95/ngx/commit/28fd6fe124ba6aebf8296b0fdfd7691cde1804c7))
- **git:** ignore GitToolbox Jetbrains IDE plugin ([0b3dd0f](https://github.com/davidlj95/ngx/commit/0b3dd0f9d9442eb0446dd5e6086f2576436f2e8f))
- **ide:** add default inspection profiles for project ([5a67523](https://github.com/davidlj95/ngx/commit/5a67523a513392d5ff308992bc1c36a9e5473fff))
- **ide:** enable ESLint in WebStorm for project ([44d035d](https://github.com/davidlj95/ngx/commit/44d035df4fb07b8622c50a1014bbe9b4fb08f832))
- **ide:** setup JetBrains IDEs to use repo root as working dir ([636fc87](https://github.com/davidlj95/ngx/commit/636fc874067b9aacdf493ed8dd26a5a9c09d63e0))
- ignore **tests** dirs in coverage reports ([#717](https://github.com/davidlj95/ngx/issues/717)) ([b12310c](https://github.com/davidlj95/ngx/commit/b12310c2e6ba62a885526f8704ea53c7943dc9d0))
- improve Cypress coverage DX: cache & report renaming ([#733](https://github.com/davidlj95/ngx/issues/733)) ([1c80981](https://github.com/davidlj95/ngx/commit/1c809819b6a53c1575ef24bc49170c2104673a97))
- **lint:** fix lint-staged config for GH Actions ([#695](https://github.com/davidlj95/ngx/issues/695)) ([447b2bc](https://github.com/davidlj95/ngx/commit/447b2bc4a7fca711d5c2de6b4c945d6dc45cf6bf))
- **lint:** lint GitHub Actions via actionlint ([#692](https://github.com/davidlj95/ngx/issues/692)) ([e146da5](https://github.com/davidlj95/ngx/commit/e146da5cb34ea8a416a0aebd98860745001615a6))
- tell ng-lint-staged to just lint code [skip ci] ([#719](https://github.com/davidlj95/ngx/issues/719)) ([6a4c26b](https://github.com/davidlj95/ngx/commit/6a4c26bbcb4f9b8837a3579503ba97c3708d345b))

### Continuous (Integration|Deployment)

- avoid fail when can't find PR to comment ([#677](https://github.com/davidlj95/ngx/issues/677)) ([c8045a3](https://github.com/davidlj95/ngx/commit/c8045a39fead674e0b6bbc89e9ee2db916608b97))
- configure Codecov to don't wait for CI ([#707](https://github.com/davidlj95/ngx/issues/707)) ([e903552](https://github.com/davidlj95/ngx/commit/e903552165f5310715be3cef87e02f46b78f9800))
- **coverage:** wait for CI until reporting status ([#698](https://github.com/davidlj95/ngx/issues/698)) ([8705565](https://github.com/davidlj95/ngx/commit/870556514bbdc27274e6a42bd70a8aa3b2d02d9d))
- **e2e:** add Codecov secret for main wf ([#693](https://github.com/davidlj95/ngx/issues/693)) ([d7eb576](https://github.com/davidlj95/ngx/commit/d7eb57629588fe95762e8e11adc230f784ff9520))
- **e2e:** remove unneded extra env var ([#696](https://github.com/davidlj95/ngx/issues/696)) ([889af34](https://github.com/davidlj95/ngx/commit/889af34556c723adb261002c9b954e51bcc20c8b))
- extract example apps matrix config ([#716](https://github.com/davidlj95/ngx/issues/716)) ([925a10f](https://github.com/davidlj95/ngx/commit/925a10ff32cfbd315580c957f2394aa481bcd5ed))
- fix docs workflow after refactor ([#711](https://github.com/davidlj95/ngx/issues/711)) ([0b130a0](https://github.com/davidlj95/ngx/commit/0b130a02af5b7cab02fde57fa485ac0bf0aa0734))
- merge API Extractor / Documenter into 1 job ([#710](https://github.com/davidlj95/ngx/issues/710)) ([1c71094](https://github.com/davidlj95/ngx/commit/1c7109401f2d84c5cc38710bc206bb220d912c45))
- reduce complexity ([#709](https://github.com/davidlj95/ngx/issues/709)) ([e5c3e84](https://github.com/davidlj95/ngx/commit/e5c3e848e4500cd2a488e87ffd49d765c26cd313))
- trigger it ([0682c79](https://github.com/davidlj95/ngx/commit/0682c797e705cee4e808567661693e0933ae2e7e))
- upload a merged coverage report to codecov ([#729](https://github.com/davidlj95/ngx/issues/729)) ([ed71e0c](https://github.com/davidlj95/ngx/commit/ed71e0c5771bf8307615f5ed3c447de1119bd285))

## [`ngx-meta` v1.0.0-beta.5](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.4...ngx-meta-v1.0.0-beta.5) (2024-06-29)

### Documentation

- add semantic release simulation docs ([#608](https://github.com/davidlj95/ngx/issues/608)) ([1f162bc](https://github.com/davidlj95/ngx/commit/1f162bce4efdc34edbb3a410ef80464147a587ec))

### Style

- apply prettier 3.3.0 format ([6c0ee72](https://github.com/davidlj95/ngx/commit/6c0ee72d848ed836f9a670cec713251ebbcbf1e3))
- apply prettier 3.3.1 styling ([5050a86](https://github.com/davidlj95/ngx/commit/5050a868340f51482ef59cc6a390cef2c17ff70b))

### Miscellaneous Chores

- **release:** maintenance release ([931d874](https://github.com/davidlj95/ngx/commit/931d874c299b280c4d0bb34fcc2291b166f2a279))
- **release:** update CHANGELOG.md ([#605](https://github.com/davidlj95/ngx/issues/605)) ([b0733a1](https://github.com/davidlj95/ngx/commit/b0733a1e8d9da24892975be8c37eac06b177f470))
- update links angular.io -> angular.dev ([#606](https://github.com/davidlj95/ngx/issues/606)) ([8d2e519](https://github.com/davidlj95/ngx/commit/8d2e5198d5b3084fe24bbc656746414e20564734))

### Build System

- configure Renovate for v18 with shared preset ([#626](https://github.com/davidlj95/ngx/issues/626)) ([aac1bab](https://github.com/davidlj95/ngx/commit/aac1bab2f699eb2fa20562077897ecc5c9ed2ba6))
- **deps-dev:** bump urllib3 in /projects/ngx-meta/docs ([#654](https://github.com/davidlj95/ngx/issues/654)) ([7e3fa49](https://github.com/davidlj95/ngx/commit/7e3fa49dbbb80c260464f6015cce00d5e9db0203))
- **deps:** update actions/checkout digest to 692973e ([2ed6c55](https://github.com/davidlj95/ngx/commit/2ed6c55ca50e144da22e7287b757b4e0feca702c))
- **deps:** update actions/checkout digest to a5ac7e5 ([f7d55eb](https://github.com/davidlj95/ngx/commit/f7d55ebd9f5225b95b86478dcf0ef337255b347c))
- **deps:** update Angular (& linter) to v17.(3.10|5.2) ([#619](https://github.com/davidlj95/ngx/issues/619)) ([5efedf2](https://github.com/davidlj95/ngx/commit/5efedf26ea3e8376658b9d9a13aea3b94a31fe7e))
- **deps:** update Angular to v18.0.3 ([#648](https://github.com/davidlj95/ngx/issues/648)) ([beb33ac](https://github.com/davidlj95/ngx/commit/beb33ac8d1a0876fcc53e5399f6f5728c2d82735))
- **deps:** update cypress-io/github-action action to v6.7.0 ([b01646d](https://github.com/davidlj95/ngx/commit/b01646d2bb9d6f745a30779755ff1413334f27ea))
- **deps:** update cypress-io/github-action action to v6.7.1 ([4dcd633](https://github.com/davidlj95/ngx/commit/4dcd6338a49386dd34caa71266b7d6e1eb985822))
- **deps:** update dependency mkdocs-git-revision-date-localized-plugin to v1.2.6 ([571cdea](https://github.com/davidlj95/ngx/commit/571cdea1feff2bae73090067d9cf72b73e829b2d))
- **deps:** update dependency mkdocs-material to v9.5.25 ([a08f867](https://github.com/davidlj95/ngx/commit/a08f867b9773bf3ccad44148803bcb64b856e2aa))
- **deps:** update dependency mkdocs-material to v9.5.26 ([491aea1](https://github.com/davidlj95/ngx/commit/491aea1dc460e602c372808e31268719f654a188))
- **deps:** update dependency mkdocs-material to v9.5.27 ([1b507c8](https://github.com/davidlj95/ngx/commit/1b507c855e871187ee130495aeebe52fec3a984c))
- **deps:** update dependency node to v20.14.0 ([c0e5ba1](https://github.com/davidlj95/ngx/commit/c0e5ba120ef1d70c3f2a6dd0ffc81053de0ad624))
- **deps:** update dependency node to v20.15.0 ([dcc569f](https://github.com/davidlj95/ngx/commit/dcc569fe765da1dca94cc177289c35184a1c42e4))
- **deps:** update dependency tslib to v2.6.3 ([1ff3006](https://github.com/davidlj95/ngx/commit/1ff3006ea72e8e858fc3c4f79c60f0e341532d6a))
- **deps:** update dependency zone.js to v0.14.6 ([1aa792d](https://github.com/davidlj95/ngx/commit/1aa792d81b622c46d1e3c6131ee3c05e0ec425b0))
- **deps:** update peter-evans/create-pull-request digest to c5a7806 ([ebf67fb](https://github.com/davidlj95/ngx/commit/ebf67fb28c87987456d626750cd9a24daa2b5d23))
- **deps:** update pnpm to v9.1.3 ([960b00b](https://github.com/davidlj95/ngx/commit/960b00bd639d3db90d70af92e3fcd26577fef3f7))
- **deps:** update pnpm to v9.1.4 ([68e6f81](https://github.com/davidlj95/ngx/commit/68e6f8181a0ea5137d9e63af9e9012d1704e16df))
- **deps:** update pnpm to v9.2.0 ([c581a58](https://github.com/davidlj95/ngx/commit/c581a589f9b58036ce4f708ca78e670009270f41))
- **deps:** update pnpm to v9.3.0 ([5fac5ce](https://github.com/davidlj95/ngx/commit/5fac5ce7228a962ead9cdf4761fbdee99582b2f6))
- **deps:** update pnpm to v9.4.0 ([bae3c88](https://github.com/davidlj95/ngx/commit/bae3c8848a040e9b21e6974365cf3139fd885212))
- **deps:** update to Angular v18 ([#625](https://github.com/davidlj95/ngx/issues/625)) ([61fe18d](https://github.com/davidlj95/ngx/commit/61fe18ddb211aa65a778f791a4e746b16a845afb))
- **deps:** update to Angular v18.0.6 ([#666](https://github.com/davidlj95/ngx/issues/666)) ([9f4bf14](https://github.com/davidlj95/ngx/commit/9f4bf14a11df3c4039c9240ea4f1c759532a2ded))
- **dev-deps:** update angular-cli monorepo ([63dbfcb](https://github.com/davidlj95/ngx/commit/63dbfcb9a19e710f26c5455b0d1c437f1095bd5f))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.45.1 ([951ee0c](https://github.com/davidlj95/ngx/commit/951ee0c8be588d08e0b254c204006473068186bf))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.46.1 ([5b96a94](https://github.com/davidlj95/ngx/commit/5b96a9476773ed387f12e387ac7d4e5d6c7ba534))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.46.2 ([66f47ad](https://github.com/davidlj95/ngx/commit/66f47adf85ed4f2c3b23cc86bd3c99ec2473b72c))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.47.0 ([8be983b](https://github.com/davidlj95/ngx/commit/8be983ba0131c3064d47e16d8d2c2929751cd08d))
- **dev-deps:** update dependency @types/node to v20.12.12 ([e719d53](https://github.com/davidlj95/ngx/commit/e719d5347dd2beaf8beb2d89cf6a1f1fbea60743))
- **dev-deps:** update dependency @types/node to v20.12.13 ([83b0e75](https://github.com/davidlj95/ngx/commit/83b0e75e60e7571fda39b15729358f086a4d2966))
- **dev-deps:** update dependency @types/node to v20.13.0 ([c2af52e](https://github.com/davidlj95/ngx/commit/c2af52e12d95891769770c2c298068d7b1e6770e))
- **dev-deps:** update dependency @types/node to v20.14.1 ([83aa4b1](https://github.com/davidlj95/ngx/commit/83aa4b1dc2f9b24724fd24a75b81ac7154e694f6))
- **dev-deps:** update dependency @types/node to v20.14.2 ([502be71](https://github.com/davidlj95/ngx/commit/502be71eae2000ad016ea39f8762e32b90848abe))
- **dev-deps:** update dependency @types/node to v20.14.9 ([c7bba1c](https://github.com/davidlj95/ngx/commit/c7bba1c5fd1aa19c80622c3413fd6e7ada9fbe3b))
- **dev-deps:** update dependency cypress to v13.10.0 ([230bcf0](https://github.com/davidlj95/ngx/commit/230bcf0090e51721205e28b24705adc2aa2dd9cb))
- **dev-deps:** update dependency cypress to v13.11.0 ([a0d081e](https://github.com/davidlj95/ngx/commit/a0d081ef99be72249402ae433d3e670f4ebfb2cc))
- **dev-deps:** update dependency cypress to v13.12.0 ([6fe7e1a](https://github.com/davidlj95/ngx/commit/6fe7e1afdee95c93dc11008f2b6ff9a781955757))
- **dev-deps:** update dependency execa to v9.1.0 ([22b4144](https://github.com/davidlj95/ngx/commit/22b4144c8e2001afd5fbe12e8a5387c8437b8fe5))
- **dev-deps:** update dependency execa to v9.2.0 ([945d3f4](https://github.com/davidlj95/ngx/commit/945d3f4f7e8c0498e2ddc2052c51e840468ec654))
- **dev-deps:** update dependency execa to v9.3.0 ([00b2412](https://github.com/davidlj95/ngx/commit/00b2412d0d05dbe7bdb9f64d32242993ef6b281a))
- **dev-deps:** update dependency lint-staged to v15.2.5 ([a4363af](https://github.com/davidlj95/ngx/commit/a4363affbc6b4b43bfb895e8e390cc6e0bc1245b))
- **dev-deps:** update dependency lint-staged to v15.2.7 ([c601865](https://github.com/davidlj95/ngx/commit/c60186584a53a1e4be8b624e911609e665238605))
- **dev-deps:** update dependency ng-mocks to v14.13.0 ([61f55e5](https://github.com/davidlj95/ngx/commit/61f55e5c5c96e5237b7bd2a86f67e739663f2686))
- **dev-deps:** update dependency prettier to v3.3.0 ([d5eda43](https://github.com/davidlj95/ngx/commit/d5eda4355e24d4740d7ef6c860b374c1133e4ac2))
- **dev-deps:** update dependency prettier to v3.3.1 ([33085c3](https://github.com/davidlj95/ngx/commit/33085c3057c86b4375ec79318f6cee90fb2e77c8))
- **dev-deps:** update dependency prettier to v3.3.2 ([1e6886d](https://github.com/davidlj95/ngx/commit/1e6886d498144ca6019fa96d8b04fcd048da2e56))
- **dev-deps:** update dependency semantic-release to v24 ([#636](https://github.com/davidlj95/ngx/issues/636)) ([07653ce](https://github.com/davidlj95/ngx/commit/07653cee23c5fff977fb18f012253a6085447962))
- **dev-deps:** update dependency ts-morph to v23 ([#665](https://github.com/davidlj95/ngx/issues/665)) ([3c7d638](https://github.com/davidlj95/ngx/commit/3c7d638474ffb90ba2b3b3224e6b44b98ad34be9))
- **dev-deps:** update dependency typescript to v5.5.2 ([36aa24b](https://github.com/davidlj95/ngx/commit/36aa24b775ec72c7a295cfab2d24e172e424b5a3))
- **dev-deps:** update dependency v18 to v18.0.2 ([643162f](https://github.com/davidlj95/ngx/commit/643162f1e60eb17d7e81b88c0e64f76b44f0d806))
- **dev-deps:** update typescript-eslint monorepo to v7.11.0 ([57ce18f](https://github.com/davidlj95/ngx/commit/57ce18f6c1139602b6f755c7d94d9a7a8eb15c15))
- **dev-deps:** update typescript-eslint monorepo to v7.12.0 ([f3031e7](https://github.com/davidlj95/ngx/commit/f3031e771923131e4a484e45e4b0ad3407abe94a))
- **dev-deps:** update typescript-eslint monorepo to v7.13.0 ([7940895](https://github.com/davidlj95/ngx/commit/79408955bb34c0b70a9959655f270811a452eadc))
- **dev-deps:** update typescript-eslint monorepo to v7.14.1 ([67d0a54](https://github.com/davidlj95/ngx/commit/67d0a54ca82aa45eca7f4f816e399a607bf08ecc))
- use default channel for prereleases ([#609](https://github.com/davidlj95/ngx/issues/609)) ([f64053c](https://github.com/davidlj95/ngx/commit/f64053ccb707b26b7481660ce63320f0dcb1ef63))

### Continuous (Integration|Deployment)

- **release:** no semantic-release run script ([5a5dab5](https://github.com/davidlj95/ngx/commit/5a5dab55b555d8726f757049b2390ab1eca17ff1))

## [`ngx-meta` v1.0.0-beta.4](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.3...ngx-meta-v1.0.0-beta.4) (2024-05-23)

### Features

- add support for Angular v18 ([#604](https://github.com/davidlj95/ngx/issues/604)) ([918aaa9](https://github.com/davidlj95/ngx/commit/918aaa99340c1acac089c8f66870d098a559b0d0))

### Documentation

- add tip example apps w/ live code updates ([#571](https://github.com/davidlj95/ngx/issues/571)) ([3571417](https://github.com/davidlj95/ngx/commit/35714170b2c1177ee3c61642c922c0d029ca8c6a))
- claim hydration support ([#572](https://github.com/davidlj95/ngx/issues/572)) ([1aecbb1](https://github.com/davidlj95/ngx/commit/1aecbb1c842f11f03b71062d603b330847ea287f))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#553](https://github.com/davidlj95/ngx/issues/553)) ([1ea9412](https://github.com/davidlj95/ngx/commit/1ea94126ea2961f4e7a701283cb0d5bc406fa14a))

### Code Refactoring

- add execa wrapper ([#602](https://github.com/davidlj95/ngx/issues/602)) ([bbb241c](https://github.com/davidlj95/ngx/commit/bbb241c857a702d4656028c45c001b2c4adbfc34))

### Build System

- **bundle-size:** update reporting file name ([#555](https://github.com/davidlj95/ngx/issues/555)) ([90fe1c9](https://github.com/davidlj95/ngx/commit/90fe1c9c6a5f0ae40dd25012707ec193d0c6de7d))
- **deps-dev:** fix conventional commits to v7 ([bbacd59](https://github.com/davidlj95/ngx/commit/bbacd591583fbccd372910c730de241316db57f1))
- **deps:** bump jinja2 from 3.1.3 to 3.1.4 in /projects/ngx-meta/docs ([#587](https://github.com/davidlj95/ngx/issues/587)) ([6312998](https://github.com/davidlj95/ngx/commit/6312998cb5b14252c0cdd7f685f029c78dad01fe))
- **deps:** pin dependencies ([#557](https://github.com/davidlj95/ngx/issues/557)) ([4a49dee](https://github.com/davidlj95/ngx/commit/4a49dee7fa9c634e2aba10028cd943777e8bd663))
- **deps:** update actions/checkout digest to 0ad4b8f ([#576](https://github.com/davidlj95/ngx/issues/576)) ([d3f123b](https://github.com/davidlj95/ngx/commit/d3f123bf2f12733a7e8095e9fde42a07ecfa0614))
- **deps:** update actions/checkout digest to 1d96c77 ([#566](https://github.com/davidlj95/ngx/issues/566)) ([a60ed1e](https://github.com/davidlj95/ngx/commit/a60ed1e5bec2854637aa9276dd69b0027097132e))
- **deps:** update actions/download-artifact digest to 65a9edc ([#577](https://github.com/davidlj95/ngx/issues/577)) ([8718d7c](https://github.com/davidlj95/ngx/commit/8718d7c86555dbfd54189a5ef976db9325a55340))
- **deps:** update actions/upload-artifact digest to 6546280 ([#578](https://github.com/davidlj95/ngx/issues/578)) ([a0e8abd](https://github.com/davidlj95/ngx/commit/a0e8abde6a853aabc7824d1ca5d2d5ed7a52ab06))
- **deps:** update Angular to v17.3.8 ([#588](https://github.com/davidlj95/ngx/issues/588)) ([88279da](https://github.com/davidlj95/ngx/commit/88279dab957a1db8d9ee3e4f694d8de5229ef441))
- **deps:** update dependency mkdocs-git-revision-date-localized-plugin to v1.2.5 ([12be837](https://github.com/davidlj95/ngx/commit/12be8376b70f9b961761988747b89caf10da4cce))
- **deps:** update dependency mkdocs-material to v9.5.19 ([#574](https://github.com/davidlj95/ngx/issues/574)) ([17cd712](https://github.com/davidlj95/ngx/commit/17cd712acf99103dcd602b2bf98c051c113a5122))
- **deps:** update dependency mkdocs-material to v9.5.20 ([#584](https://github.com/davidlj95/ngx/issues/584)) ([34c2add](https://github.com/davidlj95/ngx/commit/34c2add68d2633658423579656d7598a2ded87b3))
- **deps:** update dependency mkdocs-material to v9.5.21 ([146de92](https://github.com/davidlj95/ngx/commit/146de92e94cc3cfcfac3c5425a6c020c8b5ca747))
- **deps:** update dependency node to v20.13.1 ([75b7313](https://github.com/davidlj95/ngx/commit/75b7313bb696e5a20a95c1609083aad8c6cf8e1c))
- **deps:** update dependency zone.js to v0.14.5 ([6e443fb](https://github.com/davidlj95/ngx/commit/6e443fb19557df75ca1993983b34f824ce2058f4))
- **deps:** update peter-evans/create-pull-request digest to 6d6857d ([#579](https://github.com/davidlj95/ngx/issues/579)) ([07fc860](https://github.com/davidlj95/ngx/commit/07fc860ce94d231fd44fd7550e8f897d04e5fdd4))
- **deps:** update pnpm to v9 ([#558](https://github.com/davidlj95/ngx/issues/558)) ([0895b52](https://github.com/davidlj95/ngx/commit/0895b523daafeb2a2ae86b61bfc6f7b75fd6ec94))
- **deps:** update pnpm to v9.0.5 ([#567](https://github.com/davidlj95/ngx/issues/567)) ([23e1456](https://github.com/davidlj95/ngx/commit/23e145675f47eab6e963fec864c9130f42e2aca3))
- **deps:** update pnpm to v9.0.6 ([#575](https://github.com/davidlj95/ngx/issues/575)) ([9696ea2](https://github.com/davidlj95/ngx/commit/9696ea27f7d305976272dc6d13fcd70c08e9bc7c))
- **deps:** update pnpm to v9.1.0 ([03e0680](https://github.com/davidlj95/ngx/commit/03e0680ad984a3c42d61fff9226adc9eb875bf90))
- **deps:** update pnpm/action-setup action to v4 ([#598](https://github.com/davidlj95/ngx/issues/598)) ([56e9d14](https://github.com/davidlj95/ngx/commit/56e9d14ad76af2337563cb08acf3837ac0647682))
- **deps:** update to Angular v17.3.6 ([#580](https://github.com/davidlj95/ngx/issues/580)) ([4e89766](https://github.com/davidlj95/ngx/commit/4e897664a8d21a3a66e5b79a1cb535481fb4ccee))
- **dev-deps:** update angular-eslint monorepo to v17.4.0 ([86a26bc](https://github.com/davidlj95/ngx/commit/86a26bc4d2247cdd7824a65a67c1d676acad985a))
- **dev-deps:** update dependency @commitlint/cli to v19.3.0 ([#583](https://github.com/davidlj95/ngx/issues/583)) ([aada747](https://github.com/davidlj95/ngx/commit/aada747f3eb526153f33236f692945f759468fed))
- **dev-deps:** update dependency @microsoft/api-extractor to v7.43.4 ([e1dc77c](https://github.com/davidlj95/ngx/commit/e1dc77ca445b89a43602090cab921291e15c30d6))
- **dev-deps:** update dependency cypress to v13.8.1 ([159bbab](https://github.com/davidlj95/ngx/commit/159bbab44aee3a5244bb3fae325804cd92345e23))
- **dev-deps:** update dependency cypress to v13.9.0 ([cdc7f52](https://github.com/davidlj95/ngx/commit/cdc7f52607d92925ba9339ee0f58ae59c1663955))
- **dev-deps:** update dependency dts-bundle-generator to v9.5.1 ([#568](https://github.com/davidlj95/ngx/issues/568)) ([60e8317](https://github.com/davidlj95/ngx/commit/60e8317246e0a851dbf74210830ea5e7dc446897))
- **dev-deps:** update dependency execa to v9 ([#601](https://github.com/davidlj95/ngx/issues/601)) ([39ca17e](https://github.com/davidlj95/ngx/commit/39ca17e874ccac8e27d24b8d7ca69e217da40687))
- **dev-deps:** update dependency semantic-release to v23.1.1 ([127153f](https://github.com/davidlj95/ngx/commit/127153fb84d297cf725bbb009b43ed42b5c008d6))
- **dev-deps:** update dependency semver to v7.6.2 ([dbc1d5c](https://github.com/davidlj95/ngx/commit/dbc1d5c4987115210f693d0740178e0f226d20dc))
- **dev-deps:** update dependency v17 to v17.3.5 ([5a52451](https://github.com/davidlj95/ngx/commit/5a52451a096f51dcf87e44cfe198820223739846))
- **dev-deps:** update dependency v17 to v17.3.6 ([54a1d95](https://github.com/davidlj95/ngx/commit/54a1d95522e23392e7f5d5ecf8d36f0162c61492))
- **dev-deps:** update dependency v17 to v17.3.7 ([fb66537](https://github.com/davidlj95/ngx/commit/fb6653743f3aec1ec0a21bef2ba92838562b947d))
- **dev-deps:** update typescript-eslint monorepo to v7.7.1 ([#582](https://github.com/davidlj95/ngx/issues/582)) ([f8dcf07](https://github.com/davidlj95/ngx/commit/f8dcf078d88f93d8949e020ee9d2f1b4f40389be))
- **dev-deps:** update typescript-eslint monorepo to v7.8.0 ([#586](https://github.com/davidlj95/ngx/issues/586)) ([d91d05c](https://github.com/davidlj95/ngx/commit/d91d05c648241e00401ca2319a7bd002a3203ba1))
- **e2e:** clean unused code from experimentation ([#570](https://github.com/davidlj95/ngx/issues/570)) ([d17ae66](https://github.com/davidlj95/ngx/commit/d17ae66b93048b74e2fd6728ed5b1c74004a4b9d))
- **e2e:** ensure SSR library support ([#559](https://github.com/davidlj95/ngx/issues/559)) ([68b4fe2](https://github.com/davidlj95/ngx/commit/68b4fe2dde0654837e731ec3007e58920aa86d93))
- **e2e:** group support by modules ([#562](https://github.com/davidlj95/ngx/issues/562)) ([56743f9](https://github.com/davidlj95/ngx/commit/56743f902ac6468c932e38661f9534ff27535c27))
- **e2e:** reduce Cypress time out to fail fast ([#564](https://github.com/davidlj95/ngx/issues/564)) ([bd961e9](https://github.com/davidlj95/ngx/commit/bd961e9beac74ecc2e16a29b31c87e506d863e4e))
- **e2e:** use JSON to share service overrides ([#563](https://github.com/davidlj95/ngx/issues/563)) ([7c8cd18](https://github.com/davidlj95/ngx/commit/7c8cd18cd9e5526822a846133cc72bca0c659d9e))
- **examples:** add serve port to common serve run script ([#560](https://github.com/davidlj95/ngx/issues/560)) ([614e5cf](https://github.com/davidlj95/ngx/commit/614e5cf232cc1473c882dbd64906f5f86d92c709))
- **examples:** add ts output dir ([#554](https://github.com/davidlj95/ngx/issues/554)) ([ae04d1f](https://github.com/davidlj95/ngx/commit/ae04d1f9d9016f5a39f51a92a3d2a97b0a6f7ada))
- **examples:** avoid "undefined" as id in links ([#573](https://github.com/davidlj95/ngx/issues/573)) ([9551aed](https://github.com/davidlj95/ngx/commit/9551aed50a6a1b1d70951f574496f32ff8bcb67f))
- **examples:** move to example apps dir ([#552](https://github.com/davidlj95/ngx/issues/552)) ([599047b](https://github.com/davidlj95/ngx/commit/599047bf0a62e57d1947659fbf8ac9c90ac83d04))
- fix renovate warn about package\* rules ([9ca9895](https://github.com/davidlj95/ngx/commit/9ca9895d28cd3ac324ef88e851596efe31b8d4c0))
- **renovate:** automerge all non major ones ([e549893](https://github.com/davidlj95/ngx/commit/e5498937e6d4626f90ba1e4daff7d29225a71345))
- **renovate:** js app by default, lib otherwise ([85b0189](https://github.com/davidlj95/ngx/commit/85b018948e5b7887a295f937062218856d685ab2))
- **renovate:** remove dts-bundle-generator pin ([#565](https://github.com/davidlj95/ngx/issues/565)) ([1a8c75f](https://github.com/davidlj95/ngx/commit/1a8c75fb15d00eb0febba07685eed24e9e52209c))

### Continuous (Integration|Deployment)

- **e2e:** remove `wait-on` to rely on Cypress wait ([#569](https://github.com/davidlj95/ngx/issues/569)) ([8992aad](https://github.com/davidlj95/ngx/commit/8992aad500d2b8d0226584c100b6014c6dccfea2))

## [`ngx-meta` v1.0.0-beta.3](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.2...ngx-meta-v1.0.0-beta.3) (2024-04-20)

### Reverts

- Revert "build(examples): move Angular CLI versions file to another dir (#546)" (#551) ([2b2d2af](https://github.com/davidlj95/ngx/commit/2b2d2af9195f62bbcd01db87df696a6c9c32cc07)), closes [#546](https://github.com/davidlj95/ngx/issues/546) [#551](https://github.com/davidlj95/ngx/issues/551)

### Documentation

- add bundle size back ([#505](https://github.com/davidlj95/ngx/issues/505)) ([33651cb](https://github.com/davidlj95/ngx/commit/33651cb59bae49cb4e2ec73da62dd38a05959687))
- end phrase in Metadata values JSON guide ([#487](https://github.com/davidlj95/ngx/issues/487)) ([e9e2493](https://github.com/davidlj95/ngx/commit/e9e24931b37746df470149208910c5ec45bdf08e))
- fix API ref md links downgrading api-documenter ([#485](https://github.com/davidlj95/ngx/issues/485)) ([e9fbb4d](https://github.com/davidlj95/ngx/commit/e9fbb4d64205c7cb85512384566cdf76ab3f1038))
- fix link in example apps docs ([674ff9e](https://github.com/davidlj95/ngx/commit/674ff9ebd3626f48f2f89d3002761c300abaac76))

### Miscellaneous Chores

- **e2e:** remove unneeded http-server dep ([#544](https://github.com/davidlj95/ngx/issues/544)) ([d41518f](https://github.com/davidlj95/ngx/commit/d41518f4e4312ffad02f42895f6dadffef4a262e))
- **release:** update CHANGELOG.md ([#481](https://github.com/davidlj95/ngx/issues/481)) ([6a26cd0](https://github.com/davidlj95/ngx/commit/6a26cd07fefe77503bc14cdeff3d51ce1ca47df4))
- remove unused CI setup-e2e action ([8f8bbea](https://github.com/davidlj95/ngx/commit/8f8bbea5bdf911cb2ffe2edba254f6a5e4712884))
- update pkg.json descriptions ([8061ec7](https://github.com/davidlj95/ngx/commit/8061ec7f3d876cf49185e07b51f306dc49e90cff))

### Tests

- move bundle size scripts to its own dir ([#499](https://github.com/davidlj95/ngx/issues/499)) ([c283f43](https://github.com/davidlj95/ngx/commit/c283f43fdb45c2cb1ddf6f6de5072a096100b246))

### Build System

- **bundle-size:** dynamic example apps analysis ([#524](https://github.com/davidlj95/ngx/issues/524)) ([6188c7e](https://github.com/davidlj95/ngx/commit/6188c7edb5471b9155d6360f1889cb69b35852c6))
- config dep updates for Angular CLI versions ([#519](https://github.com/davidlj95/ngx/issues/519)) ([de6b587](https://github.com/davidlj95/ngx/commit/de6b587d34f9307c9046b11048f1af16a5a975bb))
- **deps-dev:** bump idna from 3.6 to 3.7 in /projects/ngx-meta/docs ([#510](https://github.com/davidlj95/ngx/issues/510)) ([ae6ada6](https://github.com/davidlj95/ngx/commit/ae6ada62518ceb9e6bb7353035dea7e6a149085f))
- **deps-dev:** bump pillow in /projects/ngx-meta/docs ([#493](https://github.com/davidlj95/ngx/issues/493)) ([4854dc8](https://github.com/davidlj95/ngx/commit/4854dc87c3a791af4bdcba23b1548f3a97d21e32))
- **deps-dev:** update actions/download-artifact digest to 8caf195 ([4a9e312](https://github.com/davidlj95/ngx/commit/4a9e312285200af913242e83d25ad44a53d1500e))
- **deps-dev:** update actions/upload-artifact digest to 1746f4a ([4644892](https://github.com/davidlj95/ngx/commit/464489253430d88646b3b26674e15cb52ab2fa99))
- **deps-dev:** update angular-cli monorepo ([a85c45b](https://github.com/davidlj95/ngx/commit/a85c45b80d2a4ced8a22ed9ef7df0a844b98cdf0))
- **deps-dev:** update angular-cli monorepo to v17.3.5 ([e09335e](https://github.com/davidlj95/ngx/commit/e09335e5e2249cd5fe1eecd5caa7632c07f4d50d))
- **deps-dev:** update commitlint monorepo to v19.2.2 ([652692d](https://github.com/davidlj95/ngx/commit/652692d9ecf7f3927f6858b361e67a26ac300d02))
- **deps-dev:** update dependency @microsoft/api-extractor to v7.43.1 ([d88ce95](https://github.com/davidlj95/ngx/commit/d88ce955ab088aa2c56ccb2ff09ed7434538cb2f))
- **deps-dev:** update dependency cypress to v13.7.2 ([7cece70](https://github.com/davidlj95/ngx/commit/7cece70ad446300171e4c5d37462ea3bbb5d0830))
- **deps-dev:** update dependency cypress to v13.7.3 ([404a9a5](https://github.com/davidlj95/ngx/commit/404a9a5b8affb42bc435f3f5c8112b897bf4b52d))
- **deps-dev:** update dependency cypress to v13.8.0 ([e06851c](https://github.com/davidlj95/ngx/commit/e06851c652e6f799183574a2833c03001fef9eca))
- **deps-dev:** update dependency mkdocs-material to v9.5.16 ([6b674ae](https://github.com/davidlj95/ngx/commit/6b674ae0d0390edc075ae71f0cba41426b06b089))
- **deps-dev:** update dependency mkdocs-material to v9.5.17 ([f69ca5c](https://github.com/davidlj95/ngx/commit/f69ca5c3dd7e469c37f712d41c108de16108194a))
- **deps-dev:** update dependency mkdocs-material to v9.5.18 ([18b168b](https://github.com/davidlj95/ngx/commit/18b168bcb67d8428bac20867ccbb6b25f6828897))
- **deps-dev:** update dependency ng-mocks to v14.12.2 ([cfb2ed4](https://github.com/davidlj95/ngx/commit/cfb2ed467b6711d6ba2811662265c8abcec5637d))
- **deps-dev:** update dependency node to v20.12.1 ([9d23272](https://github.com/davidlj95/ngx/commit/9d232729a87bd9b3c23e12d887fac40dec93a6ee))
- **deps-dev:** update dependency node to v20.12.2 ([5d06367](https://github.com/davidlj95/ngx/commit/5d063673fc2e2ad6edcbb37a7cef920c52f6911b))
- **deps-dev:** update dependency semantic-release to v23.0.7 ([eed067b](https://github.com/davidlj95/ngx/commit/eed067bf4a4059fccc8de6dda9b8a10477a7e99a))
- **deps-dev:** update dependency semantic-release to v23.0.8 ([0e51edc](https://github.com/davidlj95/ngx/commit/0e51edcb6ac0133d67f4351057a12d90baef7045))
- **deps-dev:** update dependency typescript to v5.4.4 ([ba24097](https://github.com/davidlj95/ngx/commit/ba24097c00773157561bb939d940bff2ec906f40))
- **deps-dev:** update dependency typescript to v5.4.5 ([09e3a3d](https://github.com/davidlj95/ngx/commit/09e3a3d404b47809cb4bdd7b3d9289022aa237bf))
- **deps-dev:** update fontsource monorepo ([27e4ba6](https://github.com/davidlj95/ngx/commit/27e4ba6d021343542f11dfd06f48de857da28651))
- **deps-dev:** update peter-evans/create-pull-request digest to 9153d83 ([42dc974](https://github.com/davidlj95/ngx/commit/42dc974ebdbdc27a2b521837b571cc11f9a02313))
- **deps-dev:** update peter-evans/create-pull-request digest to c55203c ([528d5ba](https://github.com/davidlj95/ngx/commit/528d5ba062c8bcdf62dc556525d081665fdbcb9f))
- **deps-dev:** update peter-evans/find-comment digest to 3eae4d3 ([b7012bf](https://github.com/davidlj95/ngx/commit/b7012bfd986493561a7c4fabbb56b146e8e7993f))
- **deps-dev:** update pnpm to v8.15.6 ([ba546c0](https://github.com/davidlj95/ngx/commit/ba546c098a98dfc76fbc102ad31b4438867d4ecf))
- **deps-dev:** update typescript-eslint monorepo to v7.5.0 ([381dced](https://github.com/davidlj95/ngx/commit/381dcedd827e09e378569ab1d4e77b1c5772e588))
- **deps-dev:** update typescript-eslint monorepo to v7.6.0 ([5e055ad](https://github.com/davidlj95/ngx/commit/5e055ad42123cbb662e2167e3809ae5f7ed3566f))
- **deps-dev:** update typescript-eslint monorepo to v7.7.0 ([6b55e2c](https://github.com/davidlj95/ngx/commit/6b55e2ce27fddf931db8c5cdfdcd938b961ae824))
- **deps:** pin dependencies ([8c1e0a0](https://github.com/davidlj95/ngx/commit/8c1e0a00d9ae1e40773524cf29571c020c6c8fc4))
- **deps:** update angular monorepo to v17.3.4 ([c6af450](https://github.com/davidlj95/ngx/commit/c6af4504a6814a9e754297ef5b3e2a3eeac66c66))
- **deps:** update angular monorepo to v17.3.5 ([124142e](https://github.com/davidlj95/ngx/commit/124142ee5a228c53a95fcec70064a3df27fa1ed8))
- **deps:** update Angular to v17.3.3 ([#497](https://github.com/davidlj95/ngx/issues/497)) ([50ecfad](https://github.com/davidlj95/ngx/commit/50ecfad831a7ecd62fb0f20ca2e9a085e8dac6f1))
- **e2e:** generate E2E apps with pinned Angular CLI versions ([#511](https://github.com/davidlj95/ngx/issues/511)) ([5243e14](https://github.com/davidlj95/ngx/commit/5243e146079acdca30ffffc46677a4d405b77fc6))
- **e2e:** generate sample apps dynamically ([#504](https://github.com/davidlj95/ngx/issues/504)) ([23c9f6f](https://github.com/davidlj95/ngx/commit/23c9f6fe04303dbee7799da7510a27b05efa108b))
- **examples:** add common ci serve run script ([#542](https://github.com/davidlj95/ngx/issues/542)) ([724b2b8](https://github.com/davidlj95/ngx/commit/724b2b8cf6724836fe2e4a33631dc818aeab0ba9))
- **examples:** add e2e path mapping to apps ([#522](https://github.com/davidlj95/ngx/issues/522)) ([a79af25](https://github.com/davidlj95/ngx/commit/a79af25c0d6b38241c4a36befc5f88821720518b))
- **examples:** add SSR for Angular <v17 ([#527](https://github.com/davidlj95/ngx/issues/527)) ([2cab354](https://github.com/davidlj95/ngx/commit/2cab3546adbbbf8bec61af72e7eba038aa4d1793))
- **examples:** avoid leaking apps version prefix ([#523](https://github.com/davidlj95/ngx/issues/523)) ([d1cfd0a](https://github.com/davidlj95/ngx/commit/d1cfd0a89569beb4164973d01dbade75fab3e270))
- **examples:** minor changes on create script ([#540](https://github.com/davidlj95/ngx/issues/540)) ([799aa66](https://github.com/davidlj95/ngx/commit/799aa668049c2be0ecdfdb719438db0c7cb4d09a))
- **examples:** move Angular CLI versions file to another dir ([#546](https://github.com/davidlj95/ngx/issues/546)) ([2ed2662](https://github.com/davidlj95/ngx/commit/2ed26620f0a0a166876fa5c6991f0a6148d62a60))
- **examples:** refactor main script into different files ([#539](https://github.com/davidlj95/ngx/issues/539)) ([3cd27e7](https://github.com/davidlj95/ngx/commit/3cd27e70c0a81cfe6bfe621724f9283c53a74770))
- **examples:** upload whole app and e2e test with SSR ([#543](https://github.com/davidlj95/ngx/issues/543)) ([23821f2](https://github.com/davidlj95/ngx/commit/23821f21117b9e8ffa6001ec62d40cfb543e103b))
- **examples:** use app config file as template ([#541](https://github.com/davidlj95/ngx/issues/541)) ([725875a](https://github.com/davidlj95/ngx/commit/725875a73826d51034e8e44fafc6595d7f474316))
- **examples:** use app module file as template ([#533](https://github.com/davidlj95/ngx/issues/533)) ([b429f83](https://github.com/davidlj95/ngx/commit/b429f83355eadabd82c4daefeb84ceff828f1092))
- **ide:** fix bundle size report configs ([8078b66](https://github.com/davidlj95/ngx/commit/8078b66417e6a7b27cf540ca9542924bd899b804))
- move e2e apps into its own dir ([#500](https://github.com/davidlj95/ngx/issues/500)) ([3da10ff](https://github.com/davidlj95/ngx/commit/3da10ffd5e4eb5757bc98174a84fce180e811856))
- pin API Documenter version ([#486](https://github.com/davidlj95/ngx/issues/486)) ([8accd20](https://github.com/davidlj95/ngx/commit/8accd205d357fc5b270ad1a2c730746c08434324))
- **renovate:** temporarily pin dts-bundle-generator ([#538](https://github.com/davidlj95/ngx/issues/538)) ([b1a3902](https://github.com/davidlj95/ngx/commit/b1a3902263d7220a0087a37d5d2f127d1bfcf0b2))
- split example apps infra from e2e infra ([#520](https://github.com/davidlj95/ngx/issues/520)) ([ba8402a](https://github.com/davidlj95/ngx/commit/ba8402a3603dc403c133d91ccc390f051a514052))

### Continuous (Integration|Deployment)

- **e2e:** add caching for generated e2e apps ([#514](https://github.com/davidlj95/ngx/issues/514)) ([2e1df14](https://github.com/davidlj95/ngx/commit/2e1df14f02f41c507be61f385ee082d1157d6511))
- **e2e:** cache e2e deps as Cypress action cannot ([#517](https://github.com/davidlj95/ngx/issues/517)) ([21aba1c](https://github.com/davidlj95/ngx/commit/21aba1c5415808a5e4f28c424272461d7d5bdb19))
- **e2e:** fix lockfile specifiers changed issue ([#518](https://github.com/davidlj95/ngx/issues/518)) ([f576849](https://github.com/davidlj95/ngx/commit/f5768499d68ee214118a418183f2c501618206ba))
- **e2e:** remove debugging with tmate ([7d0af3c](https://github.com/davidlj95/ngx/commit/7d0af3c12725ed12cc1ea127b7cdf4b2f5c5c468))
- **examples:** fix cache key ([#526](https://github.com/davidlj95/ngx/issues/526)) ([efc094a](https://github.com/davidlj95/ngx/commit/efc094aae25ee295a39568189a33151bf18b4d99))
- **examples:** use app name instead of version ([#525](https://github.com/davidlj95/ngx/issues/525)) ([b6da43c](https://github.com/davidlj95/ngx/commit/b6da43ca65c5b4eb21f8361799361b50489c2ec3))
- minor changes on CI/CD workflows ([#521](https://github.com/davidlj95/ngx/issues/521)) ([d02fb15](https://github.com/davidlj95/ngx/commit/d02fb15ac986378348d67b00d79af154595763f7))
- remove npm update step to verify signatures ([#503](https://github.com/davidlj95/ngx/issues/503)) ([d5e473c](https://github.com/davidlj95/ngx/commit/d5e473cd68bb77697f6939749a683a1336ae7459))

## [`ngx-meta` v1.0.0-beta.2](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-beta.1...ngx-meta-v1.0.0-beta.2) (2024-04-01)

### Bug Fixes

- only merge image metadata value objects ([#480](https://github.com/davidlj95/ngx/issues/480)) ([169f47f](https://github.com/davidlj95/ngx/commit/169f47fb0e1a19b60f1a885697b425b11dd292d2))

### Miscellaneous Chores

- remove describe block in JSON resolver test ([#477](https://github.com/davidlj95/ngx/issues/477)) ([c059226](https://github.com/davidlj95/ngx/commit/c059226323a25b91af0058bc8a8ad0dcc3f84974))
- remove unneeded describe in resolver tests ([#479](https://github.com/davidlj95/ngx/issues/479)) ([15f13e7](https://github.com/davidlj95/ngx/commit/15f13e77ead946b86306e2873bc04e41b4e9899a))
- update PR template with issue desc ([a69eab4](https://github.com/davidlj95/ngx/commit/a69eab49e49a80ecfd9d4ffac9372b6436f94083))

### Code Refactoring

- add "[@test](https://github.com/test)" path mapping ([#478](https://github.com/davidlj95/ngx/issues/478)) ([aa1b8b6](https://github.com/davidlj95/ngx/commit/aa1b8b6b6ee0bc2d5dd8b2656826337200ab0887))

### Build System

- **deps-dev:** bump express from 4.18.2 to 4.19.2 ([#471](https://github.com/davidlj95/ngx/issues/471)) ([3437438](https://github.com/davidlj95/ngx/commit/343743876fd7b0b552cc8ca2063b93b98768b4eb))
- **deps-dev:** bump express in /projects/ngx-meta/e2e/a15 ([#469](https://github.com/davidlj95/ngx/issues/469)) ([1156277](https://github.com/davidlj95/ngx/commit/1156277c541df05bcabc11ac0c82445a9df04331))
- **deps-dev:** bump express in /projects/ngx-meta/e2e/a16 ([#470](https://github.com/davidlj95/ngx/issues/470)) ([931fd5c](https://github.com/davidlj95/ngx/commit/931fd5c94d2d6338ff27f19ea167f9639ba92266))
- **deps-dev:** bump express in /projects/ngx-meta/e2e/a17 ([#468](https://github.com/davidlj95/ngx/issues/468)) ([e6329bf](https://github.com/davidlj95/ngx/commit/e6329bf3ffda18ec08a233d6d9173943d14bf968))
- **deps-dev:** bump webpack-dev-middleware ([#458](https://github.com/davidlj95/ngx/issues/458)) ([23d7a74](https://github.com/davidlj95/ngx/commit/23d7a74b15d978636eb0e3631651c9c93efa9ee9))
- **deps-dev:** bump webpack-dev-middleware ([#459](https://github.com/davidlj95/ngx/issues/459)) ([b6aaa5a](https://github.com/davidlj95/ngx/commit/b6aaa5a414eacce7b2d0fe6b109cfb540a711c37))
- **deps-dev:** bump webpack-dev-middleware ([#461](https://github.com/davidlj95/ngx/issues/461)) ([b21d0bd](https://github.com/davidlj95/ngx/commit/b21d0bd5bef239ed09b18abd65f0e82c68dfd7fd))
- **deps-dev:** bump webpack-dev-middleware from 5.3.3 to 5.3.4 ([#460](https://github.com/davidlj95/ngx/issues/460)) ([c6df3f1](https://github.com/davidlj95/ngx/commit/c6df3f18cff57814cbe9d5c04ea023a1e1d5d428))
- **deps-dev:** update actions/setup-python digest to 82c7e63 ([2a7a6c8](https://github.com/davidlj95/ngx/commit/2a7a6c8e3e8fac27f3ea4e2a2da407fc998000c4))
- **deps-dev:** update dependency cypress to v13.7.1 ([ad37ea9](https://github.com/davidlj95/ngx/commit/ad37ea92fd6c37633ee85a1414d4be4f9f10a7bc))
- **deps-dev:** update dependency mkdocs-material to v9.5.15 ([f3bac82](https://github.com/davidlj95/ngx/commit/f3bac82fe5290a8e69496d2fae527ce363364eb5))
- **deps-dev:** update dependency node to v20.12.0 ([4d620b3](https://github.com/davidlj95/ngx/commit/4d620b3822d9679e81202d8f73c29e019c23bed7))
- **deps-dev:** update dependency semantic-release to v23.0.6 ([62c5b14](https://github.com/davidlj95/ngx/commit/62c5b1401a523dc1c65ff6c2c0cd07b01520f9be))
- **deps-dev:** update typescript-eslint monorepo to v7.4.0 ([6c96afa](https://github.com/davidlj95/ngx/commit/6c96afa1254cb4fb1935082e82380d437432437a))
- **deps:** update Angular to v17.3.2 ([#475](https://github.com/davidlj95/ngx/issues/475)) ([530379a](https://github.com/davidlj95/ngx/commit/530379aac88ec4ee5ee3cc4a494529aea24bd7d0))
- **ide:** fix build run config ([f7f6fc6](https://github.com/davidlj95/ngx/commit/f7f6fc65d8f1f49805aafc7dfc7a2c1ddfc64f63))

### Continuous (Integration|Deployment)

- allow dependabot long commit message lines ([#462](https://github.com/davidlj95/ngx/issues/462)) ([426515a](https://github.com/davidlj95/ngx/commit/426515a7b9a960631bdcb9aeddff4ca7017a226d))
- increase release timeout ([69b4ab1](https://github.com/davidlj95/ngx/commit/69b4ab16168fcb5042c0d16ef3b200b3486e50d3))
- use base / head SHAs for commitlint ([#463](https://github.com/davidlj95/ngx/issues/463)) ([9a4b5ab](https://github.com/davidlj95/ngx/commit/9a4b5abb4ee5ac09e3fe71e233be861ed1cff502))

## [`ngx-meta` v1.0.0-alpha.47](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.46...ngx-meta-v1.0.0-alpha.47) (2024-03-10)

### Bug Fixes

- use dts-bundle-generator for rollup ts files ([#414](https://github.com/davidlj95/ngx/issues/414)) ([05fbcf5](https://github.com/davidlj95/ngx/commit/05fbcf5d826b3b04964b816c0979976d28f40086))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#413](https://github.com/davidlj95/ngx/issues/413)) ([b312362](https://github.com/davidlj95/ngx/commit/b3123628f968f9adf09e9040da48118f42b0694b))

## [`ngx-meta` v1.0.0-alpha.46](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.45...ngx-meta-v1.0.0-alpha.46) (2024-03-08)

### Bug Fixes

- remove public-api files to reduce import possibilities ([#412](https://github.com/davidlj95/ngx/issues/412)) ([cb11fc7](https://github.com/davidlj95/ngx/commit/cb11fc705d11b8d394297203ac5e354ee72727b5))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#410](https://github.com/davidlj95/ngx/issues/410)) ([5ae7452](https://github.com/davidlj95/ngx/commit/5ae7452310e664f4261ffe2bb2f79f150827cffc))

### Build System

- **deps-dev:** update dependency typescript to v5.4.2 ([6f7bd79](https://github.com/davidlj95/ngx/commit/6f7bd79d5142b6db694d527703ee4101765f1bcd))

## [`ngx-meta` v1.0.0-alpha.45](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.44...ngx-meta-v1.0.0-alpha.45) (2024-03-08)

### Documentation

- add more references to global / specific ([#402](https://github.com/davidlj95/ngx/issues/402)) ([c5b655e](https://github.com/davidlj95/ngx/commit/c5b655e58e24ad206dfbee19f8eb710616a94d64))
- add motivation + first steps to README.md ([#408](https://github.com/davidlj95/ngx/issues/408)) ([08cfe36](https://github.com/davidlj95/ngx/commit/08cfe3671141c56901216ad5fd4dc935027013af))
- add NPM provenance to comparison ([#403](https://github.com/davidlj95/ngx/issues/403)) ([a881197](https://github.com/davidlj95/ngx/commit/a881197a7bd281f342245da0a3dad59bd14bbda6))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#401](https://github.com/davidlj95/ngx/issues/401)) ([aefe78b](https://github.com/davidlj95/ngx/commit/aefe78b16798bbfa60cf18e6b49e9f6f385a9ec4))
- trigger new release ([6894c2f](https://github.com/davidlj95/ngx/commit/6894c2fc62f0fecb35a6fbfb11843943b26d6853))

### Build System

- **deps-dev:** update dependency @microsoft/api-documenter to v7.23.37 ([760bf1b](https://github.com/davidlj95/ngx/commit/760bf1b186c90560c161e6e2614b61cf008bc117))
- **deps-dev:** update dependency mkdocs-material to v9.5.13 ([c5dbd7e](https://github.com/davidlj95/ngx/commit/c5dbd7ede7fa445b30b2d9eeeae021429e93447a))
- **deps:** update Angular to v17.2.4 ([#407](https://github.com/davidlj95/ngx/issues/407)) ([352d289](https://github.com/davidlj95/ngx/commit/352d289c6d269b12baf93ccaf023f17470c128ab))

## [`ngx-meta` v1.0.0-alpha.44](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.43...ngx-meta-v1.0.0-alpha.44) (2024-03-07)

### Features

- add setOne API to service ([#399](https://github.com/davidlj95/ngx/issues/399)) ([d6eee64](https://github.com/davidlj95/ngx/commit/d6eee642f42e5bff21c4b55409e7b70a40e2ef4f))

### Documentation

- add CONTRIBUTING.md ([#388](https://github.com/davidlj95/ngx/issues/388)) ([92369d5](https://github.com/davidlj95/ngx/commit/92369d5ae6eaf355bdb976837efeae70c5b962c9))
- add docs preview section ([#398](https://github.com/davidlj95/ngx/issues/398)) ([7e4d167](https://github.com/davidlj95/ngx/commit/7e4d167263fb827060fa60d126fcde057dba0ac6))
- add e2e tests README ([#391](https://github.com/davidlj95/ngx/issues/391)) ([1678b56](https://github.com/davidlj95/ngx/commit/1678b561c7080c8968ae40cd67d5738dd99d556c))
- add LICENSE to repo ([4bb4fdc](https://github.com/davidlj95/ngx/commit/4bb4fdc1ecfb146b11f334c0a6213d06e946f0c0))
- do not report bundle size diff ([#397](https://github.com/davidlj95/ngx/issues/397)) ([85acbb6](https://github.com/davidlj95/ngx/commit/85acbb62af57248d6b4421dd952af0939a86b3e1))
- improve CONTRIBUTING.md ([#392](https://github.com/davidlj95/ngx/issues/392)) ([460bdd9](https://github.com/davidlj95/ngx/commit/460bdd98e59192caf5765d7e79db8a2f3b40b6a3))
- move prebuild to script + allow missing bundle size reports ([#400](https://github.com/davidlj95/ngx/issues/400)) ([414453b](https://github.com/davidlj95/ngx/commit/414453b86fa2f21af0649738574cca4f90b67f2b))
- write about known quirks ([#393](https://github.com/davidlj95/ngx/issues/393)) ([1fecbe4](https://github.com/davidlj95/ngx/commit/1fecbe49f5b7b2f0b1c59e81a07da9e231fae6e9))

### Miscellaneous Chores

- add issue template ([77043d6](https://github.com/davidlj95/ngx/commit/77043d65d33a6233836347e81900a0ea8352a8db))
- add pull request template ([634779a](https://github.com/davidlj95/ngx/commit/634779affab8a5dba64a1c6874c05c24fec06316))
- create SECURITY.md ([#390](https://github.com/davidlj95/ngx/issues/390)) ([68e03fe](https://github.com/davidlj95/ngx/commit/68e03fedfb16b726db1031fdf95cc8ad814cba9b))
- **release:** update CHANGELOG.md ([#387](https://github.com/davidlj95/ngx/issues/387)) ([4ff1598](https://github.com/davidlj95/ngx/commit/4ff1598bac4991d295b2db8a7312fc1e6cc27fe0))
- remove PRs from fork from TODO ([#394](https://github.com/davidlj95/ngx/issues/394)) ([107268d](https://github.com/davidlj95/ngx/commit/107268dbf28f05bac47f045b73f95ba8e4f14a60))

### Continuous (Integration|Deployment)

- add missing .data in script ([08c2b22](https://github.com/davidlj95/ngx/commit/08c2b223e048db5476c65b005c8f80d8e121f18f))
- bundle size -> PR completed ([a17dbf2](https://github.com/davidlj95/ngx/commit/a17dbf2de8b73ddca886e77f16ecf4b5386e53be))
- download all bundle size docs at once ([#396](https://github.com/davidlj95/ngx/issues/396)) ([381bbaa](https://github.com/davidlj95/ngx/commit/381bbaa93e68562bd32a66e9c4b000db4d1ccb91))
- find associated PR num using gh search api ([18905c8](https://github.com/davidlj95/ngx/commit/18905c8a6449f945cf16465a8351088193812b65))
- refer to workflow by name ([6f3f633](https://github.com/davidlj95/ngx/commit/6f3f6338dcc1e426159be57ba86c48ea4722e1c6))
- remove unneeded extra logs ([d9b6aa1](https://github.com/davidlj95/ngx/commit/d9b6aa1b2f574d53af083b18166cba2ff9b1f26c))
- show context for debugging ([2680ebf](https://github.com/davidlj95/ngx/commit/2680ebf1d1b34e6bae3b8e61a8224e3f9b7dcad8))
- split PR comment into separate workflow ([#395](https://github.com/davidlj95/ngx/issues/395)) ([7b3511f](https://github.com/davidlj95/ngx/commit/7b3511f14a568e059b1ffc3ff91fdfc584859e5a))
- use github token in pr completed download artifact ([548a001](https://github.com/davidlj95/ngx/commit/548a0015a5840151383d2f89ecd96949e4d2419e))
- use name instead of file ([21aeeff](https://github.com/davidlj95/ngx/commit/21aeeffb443323ee72b8b27fd6b64e3fee271e5b))
- use script instead of GH CLI ([2472bf7](https://github.com/davidlj95/ngx/commit/2472bf7a3cb78b6344620f37e0a813ffb4a2c860))

## [`ngx-meta` v1.0.0-alpha.43](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.42...ngx-meta-v1.0.0-alpha.43) (2024-03-05)

### Continuous (Integration|Deployment)

- go back to previous GH token ([e8438f8](https://github.com/davidlj95/ngx/commit/e8438f8871ca0e6fcd6ef9973f69ace2879848f0))

## [`ngx-meta` v1.0.0-alpha.41](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.40...ngx-meta-v1.0.0-alpha.41) (2024-03-05)

### Documentation

- add bundle size page ([#383](https://github.com/davidlj95/ngx/issues/383)) ([ef708a7](https://github.com/davidlj95/ngx/commit/ef708a77dff8407aed3d0d8fbf308f841a56e6bc))
- add code of conduct ([#353](https://github.com/davidlj95/ngx/issues/353)) ([7eb018a](https://github.com/davidlj95/ngx/commit/7eb018abc48a8eb01d84ca5278cb6f1b13504963))
- add example apps page ([#384](https://github.com/davidlj95/ngx/issues/384)) ([b3e1ef8](https://github.com/davidlj95/ngx/commit/b3e1ef8b1b88ea8aca0a0de3505edc422c94c324))
- add imports around ([#352](https://github.com/davidlj95/ngx/issues/352)) ([707acd0](https://github.com/davidlj95/ngx/commit/707acd039c06482a97a4e8f694999db09469c254))
- fix wrong header in comparison ([897a52d](https://github.com/davidlj95/ngx/commit/897a52d641c6ac8aae9f387be899746e8f23f10e))
- rewrite metadata values JSON guide ([#351](https://github.com/davidlj95/ngx/issues/351)) ([94a16a5](https://github.com/davidlj95/ngx/commit/94a16a513f41eb86b256b3576c37cc643c41ebb9))

### Miscellaneous Chores

- release to update metadata ([1720705](https://github.com/davidlj95/ngx/commit/172070519995da0afd4c64afc95f2a8eb9ccda92))
- **release:** update CHANGELOG.md ([#348](https://github.com/davidlj95/ngx/issues/348)) ([7947f6b](https://github.com/davidlj95/ngx/commit/7947f6b1af8c5330e7f9deab4e95502b65d0589b))
- update / reorg TODO.md ([73b4236](https://github.com/davidlj95/ngx/commit/73b423604f706bac06219cff7c9e1826805d14d3))
- use ngx-meta.dev domain ([#385](https://github.com/davidlj95/ngx/issues/385)) ([83741d6](https://github.com/davidlj95/ngx/commit/83741d652837d762cfb29e624eca7fb80a7b5110))

### Code Refactoring

- improve make key/val meta defs APIs ([#349](https://github.com/davidlj95/ngx/issues/349)) ([6c577cd](https://github.com/davidlj95/ngx/commit/6c577cd83c7fec1836c9ee5d963bce356f7265c7))

### Tests

- fix twitter card unset e2e test ([#350](https://github.com/davidlj95/ngx/issues/350)) ([2cc3208](https://github.com/davidlj95/ngx/commit/2cc3208f04f3edbd07d5ab7baca67c71d331bded))

### Build System

- **deps-dev:** update actions/cache digest to ab5e6d0 ([68ad5b1](https://github.com/davidlj95/ngx/commit/68ad5b198487a648d7b7a889276835bc7f08d3e1))
- **deps-dev:** update actions/download-artifact digest to 87c5514 ([9df1806](https://github.com/davidlj95/ngx/commit/9df1806c838653eaa9597ce8f20894e6c3be5031))
- **deps-dev:** update actions/download-artifact digest to c850b93 ([823ba8a](https://github.com/davidlj95/ngx/commit/823ba8a9381346bd9452f5cc72842774621c97c7))
- **deps-dev:** update angular-cli monorepo to v17.2.2 ([5b416af](https://github.com/davidlj95/ngx/commit/5b416aff50cab8ce0e1133c1e7b724aafe8a9c48))
- **deps-dev:** update commitlint monorepo to v19 ([add8f2b](https://github.com/davidlj95/ngx/commit/add8f2bc7c8d70e030f91f3df596c10c026f79fe))
- **deps-dev:** update commitlint monorepo to v19.0.3 ([7736d9f](https://github.com/davidlj95/ngx/commit/7736d9f03634c9665005f077370b070146b83e1c))
- **deps-dev:** update dependency @microsoft/api-documenter to v7.23.30 ([7693adc](https://github.com/davidlj95/ngx/commit/7693adca18f86308b2749bd5f0cba28ea3f4f272))
- **deps-dev:** update dependency @microsoft/api-documenter to v7.23.31 ([3cdc7b7](https://github.com/davidlj95/ngx/commit/3cdc7b7a879c16cb967578e8ce537dc69e602861))
- **deps-dev:** update dependency @microsoft/api-documenter to v7.23.33 ([1db0539](https://github.com/davidlj95/ngx/commit/1db0539d91482e35160e79c8d0bc0ac1aee8f671))
- **deps-dev:** update dependency @microsoft/api-documenter to v7.23.35 ([6b5a3bf](https://github.com/davidlj95/ngx/commit/6b5a3bf7c75c893be2cdb04e0e36b87bac8fdce3))
- **deps-dev:** update dependency @microsoft/api-documenter to v7.23.36 ([6122d6b](https://github.com/davidlj95/ngx/commit/6122d6bb0e08a44917c014c113fef1b15b58a39a))
- **deps-dev:** update dependency @microsoft/api-extractor to v7.40.6 ([fbd38fb](https://github.com/davidlj95/ngx/commit/fbd38fb24f1a194074934543dc5857ac3eb607ad))
- **deps-dev:** update dependency @microsoft/api-extractor to v7.41.0 ([8456948](https://github.com/davidlj95/ngx/commit/845694811df776d22550ad64ade1d7cac7bd5d37))
- **deps-dev:** update dependency @microsoft/api-extractor to v7.42.1 ([b03d059](https://github.com/davidlj95/ngx/commit/b03d059362f815c649544a0951e15d21e1aafe64))
- **deps-dev:** update dependency @microsoft/api-extractor to v7.42.2 ([0c45bb2](https://github.com/davidlj95/ngx/commit/0c45bb2d7fed73f51a17bd68ec05f0b0141f1ce8))
- **deps-dev:** update dependency @microsoft/api-extractor to v7.42.3 ([63c1792](https://github.com/davidlj95/ngx/commit/63c1792cbaed3c983a1e7d425d6e270b50e5a645))
- **deps-dev:** update dependency cypress to v13.6.6 ([7cc2a4a](https://github.com/davidlj95/ngx/commit/7cc2a4a6deaf6825db320eb497a775b6ad463a31))
- **deps-dev:** update dependency eslint to v8.57.0 ([02cb228](https://github.com/davidlj95/ngx/commit/02cb228861663feccd4461345081fb1935f0a306))
- **deps-dev:** update dependency karma to v6.4.3 ([c61b46c](https://github.com/davidlj95/ngx/commit/c61b46c1aee428ff123bcefbfff5a99126d8a286))
- **deps-dev:** update dependency mkdocs-material to v9.5.11 ([fdac744](https://github.com/davidlj95/ngx/commit/fdac744e5683ac66e9666eb4f27cbdbd41ba9343))
- **deps-dev:** update dependency mkdocs-material to v9.5.12 ([c37fbc5](https://github.com/davidlj95/ngx/commit/c37fbc58352d4617ec108ca4b07e3af9ce11d8fe))
- **deps-dev:** update dependency ng-packagr to v17.2.1 ([d87cd27](https://github.com/davidlj95/ngx/commit/d87cd273ab70cfcd4f64e2faa0ccd1f97f2fa241))
- **deps-dev:** update fontsource monorepo ([cdc14d8](https://github.com/davidlj95/ngx/commit/cdc14d80c7aa38dbde03f872a96a8e940754da78))
- **deps-dev:** update peter-evans/create-pull-request digest to a4f52f8 ([ca88f17](https://github.com/davidlj95/ngx/commit/ca88f17f4b77a22dd1dcada5522c1f105111b227))
- **deps-dev:** update pnpm to v8.15.4 ([ff538ee](https://github.com/davidlj95/ngx/commit/ff538eeb375092cde1aeb63810169c75c84fd7c8))
- **deps-dev:** update typescript-eslint monorepo to v7.1.0 ([39c610d](https://github.com/davidlj95/ngx/commit/39c610d3ef5c456498de3f1a690adb3b6d7fa90a))
- **deps-dev:** update typescript-eslint monorepo to v7.1.1 ([c220b8c](https://github.com/davidlj95/ngx/commit/c220b8ccaa5dfad7cb0092323800e7825a2be486))
- **deps:** update Angular v17 to v17.2.3 ([#368](https://github.com/davidlj95/ngx/issues/368)) ([20d92a4](https://github.com/davidlj95/ngx/commit/20d92a48a624dbdb11fc7a9e257c80477c170d1e))

### Continuous (Integration|Deployment)

- bundle size into workflow + add md report ([#374](https://github.com/davidlj95/ngx/issues/374)) ([ced749d](https://github.com/davidlj95/ngx/commit/ced749d9aa7715bb2cb17696bbf9d07c2b148b79))
- tmp skip audit signatures ([3bc953a](https://github.com/davidlj95/ngx/commit/3bc953a35e4414bb72c4dfb672d1b32bda7c2783))

## [`ngx-meta` v1.0.0-alpha.40](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.39...ngx-meta-v1.0.0-alpha.40) (2024-02-22)

### Bug Fixes

- use "name" for twitter card metas ([#346](https://github.com/davidlj95/ngx/issues/346)) ([69c3218](https://github.com/davidlj95/ngx/commit/69c321883e3997a776716c3d24910de8b3ff4315))

### Documentation

- add "why" section ([#345](https://github.com/davidlj95/ngx/issues/345)) ([86e910e](https://github.com/davidlj95/ngx/commit/86e910e38810d18ceb144dd8aad2f06867eb0d3a))
- add mention to ngaox twitter image alt issue ([#347](https://github.com/davidlj95/ngx/issues/347)) ([d54cdff](https://github.com/davidlj95/ngx/commit/d54cdff57a67d0be11623107d2986dbe82840963))

### Miscellaneous Chores

- update CHANGELOG.md ([92a1d36](https://github.com/davidlj95/ngx/commit/92a1d36b06b9583d6c459c8f233643c36ded1e1c))

### Build System

- **deps-dev:** bump ip from 2.0.0 to 2.0.1 ([#340](https://github.com/davidlj95/ngx/issues/340)) ([5ff8ed0](https://github.com/davidlj95/ngx/commit/5ff8ed00d7173e2f689d4fe183b98d1292d6df51))
- **deps-dev:** bump ip in /projects/ngx-meta/e2e/a15 ([#343](https://github.com/davidlj95/ngx/issues/343)) ([73be8b4](https://github.com/davidlj95/ngx/commit/73be8b4d4bb1e95f79950dda5b19ec0504054814))
- **deps-dev:** bump ip in /projects/ngx-meta/e2e/a16 ([#342](https://github.com/davidlj95/ngx/issues/342)) ([5fcf373](https://github.com/davidlj95/ngx/commit/5fcf373a6f21d64ad7450670f82eadbe50f6fe71))
- **deps-dev:** bump ip in /projects/ngx-meta/e2e/a17 ([#341](https://github.com/davidlj95/ngx/issues/341)) ([dd5e76f](https://github.com/davidlj95/ngx/commit/dd5e76f2accfbbbbdabafb2fa8f54858e676a154))
- **deps-dev:** update dependency @microsoft/api-documenter to v7.23.25 ([7840e22](https://github.com/davidlj95/ngx/commit/7840e22a5141885c2b9b5f2722dc9e977b118ccd))
- **deps-dev:** update dependency @microsoft/api-extractor to v7.40.3 ([cec79f7](https://github.com/davidlj95/ngx/commit/cec79f758b6ac066dcdac4df6050eb9db2a3bcf3))
- **deps-dev:** update dependency cypress to v13.6.5 ([5b4734d](https://github.com/davidlj95/ngx/commit/5b4734dc448b15191cce1025d6aaf9daf0dbe478))
- **deps-dev:** update typescript-eslint monorepo to v7.0.2 ([8e782cd](https://github.com/davidlj95/ngx/commit/8e782cda534e166b46a144fde424e9fc61e17b5d))

## [`ngx-meta` v1.0.0-alpha.39](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.38...ngx-meta-v1.0.0-alpha.39) (2024-02-19)

### Documentation

- abstract standard / open graph module links ([#327](https://github.com/davidlj95/ngx/issues/327)) ([7b12c7d](https://github.com/davidlj95/ngx/commit/7b12c7d8dfe670719d19bfdb75220b379bf35c48))
- add API Reference docs ([#278](https://github.com/davidlj95/ngx/issues/278)) ([822dc4f](https://github.com/davidlj95/ngx/commit/822dc4fa7cc476572a7b1404bbc317dbf979affe))
- add custom metadata providers selection guide ([#336](https://github.com/davidlj95/ngx/issues/336)) ([d513e8f](https://github.com/davidlj95/ngx/commit/d513e8f457000f908d6c5a6740bb5950ac560a51))
- add defaults, routing, service guide ([#318](https://github.com/davidlj95/ngx/issues/318)) ([fabf172](https://github.com/davidlj95/ngx/commit/fabf172a590e02411fe015ec8d35026579f2b991)), closes [#319](https://github.com/davidlj95/ngx/issues/319)
- add global / module metadata guide ([#317](https://github.com/davidlj95/ngx/issues/317)) ([3851a18](https://github.com/davidlj95/ngx/commit/3851a18ba4eb122bcf92cac4ef79fd152d74201f))
- add guide about managing custom metadata ([#333](https://github.com/davidlj95/ngx/issues/333)) ([cb1c51f](https://github.com/davidlj95/ngx/commit/cb1c51f9ccfb479894fd4148695e8753e7e282e4))
- add home, get started, features & built-in mods ([#267](https://github.com/davidlj95/ngx/issues/267)) ([1d51455](https://github.com/davidlj95/ngx/commit/1d51455394fb31a8c4620897f00bf844e74bbb86))
- add late loading modules guide ([#330](https://github.com/davidlj95/ngx/issues/330)) ([ee7716d](https://github.com/davidlj95/ngx/commit/ee7716de4482ccc9ec3447530ff16d861a879d06))
- add Material for Mkdocs / API Extractor badges ([#280](https://github.com/davidlj95/ngx/issues/280)) ([5b323c3](https://github.com/davidlj95/ngx/commit/5b323c366c915c9049e7b5ca2f9348d02751dc7e))
- add metadata values JSON guide ([#323](https://github.com/davidlj95/ngx/issues/323)) ([6d15396](https://github.com/davidlj95/ngx/commit/6d15396d9946fed91badd6993614e04333eab7dd))
- add next steps to routing / defaults ref ([#328](https://github.com/davidlj95/ngx/issues/328)) ([93dc9d1](https://github.com/davidlj95/ngx/commit/93dc9d1fd37493ec397f1952dc63fdb3d5adf93b))
- add README.md and autolinks ([#326](https://github.com/davidlj95/ngx/issues/326)) ([2023569](https://github.com/davidlj95/ngx/commit/2023569ff7d68f9d7d1b9f096af89559528abb59))
- add release tags to providers ([#302](https://github.com/davidlj95/ngx/issues/302)) ([df91c4e](https://github.com/davidlj95/ngx/commit/df91c4e2dcfd66062ba05d83aab51753d6e0fbe4))
- comments all classes, ifaces & type aliases ([#293](https://github.com/davidlj95/ngx/issues/293)) ([1285a81](https://github.com/davidlj95/ngx/commit/1285a8142bf82f1f139920e3c489f5e1d4f764ec))
- customize Material for mkdocs ([#264](https://github.com/davidlj95/ngx/issues/264)) ([e45bc40](https://github.com/davidlj95/ngx/commit/e45bc400db289b30a05bd4d38acfb2a97fd6e4cb))
- fix module setup tabs ([#324](https://github.com/davidlj95/ngx/issues/324)) ([dff1aff](https://github.com/davidlj95/ngx/commit/dff1aff7a7772b100ac67199a2e569f3a867f4b6))
- inline element wrong lang syntax ([0289ff5](https://github.com/davidlj95/ngx/commit/0289ff583984adc6c193c0af35869629cc854999))
- link features to custom metadata guide ([4f890ae](https://github.com/davidlj95/ngx/commit/4f890aeef8bc9acbc6251cf35fa526b0a384422f))
- link module types to API Reference ([#279](https://github.com/davidlj95/ngx/issues/279)) ([ed4845c](https://github.com/davidlj95/ngx/commit/ed4845ce0d638ccbb82a09429c8efcfd27c662d5))
- link to md doc / supports instead of compat ([#269](https://github.com/davidlj95/ngx/issues/269)) ([3f4b96d](https://github.com/davidlj95/ngx/commit/3f4b96d0f1bbe0afed3105a8839f9ea1f1195f85))
- mark internal APIs as internal ([#292](https://github.com/davidlj95/ngx/issues/292)) ([51d0c32](https://github.com/davidlj95/ngx/commit/51d0c3259d62620e9136f03b4d35b68b71b26597))
- point to sample in custom metadata guide ([#335](https://github.com/davidlj95/ngx/issues/335)) ([9808cc2](https://github.com/davidlj95/ngx/commit/9808cc2396f2d037856f5a63dbaa662322a40f5b))
- public functions ([#299](https://github.com/davidlj95/ngx/issues/299)) ([7b60b4a](https://github.com/davidlj95/ngx/commit/7b60b4aa9d13f71dba8d66adaf9b9ce38fd44732))
- setup initial mkdocs & deployment ([#257](https://github.com/davidlj95/ngx/issues/257)) ([e4951da](https://github.com/davidlj95/ngx/commit/e4951da40aed4928be437b7344808fefed6c1787))
- specify code file as title when appropriate ([#332](https://github.com/davidlj95/ngx/issues/332)) ([8428618](https://github.com/davidlj95/ngx/commit/8428618340259950e4e7d53958856f5b6ae2622d))
- specify release tag for everything but providers ([#301](https://github.com/davidlj95/ngx/issues/301)) ([7594f6b](https://github.com/davidlj95/ngx/commit/7594f6be0436e4e3bf68e488560423ada2018b9c))
- update ngx-meta desc ([#266](https://github.com/davidlj95/ngx/issues/266)) ([f3508c4](https://github.com/davidlj95/ngx/commit/f3508c448231894b4155cee7df211f243f24d4ea))

### Style

- remove commas in tsconfig.json files ([11ab02f](https://github.com/davidlj95/ngx/commit/11ab02f85c6df68116580696a9f4f0f378f9bba1))

### Miscellaneous Chores

- avoid importing EventType to compile with v17.1 ([#246](https://github.com/davidlj95/ngx/issues/246)) ([5491efe](https://github.com/davidlj95/ngx/commit/5491efea94555646ca65737c3c3981a8dc712cd8))
- fix wrong version in renovate conf ([d7d23a4](https://github.com/davidlj95/ngx/commit/d7d23a446563bfc710ba5ad7ea0eb26df1e7005e))
- improve CI docs step name ([a40a527](https://github.com/davidlj95/ngx/commit/a40a5279ce132e6cea9a619d15732e05b8e7bafa))
- **release:** update CHANGELOG.md ([#248](https://github.com/davidlj95/ngx/issues/248)) ([dfd3d96](https://github.com/davidlj95/ngx/commit/dfd3d9643efb1dd4c3f8660e57e65aa626ee9a14))
- some Twitter Card renamings ([#270](https://github.com/davidlj95/ngx/issues/270)) ([500c439](https://github.com/davidlj95/ngx/commit/500c439e47d6a19469f4ca81c66493a37057285f))
- update pkg.json homepage ([41eccb7](https://github.com/davidlj95/ngx/commit/41eccb727afcb55b85fba9d42d9e69cf455dde4f))

### Code Refactoring

- add "setter" suffix to metadata abst class ([#320](https://github.com/davidlj95/ngx/issues/320)) ([f6027c2](https://github.com/davidlj95/ngx/commit/f6027c24d9ae18b8e9ad7db14ab5c808ed268488))
- hide GLOBAL\_ constant APIs ([#300](https://github.com/davidlj95/ngx/issues/300)) ([8c21c1e](https://github.com/davidlj95/ngx/commit/8c21c1e58369412f44f7ad2210315a4cfa475a2f))
- metadata setter -> manager (less ambiguous) ([#329](https://github.com/davidlj95/ngx/issues/329)) ([c6aeee0](https://github.com/davidlj95/ngx/commit/c6aeee0054e7d8fecd4feaa3079a50020fcba625))

### Tests

- rename late loaded metadata into custom ([#334](https://github.com/davidlj95/ngx/issues/334)) ([7bbf07e](https://github.com/davidlj95/ngx/commit/7bbf07e60a33d17017999d2148334d6d40445f13))

### Build System

- add API Extractor & Documenter ([#271](https://github.com/davidlj95/ngx/issues/271)) ([6f2447e](https://github.com/davidlj95/ngx/commit/6f2447e7091ebf2ab4d9be6308aff7b52be02f9d))
- **deps-dev:** bump pnpm/action-setup to v3.0.0 ([#312](https://github.com/davidlj95/ngx/issues/312)) ([1fe6e09](https://github.com/davidlj95/ngx/commit/1fe6e0920856dd5aca064d8149326272a7db2377))
- **deps-dev:** pin actions/setup-python ([600cdd3](https://github.com/davidlj95/ngx/commit/600cdd3e40c09940b136a53d08602466a91fd42b))
- **deps-dev:** pin pnpm, cache, cypress actions ([#285](https://github.com/davidlj95/ngx/issues/285)) ([cf6dc66](https://github.com/davidlj95/ngx/commit/cf6dc663b3820c348ccd9666b8429d51cf486e80))
- **deps-dev:** update actions/download-artifact digest to eaceaf8 ([a860469](https://github.com/davidlj95/ngx/commit/a86046955af2344bafcd34da5876f8c2515c4ca6))
- **deps-dev:** update actions/setup-node digest to 60edb5d ([7e75ed8](https://github.com/davidlj95/ngx/commit/7e75ed82098212835071b8426c3801ef65d87d3d))
- **deps-dev:** update actions/upload-artifact digest to 5d5d22a ([7704afb](https://github.com/davidlj95/ngx/commit/7704afbce0856718dc27ccfa3a35aedc5e782023))
- **deps-dev:** update commitlint monorepo ([247d90a](https://github.com/davidlj95/ngx/commit/247d90ae4a078616e138f9c17343ec51beca1572))
- **deps-dev:** update dependency @microsoft/api-documenter to v7.23.21 ([8e84a41](https://github.com/davidlj95/ngx/commit/8e84a415b4b9e505993053102af26ceddcb55ab8))
- **deps-dev:** update dependency @microsoft/api-documenter to v7.23.23 ([850f14b](https://github.com/davidlj95/ngx/commit/850f14bb9dba98d57593d3b005217c95930cdb0d))
- **deps-dev:** update dependency @microsoft/api-documenter to v7.23.24 ([6cb64dc](https://github.com/davidlj95/ngx/commit/6cb64dc510e59dd21744127a93efea6f4a5e1337))
- **deps-dev:** update dependency @microsoft/api-extractor to v7.39.5 ([f27900b](https://github.com/davidlj95/ngx/commit/f27900bc08d592eaaa368728302d21dd11339ff8))
- **deps-dev:** update dependency @microsoft/api-extractor to v7.40.0 ([400936d](https://github.com/davidlj95/ngx/commit/400936d6856214eeeeef37a89d0b4bf8a8af613b))
- **deps-dev:** update dependency @microsoft/api-extractor to v7.40.1 ([076bb6b](https://github.com/davidlj95/ngx/commit/076bb6b5b48e7f5a8b0efc99bada94efccf43f8d))
- **deps-dev:** update dependency @microsoft/api-extractor to v7.40.2 ([9c9014e](https://github.com/davidlj95/ngx/commit/9c9014ee3e4ccf8352b52eca04c2cf8f08361c98))
- **deps-dev:** update dependency cypress to v13.6.4 ([257d894](https://github.com/davidlj95/ngx/commit/257d8940cef53765adf66d87ac9b2bbac9b63f76))
- **deps-dev:** update dependency husky to v9.0.10 ([72eed15](https://github.com/davidlj95/ngx/commit/72eed15f9da9a41e0b53fe2e1188cff74ced9b9b))
- **deps-dev:** update dependency husky to v9.0.11 ([4937907](https://github.com/davidlj95/ngx/commit/49379076a3ca8ef0bb5dc8dc0a02d0b6a34210db))
- **deps-dev:** update dependency husky to v9.0.7 ([8d9b7fb](https://github.com/davidlj95/ngx/commit/8d9b7fb8377bce13687d6b2b60a64fc6c82f74c1))
- **deps-dev:** update dependency husky to v9.0.9 ([2c4ebc4](https://github.com/davidlj95/ngx/commit/2c4ebc401b055d06450b1e27b07b583d82b4313e))
- **deps-dev:** update dependency jasmine-core to v5.1.2 ([9829e70](https://github.com/davidlj95/ngx/commit/9829e70065d4a6f21e97779f6db3bbc9b8e825e4))
- **deps-dev:** update dependency lint-staged to v15.2.1 ([67e5684](https://github.com/davidlj95/ngx/commit/67e5684b562181ef407280685b3e9fc567f75e90))
- **deps-dev:** update dependency lint-staged to v15.2.2 ([9d7e23a](https://github.com/davidlj95/ngx/commit/9d7e23aaa30c28efee67335d72e9f243793344fe))
- **deps-dev:** update dependency mkdocs-git-revision-date-localized-plugin to v1.2.4 ([8aca221](https://github.com/davidlj95/ngx/commit/8aca2211b14f15f39e04063e5a73e0b6fe1fa268))
- **deps-dev:** update dependency mkdocs-material to v9.5.10 ([374a262](https://github.com/davidlj95/ngx/commit/374a2622f254a50c77e4f9ba50fed76fe54160a9))
- **deps-dev:** update dependency mkdocs-material to v9.5.7 ([2ed322d](https://github.com/davidlj95/ngx/commit/2ed322dc3c347f8d5f0f4e76502fa2a4874cba0b))
- **deps-dev:** update dependency mkdocs-material to v9.5.8 ([077974e](https://github.com/davidlj95/ngx/commit/077974e39c7599dcf772fe7b069b0fc5ad73d4ac))
- **deps-dev:** update dependency mkdocs-material to v9.5.9 ([cc4ff7b](https://github.com/davidlj95/ngx/commit/cc4ff7b10f21dc35abdc4d12d36afd9cd587aeac))
- **deps-dev:** update dependency ng-packagr to v17.2.0 ([f391af9](https://github.com/davidlj95/ngx/commit/f391af9e60fede592993797eebe3e9843eb00e99))
- **deps-dev:** update dependency node to v20.11.1 ([079840f](https://github.com/davidlj95/ngx/commit/079840f5b4fe1d0e548d39fdf6333f607e8cc688))
- **deps-dev:** update dependency prettier to v3.2.5 ([42f1312](https://github.com/davidlj95/ngx/commit/42f1312bba4516cca7d497022636d5f5e34a333b))
- **deps-dev:** update dependency semantic-release to v23.0.1 ([111c935](https://github.com/davidlj95/ngx/commit/111c9358d81f6dd1434b941d895305f65d5453e4))
- **deps-dev:** update dependency semantic-release to v23.0.2 ([9193729](https://github.com/davidlj95/ngx/commit/9193729a30b5fe393eb84110e909008c66961736))
- **deps-dev:** update peter-evans/create-pull-request action to v6 ([#263](https://github.com/davidlj95/ngx/issues/263)) ([3a73a02](https://github.com/davidlj95/ngx/commit/3a73a02a58a014c8cceb684a92a9c75373f4210a))
- **deps-dev:** update pnpm to v8.15.0 ([78d796f](https://github.com/davidlj95/ngx/commit/78d796f6aac1ddbc5e9cadbd7621d7bf8b2bcced))
- **deps-dev:** update pnpm to v8.15.1 ([45a2779](https://github.com/davidlj95/ngx/commit/45a277949b6a4f783b7fa6020011f53b33156878))
- **deps-dev:** update pnpm to v8.15.3 ([09afe96](https://github.com/davidlj95/ngx/commit/09afe963300ef43dcd6623c9404da3fb7a7cbaa5))
- **deps-dev:** update python docker tag to v3.12.2 ([057dee1](https://github.com/davidlj95/ngx/commit/057dee1042e2b7083482d5b649debbf5eada3c18))
- **deps-dev:** update typescript-eslint monorepo to v6.20.0 ([0e5dac5](https://github.com/davidlj95/ngx/commit/0e5dac53a26fc4112a0e4e7a342437aa8d82e2bf))
- **deps-dev:** update typescript-eslint monorepo to v6.21.0 ([644f641](https://github.com/davidlj95/ngx/commit/644f64177a3b243bfa74f4e7dee2dff142211225))
- **deps-dev:** update typescript-eslint monorepo to v7 ([54e6c0d](https://github.com/davidlj95/ngx/commit/54e6c0d1684ea281346c6b8794973606eb6c57e1))
- **deps-dev:** use v for cypress GH action ([#313](https://github.com/davidlj95/ngx/issues/313)) ([e56ac6a](https://github.com/davidlj95/ngx/commit/e56ac6abb0c35d14c744f16cb386016c80a79952))
- **deps:** pin dependencies ([#316](https://github.com/davidlj95/ngx/issues/316)) ([00180ed](https://github.com/davidlj95/ngx/commit/00180eddb51ef16ca2b0e0b530a853d50d710640))
- **deps:** update [@angular](https://github.com/angular) deps to v17.1.3 ([#304](https://github.com/davidlj95/ngx/issues/304)) ([586886b](https://github.com/davidlj95/ngx/commit/586886b14bef9e03e3ba47fa544a378f53186478))
- **deps:** update angular monorepo ([#250](https://github.com/davidlj95/ngx/issues/250)) ([f629662](https://github.com/davidlj95/ngx/commit/f629662b70ca1365d741fcdada4b1591bf814cf7))
- **deps:** update Angular to v17.2 ([#314](https://github.com/davidlj95/ngx/issues/314)) ([ffe5486](https://github.com/davidlj95/ngx/commit/ffe5486a23a8c894f5cb568aebfc18ba0d4dd6ca))
- **deps:** update dependency zone.js to v0.14.4 ([0452b7c](https://github.com/davidlj95/ngx/commit/0452b7cac67d5fc40f105c1a2a99f3097d7d61e2))
- husky v9 deprecated install ([e1fed81](https://github.com/davidlj95/ngx/commit/e1fed81929bc23510ae4c431d12bce2015c206c6))
- ignore generated API docs ([#325](https://github.com/davidlj95/ngx/issues/325)) ([286f2cf](https://github.com/davidlj95/ngx/commit/286f2cf66a09795c3f82db91fd202e009d70afa9))
- re-arrange ignore files ([#256](https://github.com/davidlj95/ngx/issues/256)) ([c097e41](https://github.com/davidlj95/ngx/commit/c097e41a3c5189cc2a5a652b4deabd8f8fa96ce1))
- remove .python-version file ([#315](https://github.com/davidlj95/ngx/issues/315)) ([5a40951](https://github.com/davidlj95/ngx/commit/5a40951a19c6d40e10aef8ea9daf5e6e53acbe6c))

### Continuous (Integration|Deployment)

- move tsc to build workflow ([#276](https://github.com/davidlj95/ngx/issues/276)) ([7ac26de](https://github.com/davidlj95/ngx/commit/7ac26de7a9ef264450ada71afc9d1a4a2e362235))
- refer to proper build artifact ([#277](https://github.com/davidlj95/ngx/issues/277)) ([da6f83e](https://github.com/davidlj95/ngx/commit/da6f83eb6bcb77d924021ddebdcabcf67ec28376))

## [`ngx-meta` v1.0.0-alpha.38](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.37...ngx-meta-v1.0.0-alpha.38) (2024-01-27)

### Reverts

- Revert "build(deps): update angular monorepo with fix" (#247) ([b0d4ec1](https://github.com/davidlj95/ngx/commit/b0d4ec114819de580b973a222fef4ba43ca2574d)), closes [#247](https://github.com/davidlj95/ngx/issues/247)

### Miscellaneous Chores

- hard code EventType to compile with v17.1 ([781583e](https://github.com/davidlj95/ngx/commit/781583e5cdcd2f10dd104d05b2a9e492ff7f5397))
- **release:** update CHANGELOG.md ([#245](https://github.com/davidlj95/ngx/issues/245)) ([61718e0](https://github.com/davidlj95/ngx/commit/61718e04bc1877807ee45f29e66faa5aee5dfd32))

### Build System

- **deps:** update angular monorepo ([6afe5d2](https://github.com/davidlj95/ngx/commit/6afe5d25dfa26db17f41a2e5f4adb6889dfcb700))
- **deps:** update angular monorepo ([29aceb7](https://github.com/davidlj95/ngx/commit/29aceb7e80135147628d47e13424063f06c642d9))

## [`ngx-meta` v1.0.0-alpha.37](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.36...ngx-meta-v1.0.0-alpha.37) (2024-01-27)

### Documentation

- init `README.md`s & package.json ([#243](https://github.com/davidlj95/ngx/issues/243)) ([048dccc](https://github.com/davidlj95/ngx/commit/048dccc8637e19b8a19e2567a8386bae7675264d))
- ngx-meta README.md fixes ([451b402](https://github.com/davidlj95/ngx/commit/451b402ea7a8f02a3026e0ae4d8185c69942472a))

### Style

- format tsconfig with prettier new rules ([f6f8c23](https://github.com/davidlj95/ngx/commit/f6f8c23e3bd0389a1c62bc3fa34d509853020766))

### Miscellaneous Chores

- **release:** add initial docs ([adb1c05](https://github.com/davidlj95/ngx/commit/adb1c05586d124c7fd0a795812ee1f4fa668b905))
- **release:** update CHANGELOG.md ([#210](https://github.com/davidlj95/ngx/issues/210)) ([41cfd1d](https://github.com/davidlj95/ngx/commit/41cfd1d2b993559e693b165b827ded467d69ed09))
- review public APIs ([#224](https://github.com/davidlj95/ngx/issues/224)) ([d92ddfb](https://github.com/davidlj95/ngx/commit/d92ddfb1fc2fd60de056e1291b66e6c797b30285))

### Code Refactoring

- add "NgxMeta" prefix in all injectables ([#225](https://github.com/davidlj95/ngx/issues/225)) ([e002891](https://github.com/davidlj95/ngx/commit/e002891d8b2e753d4743704bb5fbff2f519c5dc4))
- remove "Metadata" class ([#218](https://github.com/davidlj95/ngx/issues/218)) ([0ce167e](https://github.com/davidlj95/ngx/commit/0ce167e7439fe082676158a591ec925bad9cc4b3))
- remove meta prop and introduce meta def ([#223](https://github.com/davidlj95/ngx/issues/223)) ([c514cae](https://github.com/davidlj95/ngx/commit/c514caefc950d246dd67a3fbc0cb5fc0b1543070))
- rename files instead of export renames ([#222](https://github.com/davidlj95/ngx/issues/222)) ([d2683c8](https://github.com/davidlj95/ngx/commit/d2683c894004649895eca7be62b92465673d17c7))
- rename MetadataProvider to just Metadata ([#221](https://github.com/davidlj95/ngx/issues/221)) ([b3d0b1e](https://github.com/davidlj95/ngx/commit/b3d0b1ee9c12e21aef9c451742f2dc7d0b3ff0ec))

### Build System

- **deps-dev:** update actions/cache action to v4 ([#214](https://github.com/davidlj95/ngx/issues/214)) ([eff4cd2](https://github.com/davidlj95/ngx/commit/eff4cd27e86b0ce7c2d1e617642a8600ea4eeabf))
- **deps-dev:** update actions/upload-artifact digest to 26f96df ([15994a7](https://github.com/davidlj95/ngx/commit/15994a70edbfeee7cc8ef518a834bdeac210cff0))
- **deps-dev:** update actions/upload-artifact digest to 694cdab ([6d3cf72](https://github.com/davidlj95/ngx/commit/6d3cf72c16ef2dfacf223a2f3e268b3b4e67df0f))
- **deps-dev:** update angular-cli monorepo ([c80ab8e](https://github.com/davidlj95/ngx/commit/c80ab8e7b0a0556a68b07ba74a6b326a0658db83))
- **deps-dev:** update angular-cli monorepo to v17.1.0 ([262d992](https://github.com/davidlj95/ngx/commit/262d9926fbb8ecceb9e61b82accf30e05ff14636))
- **deps-dev:** update angular-eslint monorepo to v17.2.1 ([957ba1e](https://github.com/davidlj95/ngx/commit/957ba1e38ce841d0bb23d43a7430e5ea3d08265d))
- **deps-dev:** update commitlint monorepo to v18.5.0 ([2d96f6b](https://github.com/davidlj95/ngx/commit/2d96f6be1ded74324675545412090321c8bd1d9a))
- **deps-dev:** update commitlint monorepo to v18.6.0 ([21995ed](https://github.com/davidlj95/ngx/commit/21995edf573e3bc15b5c6d58b21ad72aff5e1d2b))
- **deps-dev:** update dependency cypress to v13.6.3 ([a29fd01](https://github.com/davidlj95/ngx/commit/a29fd016ae5c1fc41cab1591e94999b294ebe691))
- **deps-dev:** update dependency husky to v9 ([#236](https://github.com/davidlj95/ngx/issues/236)) ([fec0a04](https://github.com/davidlj95/ngx/commit/fec0a04960ccc3c3e530d11d8442fbf3b643c24e))
- **deps-dev:** update dependency husky to v9.0.6 ([b30742a](https://github.com/davidlj95/ngx/commit/b30742a586be643f49039752103387c28e91a886))
- **deps-dev:** update dependency ng-packagr to v17.1.0 ([20fa474](https://github.com/davidlj95/ngx/commit/20fa474335838bed16434585dd3b2ced419bf376))
- **deps-dev:** update dependency ng-packagr to v17.1.1 ([91ae55a](https://github.com/davidlj95/ngx/commit/91ae55a98bde2b0d181a353af61dbed2f968d445))
- **deps-dev:** update dependency ng-packagr to v17.1.2 ([85a8560](https://github.com/davidlj95/ngx/commit/85a856076bf20a0ebdaadd8e13f1d2decac4ba06))
- **deps-dev:** update dependency prettier to v3.2.4 ([f3719f2](https://github.com/davidlj95/ngx/commit/f3719f2acfd7600d69ee3f6f83902a2005d9728d))
- **deps-dev:** update dependency semantic-release to v23 ([086a3b3](https://github.com/davidlj95/ngx/commit/086a3b3a22c3c5a2169970f46bd2fc657dacc6fb))
- **deps-dev:** update peter-evans/create-or-update-comment action to v4 ([#237](https://github.com/davidlj95/ngx/issues/237)) ([3b2aa7a](https://github.com/davidlj95/ngx/commit/3b2aa7a4a8a1f03b141f86315cd12b21f8e2706d))
- **deps-dev:** update peter-evans/find-comment action to v3 ([#238](https://github.com/davidlj95/ngx/issues/238)) ([9717364](https://github.com/davidlj95/ngx/commit/971736427e6c64e18a509b0fee0836ab82f8345a))
- **deps-dev:** update pnpm to v8.14.3 ([1c4a49a](https://github.com/davidlj95/ngx/commit/1c4a49ad37b8da43de6161033b339fbb0c08d9a7))
- **deps-dev:** update typescript-eslint monorepo to v6.19.1 ([1f48f60](https://github.com/davidlj95/ngx/commit/1f48f60888e9d501067dbfb42a78dedd5c002aed))

### Continuous (Integration|Deployment)

- add tsc lint check ([#226](https://github.com/davidlj95/ngx/issues/226)) ([7ba2a23](https://github.com/davidlj95/ngx/commit/7ba2a230a4392d629192e2a10ec44ca95866448f))

## [`ngx-meta` v1.0.0-alpha.36](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.35...ngx-meta-v1.0.0-alpha.36) (2024-01-20)

### Features

- add clear API to metadata service ([#209](https://github.com/davidlj95/ngx/issues/209)) ([006a86d](https://github.com/davidlj95/ngx/commit/006a86dc5dfaa01478e1fbfdc116d6a95f3f5a11))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#208](https://github.com/davidlj95/ngx/issues/208)) ([a2bd686](https://github.com/davidlj95/ngx/commit/a2bd686eb166f701cf00ec64828ba92b1bc7a677))

## [`ngx-meta` v1.0.0-alpha.35](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.34...ngx-meta-v1.0.0-alpha.35) (2024-01-19)

### Features

- allow to late load metadata providers ([#207](https://github.com/davidlj95/ngx/issues/207)) ([524631a](https://github.com/davidlj95/ngx/commit/524631af73f8981761277326711aedbbf7e9d0b0))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#205](https://github.com/davidlj95/ngx/issues/205)) ([da2d7f3](https://github.com/davidlj95/ngx/commit/da2d7f3771832099be8de4adcf56b35df536680a))

### Code Refactoring

- route metadata values store only route values ([#206](https://github.com/davidlj95/ngx/issues/206)) ([eeb22ee](https://github.com/davidlj95/ngx/commit/eeb22ee0a166e6cda446e7a1f3579a79ec08b80d))

## [`ngx-meta` v1.0.0-alpha.34](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.33...ngx-meta-v1.0.0-alpha.34) (2024-01-18)

### Performance Improvements

- is object into arrow function ([#204](https://github.com/davidlj95/ngx/issues/204)) ([7fb5ae1](https://github.com/davidlj95/ngx/commit/7fb5ae14ecee294e1d8819903dd38029b1d3b944))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#203](https://github.com/davidlj95/ngx/issues/203)) ([0c0ad36](https://github.com/davidlj95/ngx/commit/0c0ad36527d6622722f0daa8030f5ebf32e1ab29))

## [`ngx-meta` v1.0.0-alpha.33](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.32...ngx-meta-v1.0.0-alpha.33) (2024-01-18)

### Performance Improvements

- make JSON metadata resolver a fn ([#202](https://github.com/davidlj95/ngx/issues/202)) ([71e6b97](https://github.com/davidlj95/ngx/commit/71e6b97bf264d28927ade160c1ffefe2e663c099))

## [`ngx-meta` v1.0.0-alpha.31](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.30...ngx-meta-v1.0.0-alpha.31) (2024-01-18)

### Features

- improve metadata value types ([#194](https://github.com/davidlj95/ngx/issues/194)) ([7b36ef5](https://github.com/davidlj95/ngx/commit/7b36ef54326f0d25d4afe1ee2c38a8bcb587a476))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#193](https://github.com/davidlj95/ngx/issues/193)) ([42eae60](https://github.com/davidlj95/ngx/commit/42eae600d8d5fd9fc7ed91573ba527f387b2cb69))

## [`ngx-meta` v1.0.0-alpha.30](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.29...ngx-meta-v1.0.0-alpha.30) (2024-01-17)

### Performance Improvements

- use const instead of enums to min bundle size ([#192](https://github.com/davidlj95/ngx/issues/192)) ([a3a7679](https://github.com/davidlj95/ngx/commit/a3a7679e50213ef0d44cb8e14caace885d042a23))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#182](https://github.com/davidlj95/ngx/issues/182)) ([17313d1](https://github.com/davidlj95/ngx/commit/17313d1bb8540b6cee037e81c94b449f74b6c6a2))

### Tests

- **e2e:** add route and service scenario ([#191](https://github.com/davidlj95/ngx/issues/191)) ([7acb112](https://github.com/davidlj95/ngx/commit/7acb112e53232acdeb3209a225c3c99ac7ec46c0))

### Build System

- **deps-dev:** update actions/cache digest to e12d46a ([792c28f](https://github.com/davidlj95/ngx/commit/792c28f3cbeacc9439dd24514ab0eb8cf5740cdb))
- **deps-dev:** update actions/download-artifact digest to 6b208ae ([bf8da2b](https://github.com/davidlj95/ngx/commit/bf8da2bc62a127858b4ccd4c63b3824acda31309))
- **deps-dev:** update actions/upload-artifact digest to 1eb3cb2 ([0630a31](https://github.com/davidlj95/ngx/commit/0630a319427f14c605414c05f864adecd02b87a4))
- **deps-dev:** update dependency node to v20.11.0 ([c1d17c5](https://github.com/davidlj95/ngx/commit/c1d17c572d09038f7486863122db3d77cf48f9fe))
- **deps-dev:** update pnpm to v8.14.1 ([#185](https://github.com/davidlj95/ngx/issues/185)) ([e386712](https://github.com/davidlj95/ngx/commit/e38671293445c44958320eca142e52c5065b6317))
- **deps-dev:** update typescript-eslint monorepo to v6.19.0 ([4dda276](https://github.com/davidlj95/ngx/commit/4dda276bd799d4c99c94a33813fd845d354624eb))
- **deps:** pin actions/github-script action to 60a0d83 ([#186](https://github.com/davidlj95/ngx/issues/186)) ([e047ac8](https://github.com/davidlj95/ngx/commit/e047ac8af691d53a3a837ed65a9d50e455096505))

## [`ngx-meta` v1.0.0-alpha.29](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.28...ngx-meta-v1.0.0-alpha.29) (2024-01-15)

### Performance Improvements

- reduce strategy surface and make it a fn ([#181](https://github.com/davidlj95/ngx/issues/181)) ([1e569ed](https://github.com/davidlj95/ngx/commit/1e569ed3582e44a99e683ededcc08fcb2f5579ba))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#180](https://github.com/davidlj95/ngx/issues/180)) ([a6d7cbe](https://github.com/davidlj95/ngx/commit/a6d7cbec17ea36dae3738d703eff52fe5f54c113))

## [`ngx-meta` v1.0.0-alpha.28](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.27...ngx-meta-v1.0.0-alpha.28) (2024-01-15)

### Performance Improvements

- inline html lang attr service ([#179](https://github.com/davidlj95/ngx/issues/179)) ([9b1bd95](https://github.com/davidlj95/ngx/commit/9b1bd95caea01fbecdc72b4da7a74647f0b5e5c6))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#178](https://github.com/davidlj95/ngx/issues/178)) ([846117c](https://github.com/davidlj95/ngx/commit/846117c0dbede11a4c2cd856a832107342c15d6d))

## [`ngx-meta` v1.0.0-alpha.27](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.26...ngx-meta-v1.0.0-alpha.27) (2024-01-15)

### Performance Improvements

- add global consts to reduce dup strings ([#176](https://github.com/davidlj95/ngx/issues/176)) ([3fee59b](https://github.com/davidlj95/ngx/commit/3fee59b49a81a5c97ee54a2cdc24c0936f8dcb33))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#177](https://github.com/davidlj95/ngx/issues/177)) ([8e75ec0](https://github.com/davidlj95/ngx/commit/8e75ec0670c3f12f512e6d4cb6f2e0ecbc72642f))

## [`ngx-meta` v1.0.0-alpha.26](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.25...ngx-meta-v1.0.0-alpha.26) (2024-01-15)

### Performance Improvements

- add dry helper to upsert / remove head els ([#175](https://github.com/davidlj95/ngx/issues/175)) ([e38b204](https://github.com/davidlj95/ngx/commit/e38b20476bd1fc8dcab7bf00a6ff35b73970e511))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#173](https://github.com/davidlj95/ngx/issues/173)) ([bab7ecd](https://github.com/davidlj95/ngx/commit/bab7ecdc6e7efe86f304c254953ce5e73071e1a2))

### Continuous (Integration|Deployment)

- add total to bundle size tracking comment ([#174](https://github.com/davidlj95/ngx/issues/174)) ([8603d0f](https://github.com/davidlj95/ngx/commit/8603d0f279022601e6eb3907be2771e61ac73df9))

## [`ngx-meta` v1.0.0-alpha.25](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.24...ngx-meta-v1.0.0-alpha.25) (2024-01-15)

### Performance Improvements

- reduce routing module bundle size ([#172](https://github.com/davidlj95/ngx/issues/172)) ([fd4c892](https://github.com/davidlj95/ngx/commit/fd4c892dc39537ea8cda20e21e967688a0bf772a))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#171](https://github.com/davidlj95/ngx/issues/171)) ([c314cc2](https://github.com/davidlj95/ngx/commit/c314cc24152d0d7567e24e3c74311759af076994))

## [`ngx-meta` v1.0.0-alpha.24](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.23...ngx-meta-v1.0.0-alpha.24) (2024-01-15)

### Performance Improvements

- remove defaults serv to reduce core mod size ([#170](https://github.com/davidlj95/ngx/issues/170)) ([ba47952](https://github.com/davidlj95/ngx/commit/ba4795296bc32b163e43629d819049e7a4f0f822))

### Build System

- **ide:** add run config to locally compare bundle size ([#168](https://github.com/davidlj95/ngx/issues/168)) ([4474fc8](https://github.com/davidlj95/ngx/commit/4474fc8754f0f58d3f8a4afa98cda164aa4b91d9))

## [`ngx-meta` v1.0.0-alpha.22](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.21...ngx-meta-v1.0.0-alpha.22) (2024-01-15)

### Performance Improvements

- reduce core module bundle size: meta prop ([#165](https://github.com/davidlj95/ngx/issues/165)) ([d777433](https://github.com/davidlj95/ngx/commit/d7774333db67cf0a1da03db6eef3b363e855a2b8))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#164](https://github.com/davidlj95/ngx/issues/164)) ([8c3a1de](https://github.com/davidlj95/ngx/commit/8c3a1de10eb1ce6236968d724fc4aaf310b269a9))

## [`ngx-meta` v1.0.0-alpha.21](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.20...ngx-meta-v1.0.0-alpha.21) (2024-01-14)

### Performance Improvements

- remove metadata definition class ([#163](https://github.com/davidlj95/ngx/issues/163)) ([cf310f6](https://github.com/davidlj95/ngx/commit/cf310f667f07f6da2d31f33ad99a8d28f7bbcec7))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#162](https://github.com/davidlj95/ngx/issues/162)) ([a9d7412](https://github.com/davidlj95/ngx/commit/a9d7412f69c7762ffc05cb754463d6298d588f20))

## [`ngx-meta` v1.0.0-alpha.20](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.19...ngx-meta-v1.0.0-alpha.20) (2024-01-13)

### Performance Improvements

- reduce JSON LD module bundle size ([#161](https://github.com/davidlj95/ngx/issues/161)) ([1b8df27](https://github.com/davidlj95/ngx/commit/1b8df27f32ec5da0a29160a053b2361d0551c199))
- reduce Open Graph profile module bundle size ([#160](https://github.com/davidlj95/ngx/issues/160)) ([be3acf9](https://github.com/davidlj95/ngx/commit/be3acf9945a66250481afa6d44a5b34ceb2c5b39))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#159](https://github.com/davidlj95/ngx/issues/159)) ([d0bab3b](https://github.com/davidlj95/ngx/commit/d0bab3b4960a8f344a6a1f9c3777869087a118d9))

## [`ngx-meta` v1.0.0-alpha.19](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.18...ngx-meta-v1.0.0-alpha.19) (2024-01-13)

### Performance Improvements

- reduce standard module bundle size ([#157](https://github.com/davidlj95/ngx/issues/157)) ([6d1692c](https://github.com/davidlj95/ngx/commit/6d1692c0b39a4c83f227e20eaa714faed8254581))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#158](https://github.com/davidlj95/ngx/issues/158)) ([5cb7131](https://github.com/davidlj95/ngx/commit/5cb7131b2e6a082ead0ba3941a46c92643fc704c))

## [`ngx-meta` v1.0.0-alpha.18](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.17...ngx-meta-v1.0.0-alpha.18) (2024-01-13)

### Performance Improvements

- reduce Twitter Card module bundle size ([#155](https://github.com/davidlj95/ngx/issues/155)) ([c59da29](https://github.com/davidlj95/ngx/commit/c59da29f28b4f516faad1e0df25a7dbdf046e4ff))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#154](https://github.com/davidlj95/ngx/issues/154)) ([7a3f111](https://github.com/davidlj95/ngx/commit/7a3f111822fc3ada5c36704a68a1f150fc0b92ea))

### Build System

- **ide:** remove semantic release run config ([#156](https://github.com/davidlj95/ngx/issues/156)) ([856a7c9](https://github.com/davidlj95/ngx/commit/856a7c92d1a8b32c14969608ff16a71686c17fd8))

## [`ngx-meta` v1.0.0-alpha.17](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.16...ngx-meta-v1.0.0-alpha.17) (2024-01-13)

### Performance Improvements

- reduce Open Graph module bundle size ([#150](https://github.com/davidlj95/ngx/issues/150)) ([dff2686](https://github.com/davidlj95/ngx/commit/dff268668d70df401ff743290b0a9a1702ce483b))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#142](https://github.com/davidlj95/ngx/issues/142)) ([8a79fb4](https://github.com/davidlj95/ngx/commit/8a79fb471dbe63dbb409d62881d8a8085a34e8f2))

### Build System

- add option to show base bundle size & diff ([#146](https://github.com/davidlj95/ngx/issues/146)) ([f7a4e4c](https://github.com/davidlj95/ngx/commit/f7a4e4c61375040d9c89a9cbc3e16c9ec71ee339))
- **deps-dev:** bump follow-redirects in /projects/ngx-meta/e2e/a15 ([#139](https://github.com/davidlj95/ngx/issues/139)) ([88ebdeb](https://github.com/davidlj95/ngx/commit/88ebdeba2a85a000fca9da0cfec7c75f4a9a42d2))
- **deps-dev:** bump follow-redirects in /projects/ngx-meta/e2e/a16 ([#137](https://github.com/davidlj95/ngx/issues/137)) ([22b1da7](https://github.com/davidlj95/ngx/commit/22b1da70124aca432cb9154f172480ab222917c6))
- **deps-dev:** bump follow-redirects in /projects/ngx-meta/e2e/a17 ([#138](https://github.com/davidlj95/ngx/issues/138)) ([eab7583](https://github.com/davidlj95/ngx/commit/eab75839c146cad043606f2bcb9df1f6b6e9021f))
- **ide:** launch tests in headless browser ([#149](https://github.com/davidlj95/ngx/issues/149)) ([274e894](https://github.com/davidlj95/ngx/commit/274e8942991d394fd95b553d99e301809d5293fe))

### Continuous (Integration|Deployment)

- add precision to bundle size diff PR comment ([#151](https://github.com/davidlj95/ngx/issues/151)) ([6589afc](https://github.com/davidlj95/ngx/commit/6589afcc18133c4bd57364ecfc5c9b8f110e75cc))
- add ref back + update comment by id ([#145](https://github.com/davidlj95/ngx/issues/145)) ([e36b740](https://github.com/davidlj95/ngx/commit/e36b7400720cabeff033a79652c469e77599f707))
- handle base bundle size not available case ([#153](https://github.com/davidlj95/ngx/issues/153)) ([15b4541](https://github.com/davidlj95/ngx/commit/15b4541a0ac795f7622c37d7c02340aef82321fd))
- properly fix diff percent scale ([#152](https://github.com/davidlj95/ngx/issues/152)) ([0cf197d](https://github.com/davidlj95/ngx/commit/0cf197dc9285cf12cc308420f6bf233f7d72c413))
- show bundle size diff in PRs ([#148](https://github.com/davidlj95/ngx/issues/148)) ([f77450a](https://github.com/davidlj95/ngx/commit/f77450aee4ae5ec0cdd5c5daae2bd366bcc8c2e1))
- split bundle size in separate job ([#143](https://github.com/davidlj95/ngx/issues/143)) ([4e7a198](https://github.com/davidlj95/ngx/commit/4e7a19874c08843e271989bca4ed4d0e38b7a363))
- store bundle size info ([#144](https://github.com/davidlj95/ngx/issues/144)) ([04bfe0a](https://github.com/davidlj95/ngx/commit/04bfe0ad3a330befd485f5c2fc916a0b00336140))
- store bundle size info as GitHub check run ([#147](https://github.com/davidlj95/ngx/issues/147)) ([e041eec](https://github.com/davidlj95/ngx/commit/e041eec0d9a5613e1322f6c484a930778e480315))

## [`ngx-meta` v1.0.0-alpha.16](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.15...ngx-meta-v1.0.0-alpha.16) (2024-01-10)

### Features

- add Angular router as peer dep ([#141](https://github.com/davidlj95/ngx/issues/141)) ([65e1e30](https://github.com/davidlj95/ngx/commit/65e1e30cc554a8a606aaf37e0479c0aa314e8295))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#120](https://github.com/davidlj95/ngx/issues/120)) ([cf04115](https://github.com/davidlj95/ngx/commit/cf0411553cefbd7f1399476724d7862c3a10aaec))

### Code Refactoring

- rename value from values -> json resolver ([#122](https://github.com/davidlj95/ngx/issues/122)) ([8866c92](https://github.com/davidlj95/ngx/commit/8866c92f3f3440b26e36eda0a3d8896851586efa))
- setter into resolver ([#121](https://github.com/davidlj95/ngx/issues/121)) ([4fa478b](https://github.com/davidlj95/ngx/commit/4fa478bc0d03eaf1b2b7eeea3002f1a81e8adeb4))

### Tests

- **e2e:** report bundle size on PR comments ([#126](https://github.com/davidlj95/ngx/issues/126)) ([5a95bb5](https://github.com/davidlj95/ngx/commit/5a95bb51f980225c695464f1157bc43aa9a10ecf))

### Build System

- **deps-dev:** bump follow-redirects from 1.15.3 to 1.15.4 ([#140](https://github.com/davidlj95/ngx/issues/140)) ([b8381b2](https://github.com/davidlj95/ngx/commit/b8381b2f0004c364b5ab15e3a6c3d2f979377986))
- **deps-dev:** update angular-cli monorepo to v17.0.9 ([8076728](https://github.com/davidlj95/ngx/commit/8076728cf96bfe46dea479a7e06f7ce591157a45))
- **deps-dev:** update angular-eslint monorepo to v17.2.0 ([e870b40](https://github.com/davidlj95/ngx/commit/e870b4025c41f38bfe895d4c525dcbac17e7959c))
- **deps-dev:** update commitlint monorepo to v18.4.4 ([84b0c77](https://github.com/davidlj95/ngx/commit/84b0c7760e759ddc114cd0eb4a42ca2bcb4d8e51))
- **deps-dev:** update dependency cypress to v13.6.2 ([1c5a2bd](https://github.com/davidlj95/ngx/commit/1c5a2bdf4242f01a34fc69f9aff9f580d5297129))
- **deps-dev:** update pnpm to v8.13.1 ([7c6e41c](https://github.com/davidlj95/ngx/commit/7c6e41cd20332198c1079f567c8fa8ced859dafc))
- **deps-dev:** update pnpm to v8.14.0 ([84ef02a](https://github.com/davidlj95/ngx/commit/84ef02a8850602d828963e079bf569ee6eed93d4))
- **deps-dev:** update typescript-eslint monorepo to v6.16.0 ([ab6d7e1](https://github.com/davidlj95/ngx/commit/ab6d7e18cb14e1e86ae33fa54d69ccb30bf213e7))
- **deps-dev:** update typescript-eslint monorepo to v6.17.0 ([bbfdab3](https://github.com/davidlj95/ngx/commit/bbfdab335cfef3c077e0a6ba0c48fe662f77ab92))
- **deps-dev:** update typescript-eslint monorepo to v6.18.0 ([1f0a0eb](https://github.com/davidlj95/ngx/commit/1f0a0eb8e3519b98ac749ae3f396cbb57c6b2671))
- **deps-dev:** update typescript-eslint monorepo to v6.18.1 ([22a088a](https://github.com/davidlj95/ngx/commit/22a088aef2900e3a7d955c18545f3989669b7ef1))
- **deps:** pin dependencies ([#127](https://github.com/davidlj95/ngx/issues/127)) ([38d044a](https://github.com/davidlj95/ngx/commit/38d044a281c54666fa815fb98ae526ab54b4a6a8))
- **deps:** update dependency zone.js to v0.13.3 ([00a1277](https://github.com/davidlj95/ngx/commit/00a1277edb6b96ae86ae2531fc3858a18b79f519))

## [`ngx-meta` v1.0.0-alpha.15](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.14...ngx-meta-v1.0.0-alpha.15) (2023-12-25)

### Performance Improvements

- shorter token descriptions for prod ([#119](https://github.com/davidlj95/ngx/issues/119)) ([034d10b](https://github.com/davidlj95/ngx/commit/034d10b0f477e711e236d14f1639b586baddb75d))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#113](https://github.com/davidlj95/ngx/issues/113)) ([50cfce4](https://github.com/davidlj95/ngx/commit/50cfce4ba2669689ab9bcf74c0368a7dffb33371))
- remove unneeded optional injectable on route values ([#115](https://github.com/davidlj95/ngx/issues/115)) ([e463500](https://github.com/davidlj95/ngx/commit/e4635001817d217202a376502f7d745492eb8782))
- remove unneeded optional injectable route values ([#116](https://github.com/davidlj95/ngx/issues/116)) ([d8d6f3a](https://github.com/davidlj95/ngx/commit/d8d6f3ac10d6bf6c176462dd447ae1a58be0c6b9))

### Code Refactoring

- decouple value resolve from defaults service ([#117](https://github.com/davidlj95/ngx/issues/117)) ([983d8c4](https://github.com/davidlj95/ngx/commit/983d8c494892510b07d20dced9fa33c7bbdfc8fc))

### Tests

- **e2e:** add test to ensure defaults work ([#114](https://github.com/davidlj95/ngx/issues/114)) ([4a026a0](https://github.com/davidlj95/ngx/commit/4a026a031d793672c836c5442a286041734a2e42))

### Build System

- **deps:** update Angular versions ([#118](https://github.com/davidlj95/ngx/issues/118)) ([45157e1](https://github.com/davidlj95/ngx/commit/45157e1a522426a54b32ff5b3115b621097a7708))

## [`ngx-meta` v1.0.0-alpha.14](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.13...ngx-meta-v1.0.0-alpha.14) (2023-12-25)

### Features

- add provideX standalone APIs ([#110](https://github.com/davidlj95/ngx/issues/110)) ([57e27ba](https://github.com/davidlj95/ngx/commit/57e27ba73f00161cadd73ea28ca75c7e8a4eb11e))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#103](https://github.com/davidlj95/ngx/issues/103)) ([b93711e](https://github.com/davidlj95/ngx/commit/b93711e417a64a2f0bb1b823d90e66fcd80b81d3))

### Build System

- **deps-dev:** update actions/download-artifact digest to f44cd7b ([68a32f1](https://github.com/davidlj95/ngx/commit/68a32f12d9a1bdd04718d75ef38eda8aeb8e976f))
- **deps-dev:** update actions/setup-node digest to b39b52d ([687d791](https://github.com/davidlj95/ngx/commit/687d7917131599a5f8e3b4442620b7e23836072a))
- **deps-dev:** update dependency eslint to v8.56.0 ([cdac02c](https://github.com/davidlj95/ngx/commit/cdac02c225b158e52cb8991177ec141b2c9dbe59))
- **deps-dev:** update dependency ng-packagr to v17.0.3 ([53c3be1](https://github.com/davidlj95/ngx/commit/53c3be180d8da7612a5236cb2bd30dc32997d9a0))
- **deps-dev:** update typescript-eslint monorepo to v6.15.0 ([1d49205](https://github.com/davidlj95/ngx/commit/1d49205cb3ac3d725b2e43a29d66e5672f5831d3))
- **deps:** pin dependencies ([a0684ba](https://github.com/davidlj95/ngx/commit/a0684baf9cf5f9d1e9dbcfaf0ad2937ba3c1d16e))

## [`ngx-meta` v1.0.0-alpha.13](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.12...ngx-meta-v1.0.0-alpha.13) (2023-12-18)

### Miscellaneous Chores

- **release:** new release to see bundle size ([407b703](https://github.com/davidlj95/ngx/commit/407b703b024aa2488a763a40ab22d02f2936b96c))
- **release:** update CHANGELOG.md ([#99](https://github.com/davidlj95/ngx/issues/99)) ([ab98ecf](https://github.com/davidlj95/ngx/commit/ab98ecfc231cc95d5b9e72ab8744641285d61e47))

### Code Refactoring

- split scope from base metadata definition ([#102](https://github.com/davidlj95/ngx/issues/102)) ([3077f89](https://github.com/davidlj95/ngx/commit/3077f89d045cf10ec0599d63c9c0aa64c438aef9))

### Tests

- **e2e:** ensure no console logs are emitted ([#100](https://github.com/davidlj95/ngx/issues/100)) ([4cde2ed](https://github.com/davidlj95/ngx/commit/4cde2ed50fdbe04a8a85b30db7045ecf261c789f))

### Build System

- **git:** ignore cypress generated files ([#101](https://github.com/davidlj95/ngx/issues/101)) ([f1c8c21](https://github.com/davidlj95/ngx/commit/f1c8c21a7005be100e2a6d4911ef8b8f51d4996d))

## [`ngx-meta` v1.0.0-alpha.12](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.11...ngx-meta-v1.0.0-alpha.12) (2023-12-18)

### Performance Improvements

- use ngDevMode instead of isDevMode ([#96](https://github.com/davidlj95/ngx/issues/96)) ([26cad28](https://github.com/davidlj95/ngx/commit/26cad288fa1bd429fa520aac551cf7fcce2f14d3))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#95](https://github.com/davidlj95/ngx/issues/95)) ([ba46b38](https://github.com/davidlj95/ngx/commit/ba46b38721cdae4dce8fc5848545095a2d1faa31))

## [`ngx-meta` v1.0.0-alpha.11](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.10...ngx-meta-v1.0.0-alpha.11) (2023-12-18)

### Features

- different dev/pro behaviour for warnings ([#94](https://github.com/davidlj95/ngx/issues/94)) ([0ec07b3](https://github.com/davidlj95/ngx/commit/0ec07b3f81fd97fc152e3dfafe11544df60fbf45))

### Miscellaneous Chores

- **release:** update CHANGELOG.md ([#89](https://github.com/davidlj95/ngx/issues/89)) ([af56d87](https://github.com/davidlj95/ngx/commit/af56d87bef54752ce9f3ca265a5855e9909174d4))

## [`ngx-meta` v1.0.0-alpha.10](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.9...ngx-meta-v1.0.0-alpha.10) (2023-12-17)

### Miscellaneous Chores

- **release:** new alpha release ([b97e519](https://github.com/davidlj95/ngx/commit/b97e519471f9bf5d0f2a852b38103ff8a81d211b))
- **release:** update CHANGELOG.md ([#72](https://github.com/davidlj95/ngx/issues/72)) ([5491ef1](https://github.com/davidlj95/ngx/commit/5491ef1980e8e5295aea0120f63179a33746b4a2))
- rename guard module name ([#84](https://github.com/davidlj95/ngx/issues/84)) ([d60dc54](https://github.com/davidlj95/ngx/commit/d60dc54815c46a80c1a3d47567e5c51ac03afd5e))

### Tests

- **e2e:** add Angular v15 e2e app ([#88](https://github.com/davidlj95/ngx/issues/88)) ([37f9ce5](https://github.com/davidlj95/ngx/commit/37f9ce527c1404295b0e851cb4e936a4bee56a9a))
- **e2e:** add Angular v16 e2e app ([#85](https://github.com/davidlj95/ngx/issues/85)) ([11baf33](https://github.com/davidlj95/ngx/commit/11baf33f688f886ac9c48e269adf07c8c8811cf8)), closes [#64](https://github.com/davidlj95/ngx/issues/64)
- **e2e:** remove test deps from Angular e2e apps ([#86](https://github.com/davidlj95/ngx/issues/86)) ([2beb79b](https://github.com/davidlj95/ngx/commit/2beb79b21676b2848ba8f33b5df22cc6ca4b6700))

### Build System

- **deps-dev:** update actions/download-artifact action to v4 ([#82](https://github.com/davidlj95/ngx/issues/82)) ([df49610](https://github.com/davidlj95/ngx/commit/df496104b5f07e02b1dd92de64371a1971dffa64))
- **deps-dev:** update pnpm to v8.12.1 ([#81](https://github.com/davidlj95/ngx/issues/81)) ([1e1a4a0](https://github.com/davidlj95/ngx/commit/1e1a4a0b75723c3133323416ecb7d2865aa24d8a))
- **deps:** pin dependencies ([3115fca](https://github.com/davidlj95/ngx/commit/3115fca0cefeea4fd210b7f0f031b8e394270d18))
- **deps:** update to Angular v17.0.7 ([ebf23d3](https://github.com/davidlj95/ngx/commit/ebf23d3478c774b782bc9188b210d187832d2776))
- fix tsc configs + unused file ([#78](https://github.com/davidlj95/ngx/issues/78)) ([6e82248](https://github.com/davidlj95/ngx/commit/6e822482e4cb154cad3152321e10f1020c2cc5d9))
- **ide:** add Cypress run config ngx-meta/route ([ff38c5c](https://github.com/davidlj95/ngx/commit/ff38c5ca097d5f794178b0a401ac800aecf0a2c0))

## [`ngx-meta` v1.0.0-alpha.9](https://github.com/davidlj95/ngx/compare/ngx-meta-v1.0.0-alpha.8...ngx-meta-v1.0.0-alpha.9) (2023-12-14)

### Documentation

- update README.md with alpha notice ([a548354](https://github.com/davidlj95/ngx/commit/a548354de28d400e6d27ed90525225a6c27f8705))

### Miscellaneous Chores

- **release:** maintenance release ([111a699](https://github.com/davidlj95/ngx/commit/111a6999931712f06318d96a1350d81af5ed7238))

### Code Refactoring

- metadata-centric approach ([#53](https://github.com/davidlj95/ngx/issues/53)) ([f48c524](https://github.com/davidlj95/ngx/commit/f48c524d436a1278c7d91686f0aa1bb3c1616b81))

### Tests

- **e2e:** add Open Graph services test ([#50](https://github.com/davidlj95/ngx/issues/50)) ([ec38f5b](https://github.com/davidlj95/ngx/commit/ec38f5be35a9e17989331bd3a8c24a893c0e4843))

### Build System

- **deps-dev:** update angular-cli monorepo to v17.0.5 ([fac171b](https://github.com/davidlj95/ngx/commit/fac171b28ed9409b7e76ad752eaa2f3729e3bd37))
- **deps-dev:** update angular-cli monorepo to v17.0.6 ([071e794](https://github.com/davidlj95/ngx/commit/071e794a765ff31fb3a8239bf2113bc55b2dec75))
- **deps-dev:** update angular-cli monorepo to v17.0.7 ([d917670](https://github.com/davidlj95/ngx/commit/d9176705f0e1e8281e1a4c1752f531bfbbdeb0ea))
- **deps-dev:** update angular-eslint monorepo to v17.1.1 ([e5d0c1f](https://github.com/davidlj95/ngx/commit/e5d0c1fba0009e0e8a83b7891d4c4be8babde851))
- **deps-dev:** update dependency cypress to v13.6.1 ([d3334de](https://github.com/davidlj95/ngx/commit/d3334de45a0bb2a616785fd5fa4ba16d5730a556))
- **deps-dev:** update dependency eslint to v8.55.0 ([eb4e27b](https://github.com/davidlj95/ngx/commit/eb4e27b2dd162a348f1ed8903b3615354a991846))
- **deps-dev:** update dependency eslint-config-prettier to v9.1.0 ([6217c64](https://github.com/davidlj95/ngx/commit/6217c6437d3632f5d0179478648510981465b232))
- **deps-dev:** update dependency lint-staged to v15.2.0 ([96dba5c](https://github.com/davidlj95/ngx/commit/96dba5c89b6e8fe1423bad7e7d2aeec5f717b7ad))
- **deps-dev:** update dependency prettier to v3.1.1 ([a3bee87](https://github.com/davidlj95/ngx/commit/a3bee87ea33a168a96c65bc0d408b6308681331f))
- **deps-dev:** update dependency semantic-release to v22.0.10 ([2f38afa](https://github.com/davidlj95/ngx/commit/2f38afa3a5eaebf75c14b8a0500c21569f711952))
- **deps-dev:** update dependency semantic-release to v22.0.12 ([e9b1bed](https://github.com/davidlj95/ngx/commit/e9b1bed41a09987124f022f9ad278f01aac6db3a))
- **deps-dev:** update dependency typescript to v5.3.3 ([c48ec78](https://github.com/davidlj95/ngx/commit/c48ec78ee219d3855d9a75100c48f3ba9686a962))
- **deps-dev:** update pnpm to v8.12.0 ([69a0102](https://github.com/davidlj95/ngx/commit/69a01029378f5aa095794a2f8e5789cfffdd1846))
- **deps-dev:** update pnpm to v8.12.1 ([85ad806](https://github.com/davidlj95/ngx/commit/85ad8066c96e82b1dd818953503a2c05e6f49b38))
- **deps-dev:** update typescript-eslint monorepo to v6.13.1 ([e106faf](https://github.com/davidlj95/ngx/commit/e106fafbe3e8c04948ee49c0932590da0b0727d7))
- **deps-dev:** update typescript-eslint monorepo to v6.13.2 ([0f6b109](https://github.com/davidlj95/ngx/commit/0f6b10928a39cb37c4dd068c72ad4af3cf5d15c1))
- **deps-dev:** update typescript-eslint monorepo to v6.14.0 ([3740ad2](https://github.com/davidlj95/ngx/commit/3740ad254b3d23777a82a963fd3ae9057bff4fc3))
- **deps:** regenerate lockfile + ng update ([91dd432](https://github.com/davidlj95/ngx/commit/91dd4326ddf4eeb3c8666aa894b431d666b4b7ee))
- **deps:** update angular monorepo to v17.0.5 ([0e485be](https://github.com/davidlj95/ngx/commit/0e485beed758056d3e7e16d385f3f57567eee0eb))
- **deps:** update angular monorepo to v17.0.6 ([56e26cf](https://github.com/davidlj95/ngx/commit/56e26cfe06bfd21db2a2125e303e07bd0d4df7af))

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
