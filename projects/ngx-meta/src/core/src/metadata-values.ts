/**
 * Defines the metadata values to use for a page. Broadly speaking, it's just
 * a JSON object
 *
 * @remarks
 *
 * You can ensure its proper shape by using `XMetadata` types where `X` is the
 * metadata module. Or {@link GlobalMetadata} for metadata values shared amongst
 * one or more modules.
 *
 * @public
 */
export type MetadataValues = object
