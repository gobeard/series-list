import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { SeriesListItemComponent } from './series/series-list/series-list-item/series-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { SerieDetailComponent } from './serie-detail/serie-detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeriesListComponent,
    SeriesListItemComponent,
    SerieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
