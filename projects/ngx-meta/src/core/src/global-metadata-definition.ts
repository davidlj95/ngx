import { MetadataDefinition } from './metadata-definition'

export class GlobalMetadataDefinition<Global extends string = string>
  implements MetadataDefinition<Global>
{
  public readonly jsonPath = [this.id]

  constructor(public readonly id: Global) {}
}
