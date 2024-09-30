*[SSR]: Server Side Rendering. In Angular, it was formerly provided (before v17) by the Angular Universal package.
*[routing module / provider]: `NgxMetaRoutingModule` for module-based apps or `provideNgxMetaRouting` for standalone apps
*[standalone apps]: Angular apps where all components are standalone<br>Almost no `NgModule`s<br>Default for apps created with Angular CLI v17+. Recommended approach to author apps and libraries.
*[module-based apps]: Traditional Angular apps with `NgModule`s<br>Default for apps created before Angular CLI v17. Still supported, but standalone apps are the recommended approach right now.
*[standalone, recommended API]: You can use standalone APIs in a module-based, traditional Angular application. Those APIs are the recommended approach to writing apps and libraries. Module APIs aren't deprecated yet, but they will possibly be at some point. Plus standalone APIs are lighter and may provide some extra benefits like tree-shaking unneeded features.
