import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { SeriesListItemComponent } from './series/series-list/series-list-item/series-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { FormsModule } from '@angular/forms';
import { SerieCreateComponent } from './serie-create/serie-create.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SerieEditComponent } from './serie-edit/serie-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeriesListComponent,
    SeriesListItemComponent,
    SerieDetailComponent,
    SerieCreateComponent,
    SerieEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
