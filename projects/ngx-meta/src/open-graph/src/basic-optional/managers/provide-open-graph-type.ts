import { provideOpenGraphManager } from '../../utils/provide-open-graph-manager'

// noinspection JSValidateJSDoc
/**
 * Manages the {@link OpenGraph."type"} metadata
 * @public
 */
export const provideOpenGraphType = () => provideOpenGraphManager('type')

/**
 * {@inheritDoc provideOpenGraphType}
 * @deprecated Use {@link provideOpenGraphType} instead
 * @public
 */
export const OPEN_GRAPH_TYPE_METADATA_PROVIDER =
  /* @__PURE__ */
  provideOpenGraphType()
