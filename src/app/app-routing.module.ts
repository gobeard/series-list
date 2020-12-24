import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerieCreateComponent } from './serie-create/serie-create.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  { path: 'series', component: SeriesComponent },
  { path: 'serie-detail/:id', component: SerieDetailComponent },
  { path: 'serie-create', component: SerieCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
