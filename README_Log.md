# Log with commands and stuff being done
> might be out of synch, but will try to keep notes on things being done.
> order is bottom-up to align with git-commits 


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
