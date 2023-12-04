import { Routes } from '@angular/router'
import { MetaSetByServicesComponent } from './meta-set-by-services/meta-set-by-services.component'
import { META_SET_BY_SERVICES } from '../../../cypress/fixtures/routes'
import { ExperimentalComponent } from './experimental/experimental.component'

export const routes: Routes = [
  {
    path: META_SET_BY_SERVICES,
    component: MetaSetByServicesComponent,
  },
  {
    path: 'experimental',
    component: ExperimentalComponent,
    data: {
      meta: {
        description: 'Experimental description set by route',
      },
    },
  },
]
