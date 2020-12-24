import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Serie } from '../series/serie';
import { SeriesService } from '../shared/services/series.service';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.css']
})
export class SerieEditComponent implements OnInit {
  @Input() serie: Serie = {} as Serie;

  serieItem: Observable<Serie>;

  constructor(private seriesService: SeriesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.serieItem = this.seriesService.getSerie(this.activatedRoute.snapshot.params.id);
    this.serieItem.subscribe(res => {
      this.serie = res;
      console.log(res);

    });
  }

  putSerie(serie: Serie) {
    this.seriesService.putSerie(this.activatedRoute.snapshot.params.id, serie).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/serie-detail/" + encodeURIComponent(this.activatedRoute.snapshot.params.id));
    });
  }

  getSerie(id: number) {
    this.seriesService.getSerie(id).subscribe(res => {
      console.log(res);
    });
  }
}
