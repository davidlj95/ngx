import {
  shouldContainAllStandardMetadata,
  shouldNotContainAnyStandardMetadata,
} from './standard'
import {
  shouldContainAllOpenGraphMetadata,
  shouldNotContainAnyOpenGraphMetadata,
} from './open-graph'
import {
  shouldContainAllOpenGraphProfileMetadata,
  shouldNotContainAnyOpenGraphProfileMetadata,
} from './open-graph-profile'
import {
  shouldContainAllTwitterCardMetadata,
  shouldNotContainAnyTwitterCardMetadata,
} from './twitter-card'
import {
  shouldContainJsonLdMetadata,
  shouldNotContainJsonLdMetadata,
} from './json-ld'

export const shouldContainAllMetadata = () => {
  shouldContainAllStandardMetadata()
  shouldContainAllOpenGraphMetadata()
  shouldContainAllOpenGraphProfileMetadata()
  shouldContainAllTwitterCardMetadata()
  shouldContainJsonLdMetadata()
}

export const shouldNotContainAnyMetadata = () => {
  shouldNotContainAnyStandardMetadata()
  shouldNotContainAnyOpenGraphMetadata()
  shouldNotContainAnyOpenGraphProfileMetadata()
  shouldNotContainAnyTwitterCardMetadata()
  shouldNotContainJsonLdMetadata()
}
