# Log with commands and stuff being done
> might be out of sync, but will try to keep notes on things being done.
> order is bottom-up to align with git-commits 


## TODO: 
### Tracking changes in your objects, f ex in a material table with inline editing

### 
- scroll på nav-list. som i https://material.angular.io/components 

- läsa in .ts, .html, .css som markdown och presentera under varje komponent - med tabbar, liksom i material.angular.io 
  - möjligt? markdown + länka? eller generera under build? include, import, ...


## ~~create inline edit version of the previous material table~~
- ~~allow user to see original values in details row.~~ 
  - ~~allow user to reset changes~~ 
  - ~~individual cells~~ 
  - ~~the whole row~~
  - ~~everything ('reload')~~

## Done...

## add github pages for this project
https://jimisweden.github.io/AngularExamplesAndSnippets
> See [README](README.md) for "how to" add github pages with gh-pages

## add material table with custom filtering, sorting, expandable rows, extra header row
- expandable rows (an extra conditional details-row
- - displayed when clicking on a row)
- extra header row (to display filters below default headers)
- - possible to hide with slide-toggle

- filterPredicate example with
- - button with 'multiple'-states for filtering on boolean (true/false) values.
- - search field for filtering on all string values.
- - search field for filtering on single columns.
- - drop-down/select for filtering on single columns
- sorting with custom values (i.e props) 
- - sorting on objects requires overriding the sortingDataAccessor
## add navigation using mat-nav-list for examples

adding a side menu to select what example to display the side-menu here is supposed to be reusable.

using `<mat-drawer-container>` and `<mat-nav-list>`

## add A navigation service and generate menu links from Routes
 This is perhaps "overdoing it".
 Move routes configuration to navigation service.
 Extend Route with 'name' property to use the same list in app-routing.module.ts and menu (next step)


```ts 
//app-routing.module.ts now looks like this
const routes: Routes = [  
  ...getExamplesRoutes(), //exported in navigation.service.ts
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```ts
//navigation.service.ts
export const examplesNavigationRouteLinks: NavigationRouteLinks = {
  linksPath: 'examples',
  defaultRoute: { path: '', redirectTo: 'examples', pathMatch: 'full' },
  routes: [
    {
      name: '', //must be empty to not be added to links in getLinks
      path: 'examples', component: ExamplesPageComponent, children: [
        {
          name: 'button toggle (all)',
          path: 'button-toggle-all',
          component: ButtonToggleExamplesPageComponent
        },
```


## add extended example of dynamic/generic Material button-toggle-template
Using a mock service to provide the data needed to create our buttons


## add example of dynamic/generic Material button-toggle-template
with dynamically generated buttons and subscribed FormControl
lets you reuse the same look and logic 
injecting props for creating n number of buttons
> Imagine building the button-groups dynamically from your backend,
> perhaps saved from a UI building your structure

```ts
toggleGroupData :{
  formControl: FormControl;
  tooltip: string;
  name: string;
  buttons: [] {
    value: string | boolean | undefined;
    icon: string;
    css : string;
    style : string;
  }
}
```

## Refactor example of Material button-toggle-template passing in more props
passing an object into the template allows us to add additional props
such as 'tooltip' text...

## add example of Material button-toggle with ng-template and subscribed FormControl
> this template lets you reuse the same look and logic from one mat-button-toggle-group
> injecting the FormControl to be attached
[angular api documentation] (https://material.angular.io/components/button-toggle/api)

```ps
ng g c components/ButtonToggleTemplateExample
```
> a note on using subscription on FormControl 
> unsubscribing is often needed, and also here from what I have found, 
> however some unsubscribing in Angular are handled internally and I'm not sure it really is needed (but I have implemented it)

- also added a dependency  to make unsubscribing easier
Read the documentation on [until-destroy](https://github.com/ngneat/until-destroy) for more options and how to.
```ps
npm install @ngneat/until-destroy
```
- also add routing

## configure ng to not add prefix "app" on generation
by default Angular creates components with prefix 'app'
although it is good praxis to prefix your own components 
to avoid conflicts with other modules it is mostly not adding value
(if you create public shared modules you should)

angular.json
```json
"projects": {
  //...
  "prefix": "",
  //...
}
```

## add application header AppHeader (mat-toolbar)
 ```ps
 ng g c AppHeader
 ```

> remember to add modules used in app.module.ts (or the module you are usings, or a separate module used for only import and export of material modules etc.)
```ts
import { MatToolbarModule } from '@angular/material/toolbar';
```
> note that if you have your ng serve running while adding new dependencies you will not see the results of them in the browser
> f ex adding material modules like here. 


## add Angular Material Design (with default theme and global Typography styles)
```ps
ng add @angular/material

The package @angular/material@13.3.2 will be installed and executed.
Would you like to proceed? Yes
✔ Package successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes 
? Set up browser animations for Angular Material? Yes
```
