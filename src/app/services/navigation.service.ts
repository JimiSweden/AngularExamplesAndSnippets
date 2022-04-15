import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ButtonToggleExamplesPageComponent } from '../pages/examples-page/button-toggle-examples-page/button-toggle-examples-page.component';
import { ButtonToggleTemplateExampleComponent } from '../components/button-toggle-template-example/button-toggle-template-example.component';
import { ILinkObjects } from '../components/models/models';
import { ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent } from '../examples/button-toggle-dynamic-template-implementation-example-with-data-from-service/button-toggle-dynamic-template-implementation-example-with-data-from-service.component';
import { ButtonToggleDynamicTemplateImplementationExampleComponent } from '../examples/button-toggle-dynamic-template-implementation-example/button-toggle-dynamic-template-implementation-example.component';
import { ExamplesPageComponent } from '../pages/examples-page/examples-page.component';


interface NamedRoute extends Route {
  name?: string;
  //overrides the Route.children of type Route.
  children?: Array<NamedRoute>
}
interface NavigationRouteLinks {
  linksPath: string;
  defaultRoute: Route,
  routes: Array<NamedRoute>
}

/** routes here has an extended 'name' property to be able to use the routes when generating menu-links  */
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
        {
          name: 'button toggle template',
          path: 'button-toggle-template',
          component: ButtonToggleTemplateExampleComponent
        },
        {
          name: 'button toggle dynamic',
          path: 'button-toggle-dynamic',
          component: ButtonToggleDynamicTemplateImplementationExampleComponent
        },
        {
          name: 'button toggle dynamic with service',
          path: 'button-toggle-dynamic-with-service',
          component: ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent
        },
        {
          name: '', //must be empty to not be added to links in getLinks
          path: '**', redirectTo: 'button-toggle-all'
        },
      ]
    }
  ]
}

/** all routes configured for examples*/
export function getExamplesRoutes(): Array<Route> {

  return [examplesNavigationRouteLinks.defaultRoute,
  ...getRoutesFromNamedRoutes(examplesNavigationRouteLinks.routes)]
}

/**cleaning up, removing the 'name' property to not pollute the Route object
 * perhaps not needed now, but good to not assume Router will never use a name property
 */
function getRoutesFromNamedRoutes(namedRoutes: Array<NamedRoute>): Array<Route> {
  var routes = namedRoutes.map(r => {
    let tmpR = cloneObjectWithoutGivenPropertyName(r, 'name') as Route;
    if (r.children) {
      tmpR.children = getRoutesFromNamedRoutes(r.children);
    }
    return tmpR;
  })
  return routes;
}

/**todo: move to utils.ts , import * as utils  */
function cloneObjectWithoutGivenPropertyName(obj: any, propertyName: string) {
  var entries = Object.entries(obj).filter(([key, _]) => key !== propertyName);
  return Object.fromEntries(entries)
}

//todo..
// export function  getLinkObjectsFromNamedRoutes(namedRoutes: Array<NamedRoute>): Array<ILinkObjects>{
//     var _routesFlat = namedRoutes.flat(3)
//     return _routesFlat.map(route => {
//       return {name: route.name ?? '', path: route.path ?? ''};
//     })
//   }



@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  getLinks(path: string): Array<ILinkObjects> {

    //TODO: expand on how to use this to generate a list of links.. for a module.
    /** note: This only works module-wise (but is good enough).
     * If you are having more than one module in your application, you will only get the routes
     * according to the module you are executing the commands above.
     */
    console.log('configured routes: ', this.router.config);

    if (path === examplesNavigationRouteLinks.linksPath) {

      /** extract and map routes to linkObjects,
       * since routes can have children we flatten them
       * Perhaps.. keep the structure if creating a nested navigation..
      */
      //todo: make recursive if needed..
      // let routeLinks = getLinkObjectsFromNamedRoutes(examplesRouteLinks.routes);

      let routeLinks: Array<ILinkObjects> = [];
      examplesNavigationRouteLinks.routes.forEach(route => {
        routeLinks.push({ name: route.name ?? '', path: route.path ?? '' })
        if (route.children) {
          route.children.forEach(childRoute => {
            routeLinks.push({ name: childRoute.name ?? '', path: childRoute.path ?? '' })
          })
        }
      });

      //remove not named routes - they are not to be used as links
      return routeLinks.filter(x => x.name !== '');
    }


    throw new Error(`getLinks could not find any links for path ${path} : NavigationService`);
  }
}
