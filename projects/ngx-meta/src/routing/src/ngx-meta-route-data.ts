import { MetadataValues } from '@davidlj95/ngx-meta/core'

/**
 * Utility type to ensure metadata values are set properly inside an Angular
 * {@link https://angular.dev/api/router/Route#data | `Route.data`}
 *
 * You can also provide specific metadata module types to ensure type safety
 * of the metadata values. Open doc details to see an example.
 *
 * @remarks
 *
 * If you don't specify a metadata values type, no type safety will be enforced
 *
 * ```typescript
 * const routeData: NgxMetaRouteData = {
 *   meta: { invalid: 'values' }
 * }
 * ```
 *
 * See example to enforce type safety on metadata values too.
 *
 * @example
 * With Typescript's {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator | satisfies}
 * operator and specifying {@link GlobalMetadata} and {@link StandardMetadata} types

 * ```typescript
 * const routes: Routes = [
 *   {
 *     // regular route stuff
 *     data: {
 *       meta: { title: 'Foo', standard: { keywords: ['foo', 'bar'] } }
 *     } satisfies NgxMetaRouteData<GlobalMetadata & StandardMetadata>
 *   }
 * ]
 * ```
 *
 * See {@link https://ngx-meta.dev/guides/metadata-values-json/ | metadata values JSON guide} for more information
 * about typing the metadata values JSON object.
 *
 * @typeParam Metadata - Metadata values type
 * @public
 */
export interface NgxMetaRouteData<Metadata = MetadataValues> {
  meta: Metadata
}
