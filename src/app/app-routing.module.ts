import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
// import { ButtonToggleTemplateExampleComponent } from './components/button-toggle-template-example/button-toggle-template-example.component';
// import { ButtonToggleExamplesPageComponent } from './components/button-toggle-examples-page/button-toggle-examples-page.component';
// import { ExamplesPageComponent } from './pages/examples-page/examples-page.component';
// import { ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent } from './examples/button-toggle-dynamic-template-implementation-example-with-data-from-service/button-toggle-dynamic-template-implementation-example-with-data-from-service.component';
// import { ButtonToggleDynamicTemplateImplementationExampleComponent } from './examples/button-toggle-dynamic-template-implementation-example/button-toggle-dynamic-template-implementation-example.component';

import { getExamplesRoutes } from './services/navigation.service';


const routes: Routes = [
  // examplesRouteLinks.defaultRoute,
  // ...examplesRouteLinks.routes,
  ...getExamplesRoutes(),
  /** below are the routes as 'normal'
   * before using configuration from 'exampleRouteLinks' in navigation service
   * keeping for reference */
  /*
  { path: '', redirectTo: 'examples', pathMatch: 'full' },

  { path: 'examples', component: ExamplesPageComponent, children: [
      {
        path: '', redirectTo: 'button-toggle',
        pathMatch: 'full'
      },
      {
        path: 'button-toggle',
        component: ButtonToggleExamplesPageComponent
      },
      {
        path: 'button-toggle-template',
        component: ButtonToggleTemplateExampleComponent
      },
      {
        path: 'button-toggle-dynamic',
        component: ButtonToggleDynamicTemplateImplementationExampleComponent
      },
      {
        path: 'button-toggle-dynamic-with-service',
        component: ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent
      },
      { path: '**', redirectTo: 'button-toggle' },
    ]
  },
  */
  //todo: update with start-page later
  { path: '**', redirectTo: 'examples' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
