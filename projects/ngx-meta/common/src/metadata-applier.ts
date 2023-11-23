export interface MetadataApplier<M> {
  apply(metadata: M): void
}
