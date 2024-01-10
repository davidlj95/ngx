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
