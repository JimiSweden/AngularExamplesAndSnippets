import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './app-header/app-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav'

import { ButtonToggleTemplateExampleComponent } from './components/button-toggle-template-example/button-toggle-template-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonToggleDynamicTemplateComponent } from './components/button-toggle-dynamic-template/button-toggle-dynamic-template.component';
import { ButtonToggleExamplesPageComponent } from './pages/examples-page/button-toggle-examples-page/button-toggle-examples-page.component';
import { ButtonToggleDynamicTemplateImplementationExampleComponent } from './examples/button-toggle-dynamic-template-implementation-example/button-toggle-dynamic-template-implementation-example.component';
import { ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent } from './examples/button-toggle-dynamic-template-implementation-example-with-data-from-service/button-toggle-dynamic-template-implementation-example-with-data-from-service.component';
import { SideNavMatNavListComponent } from './components/navigation/side-nav-mat-nav-list/side-nav-mat-nav-list.component';
import { ExamplesPageComponent } from './pages/examples-page/examples-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonToggleTemplateExampleComponent,
    ButtonToggleDynamicTemplateComponent,
    ButtonToggleExamplesPageComponent,
    ButtonToggleDynamicTemplateImplementationExampleComponent,
    ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent,
    ExamplesPageComponent,
    SideNavMatNavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
