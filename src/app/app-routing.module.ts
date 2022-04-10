import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonToggleTemplateExampleComponent } from './components/button-toggle-template-example/button-toggle-template-example.component';
import { ButtonToggleExamplesPageComponent } from './components/button-toggle-examples-page/button-toggle-examples-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'button-toggle-examples-page', pathMatch: 'full'},
  {path: 'button-toggle-examples-page', component: ButtonToggleExamplesPageComponent},

  {path: '**', redirectTo: 'button-toggle-examples-page'}, //todo: update with start-page later
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
