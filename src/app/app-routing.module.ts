import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonToggleTemplateExampleComponent } from './components/button-toggle-template-example/button-toggle-template-example.component';

const routes: Routes = [
  {path: '', redirectTo: 'button-toggle-template-example', pathMatch: 'full'},
  {path: 'button-toggle-template-example', component: ButtonToggleTemplateExampleComponent},

  {path: '**', redirectTo: 'button-toggle-template-example'}, //todo: update with start-page later
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
