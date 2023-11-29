import { Routes } from '@angular/router'
import { MetaSetByServicesComponent } from './meta-set-by-services/meta-set-by-services.component'
import { META_SET_BY_SERVICES } from '../../../cypress/fixtures/routes'

export const routes: Routes = [
  {
    path: META_SET_BY_SERVICES,
    component: MetaSetByServicesComponent,
  },
]
