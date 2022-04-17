# AngularExamplesAndSnippets

A Lab project containing snippets and examples 

> Note: this project uses material design [Angular Material](https://material.angular.io/)

**Live demo** https://jimisweden.github.io/AngularExamplesAndSnippets
_note: it is published with sourceMaps in case you want to debug the typescript files_
## Log with commands and stuff being done
> might be out of synch, but will try to keep notes on things being done.
See [README_Log](README_Log.md)

## links to useful references
[material icons docs](https://material.angular.io/components/icon/overview)
[material icons list/search](https://fonts.google.com/icons?selected=Material+Icons)

[TypeScript Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

## GitHub Pages for hosting with gh-pages for deploy
https://github.com/tschaub/gh-pages 
is used to publish/deploy the app in this repository to github-pages
[getting-started-with-github-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/)

[angular deployment guide for github pages](https://angular.io/guide/deployment#deploy-to-github-pages)
[ 🙈  I should have found this first 😁 angular-cli-ghpages -- havent used it yet](https://github.com/angular-schule/angular-cli-ghpages)
### Steps: 
#### First you need to create a clean branch for your repository github-pages

1. create an orphan branch for your github pages
> it is wise to take a local copy (second checkout of the master branch) before doing this to avoid mistakes and feel safe.
```ps
# create new orphan branch
git checkout --orphan gh-pages
# preview files to be deleted. Note that also the .gitignore file will be deleted, you should keep it (copy or exclude from remove)
git rm -rf --dry-run .

$ git rm -rf --dry-run .
# actually delete the files
$ git rm -rf .

```
1. add back, or create a new, .gitignore file in root folder (or you will push a lot of not wanted files)
1. push the branch to github.

1. in your github repository settings, change the branch to use for github pages from 'master' to 'gh-pages'
> se images and 'how to' in the docs [read the docs - publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
>
> this is my url for the settings https://github.com/JimiSweden/AngularExamplesAndSnippets/settings/pages
> after saving your changes you will see this following in a blue frame
> 'Your site is ready to be published at https://jimisweden.github.io/AngularExamplesAndSnippets/'
> the information is a little confusing as I was looking for some way to trigger the publish but it will be automatic.
> it might take up to 10 minutes before publishing is done but is normally quicker.
> when it is published you will see the following in a green fram
>  Your site is published at https://jimisweden.github.io/AngularExamplesAndSnippets/


#### now configure and run the deploy script as configured below.

> Note: if I tried to run the gh-pages standalone without running it from the deploy-script and got the following error
> it didn't work even if gh-pages was installed globally.
> not sure why and didn't bother to find out why.
> ```ps
> npm run gh-pages -d dist/angular-examples-and-snippets
> npm info it worked if it ends with ok
> npm info using npm@6.14.15
> npm info using node@v14.18.1
> npm ERR! missing script: gh-pages
> ```



install gh-pages locally (or -g if you want it globally)
```ts
npm i gh-pages -D
```

>(dist folder 'dist/angular-examples-and-snippets' is configured in angular.json> build.options)
Important: the build flag --base-href must be configured here or the github-page index will try to load files in the root folder. 
> Example:
> My page:  https://jimisweden.github.io/AngularExamplesAndSnippets/ 
>  when loading that page it was blank and in the developer-console this error shows the problem
> https://jimisweden.github.io/main.71f612950efa7fec.js net::ERR_ABORTED 404 (Not Found)
> hence I need to add 'AngularExamplesAndSnippets' to the base-href (found in index.html)
> ```ng build --output-path docs --base-href /your_project_name/```
> [angular deployment guide for github pages](https://angular.io/guide/deployment#deploy-to-github-pages)

package.json > scripts 
```json
"deploy-github": "ng build --base-href /AngularExamplesAndSnippets/ && gh-pages -d dist/angular-examples-and-snippets"
```

You can also add the baseHref in angular.json you do it like this 

> _note: deprecation waning on 'ng serve --base-href'
> https://angulardoc.com.br/cli/serve 
> --base-href is Deprecated: Use the "baseHref" option in the browser builder instead.
> it is not documented as deprecated for 'ng build', but perhaps will be?_



> in angular.json build.options (not that the options here hits all configurations, including development)
> ```json
> "build": {
>          "options": {
>            "baseHref": "/AngularExamplesAndSnippets/",
>            "outputPath": "dist/angular-examples-and-snippets",
> ```

**NOTE:** If you don't want to change the baseHref for your development and perhaps not all builds, you should add baseHref to 'configurations' on selected config, and not to 'options.
>Here I add baseHref to a new configuration called 'github-pages'
> ```json
>  "build": {
>          "builder": "@angular-devkit/build-angular:browser",
>          "options": {           
>             ...
>          },
>          "configurations": {
>              "github-pages": {
>                "baseHref": "/AngularExamplesAndSnippets/",
>                  ...
> ```
> and update the deploy script
> package.json > scripts 
> ```json
> "deploy-github": "ng build --configuration github-pages && gh-pages -d dist/angular-examples-and-snippets"
> ```


to see options visit the https://github.com/tschaub/gh-pages  
help in terminal is found via 
```ts
 npm gh-pages --help
```


## Versions
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

For compatible typescript and nodejs versions this is my goto page 
https://stackoverflow.com/questions/60248452/is-there-a-compatibility-list-for-angular-angular-cli-and-node-js

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
