# Late loading modules

You may not need to manage all metadata in all pages of your site. For instance, you may need to use [standard module] metadata for most of your pages. But only some pages actually need [Open Graph module] metadata. So in order to reduce your main bundle size, you can import metadata modules only in the pages that actually need them.

Let's put into practice the given example. We'll provide [standard module] at app initialization, so we can set standard metadata like `#!html <title>` for all app pages. But load [Open Graph module] just for some pages instead to reduce main app bundle size.

## 1. Remove module from main app file

First, remove the metadata module from your main app config / module file

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Open your `app.config.ts` file. Keep the core provider (and routing one if you want it). Remove the metadata module provider you want to load later. Like [Open Graph module] in this example.

    ```title="app.config.ts"
    export const appConfig: ApplicationConfig = {
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaStandard(),
        {--provideNgxMetaOpenGraph(),--}
        // ...
      ],
    }
    ```

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Open your `app.module.ts` file. Keep the core module (and routing module if you want it). Remove the metadata module you want to load later. Like [Open Graph module] in this example.

    ```title="app.module.ts"
    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaStandard(),
        {--provideNgxMetaOpenGraph(),--}
      ],
      // ...
    })
    export class AppModule {}
    ```

## 2. Add the metadata module

Add the metadata module to the part of your site where you'll need it. For instance, let's say we want to add it to the `/blog` route.

You can either add it in a:

### Feature module

If you are using a module-based app, you may have followed [Angular's guide about lazy loading]. In there, a "feature module" is created and associated to a route. The module is lazy-loaded to reduce main bundle size.

For instance:

```typescript title="app-routing.module.ts"
const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

You can import it in the lazy-loaded module

```title="blog.module.ts"
@NgModule({
  // ...
  imports: [
    RouterModule.forChild(routes), // blog routes
    // ...
  ],
  {++providers: [
    provideNgxMetaOpenGraph(),
  ]++}
  // ...
})
export class BlogModule {}
```

!!! tip "Prefer not to import metadata modules in the feature module's routing module"

    In [Angular's guide about lazy loading], a `CustomerRoutingModule` is created aside from the `CustomerModule` feature module. Metadata is actually kind of a feature, so wouldn't belong to routing module

[Angular's guide about lazy loading]: https://angular.dev/guide/ngmodules/lazy-loading#create-a-feature-module-with-routing

### Route

If you migrated to standalone apps, where need for Angular modules is reduced, you may have followed [Angular's guide about lazy loading in standalone apps]

[Angular's guide about lazy loading in standalone apps]: https://v16.angular.io/guide/standalone-components#routing-and-lazy-loading

In there, to lazy load a route, you either dynamically import a component or many routes. If you dynamically import a component, check out next chapter about [adding a metadata module in a component](#component). Otherwise, keep reading.

You can add a metadata module into the `providers` of a route. For instance, let's say `/blog` routes have been associated with following `BLOG_ROUTES`:

```typescript title="app.routes.ts"
export const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog/routes').then((m) => m.BLOG_ROUTES),
  },
]
```

In the blog routes file, provide the metadata module as a provider for the route

```title="./blog/routes.ts"
export const BLOG_ROUTES: Routes = [
  {
    path: '',
    component: BlogComponent,
    providers: [
      // ...
      {++provideNgxMetaOpenGraph(),++}
    ],
    data: {
      meta:
        { // you can actually add some
        } // metadata to this route too
    },
  },
]
```

### Component

You can also load a metadata module by requiring it as a provider for a specific component. Note that only when that component is loaded the metadata modules will be loaded too.

Let's say we want to add it to the `BlogComponent`:

```title="blog.component.ts"
@Component({
  selector: 'app-blog',
  // standalone: true, (no need to be standalone!)
  templateUrl: './blog.component.html',
  providers: [
    // ...
    {++provideNgxMetaOpenGraph(),++}
  ]
})
```

## 3. Add the loader module

If you're an impatient dev 😉, probably you tried to see if your metadata was there after step 2. But we're missing the magic, final piece. In order to load the metadata module, we need to add an extra module or provider.

??? note "This is due to an implementation detail & Angular's dependency injection system"

    Given core library services are loaded in `app.[config|module].ts`, core services get their dependencies injected at that moment. One of those dependencies are the metadata modules, that are injected using Angular's dependency injection system. Hence metadata modules not loaded at that point, won't be injected as extra core library services dependencies because dependency injection has already happened already. To workaround that, library contains a registry that allows loading more metadata modules using its APIs.

To add the metadata loader

=== "When using module import (feature module)"

    Add [`provideNgxMetaMetadataLoader`](ngx-meta.providengxmetametadataloader.md)

    For instance:

    ```title="blog.module.ts"
    @NgModule({
      // ...
      providers: [
        // ...
        {++provideNgxMetaOpenGraph(),
        provideNgxMetaMetadataLoader(),++}
      ],
      // ...
    })
    export class BlogModule {}
    ```

=== "When using providers (route/component)"

    Add [`provideNgxMetaMetadataLoader`](ngx-meta.providengxmetametadataloader.md)

    For instance, if using route providers:

    ```title="./blog/routes.ts"
    export const BLOG_ROUTES: Routes = [
      {
        // ...
        providers: [
          // ...
          {++provideNgxMetaOpenGraph(),
          provideNgxMetaMetadataLoader(),++}
        ],
      },
    ]
    ```

    Same pattern would apply if using a component's `providers`

Your metadata module will now be able to be loaded. And metadata values for that module will be applied for that part of your site.
