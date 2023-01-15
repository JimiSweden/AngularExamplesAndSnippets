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
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

//replaces native date with moment - to be able to use locale and custom formats
import * as _moment from 'moment';
import 'moment/locale/sv';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { ButtonToggleTemplateExampleComponent } from './components/button-toggle-template-example/button-toggle-template-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonToggleDynamicTemplateComponent } from './components/button-toggle-dynamic-template/button-toggle-dynamic-template.component';
import { ButtonToggleExamplesPageComponent } from './pages/examples-page/button-toggle-examples-page/button-toggle-examples-page.component';
import { ButtonToggleDynamicTemplateImplementationExampleComponent } from './examples/button-toggle-dynamic-template-implementation-example/button-toggle-dynamic-template-implementation-example.component';
import { ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent } from './examples/button-toggle-dynamic-template-implementation-example-with-data-from-service/button-toggle-dynamic-template-implementation-example-with-data-from-service.component';
import { SideNavMatNavListComponent } from './components/navigation/side-nav-mat-nav-list/side-nav-mat-nav-list.component';
import { ExamplesPageComponent } from './pages/examples-page/examples-page.component';
import { TableWithCustomFilteringComponent } from './components/table/table-with-custom-filtering/table-with-custom-filtering.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShortenPipe } from './shared/shorten.pipe';
import { MatSelectModule } from '@angular/material/select';
import { DescriptionCardWithRowsComponent } from './components/description-card-with-rows/description-card-with-rows.component';
import { CardsWithRowsAsFluidTableComponent } from './examples/cards-with-rows-as-fluid-table/cards-with-rows-as-fluid-table.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingsPageComponent } from './bookings/bookingspage/bookingspage.component';
import { BookRoomComponent } from './bookings/book-room/book-room.component';
import { BookedRoomChangeComponent } from './bookings/booked-room-change/booked-room-change.component';
import { MyBookingsComponent } from './bookings/my-bookings/my-bookings.component';

//override default date adapter date formats
export const MY_DATE_FORMATS = {
  parse: {
      dateInput: ['YYYY-MM-DD']
  },
  display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};

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
    SideNavMatNavListComponent,
    TableWithCustomFilteringComponent,
    ShortenPipe,
    DescriptionCardWithRowsComponent,
    CardsWithRowsAsFluidTableComponent,
    BookingsPageComponent,
    BookRoomComponent,
    BookedRoomChangeComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  providers: [
    //override default date adapter date formats
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
    //override default date adapter locale
     {provide: MAT_DATE_LOCALE, useValue: 'sv-SE'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
