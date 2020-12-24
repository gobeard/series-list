import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Serie } from '../series/serie';
import { SeriesService } from '../shared/services/series.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  serie: Observable<Serie>;

  constructor(private seriesService: SeriesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.serie = this.seriesService.getSerie(this.activatedRoute.snapshot.params.id);
  }

  removeSerie(id: number) {
    this.seriesService.removeSerie(id).subscribe(res => {
      console.log(res);
    });
    this.router.navigateByUrl("/series");
  }
}
