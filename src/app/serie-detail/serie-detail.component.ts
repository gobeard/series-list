import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Serie } from '../series/serie';
import { SeriesService } from '../series/series.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  serie: Observable<Serie>;

  constructor(private seriesService: SeriesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.serie = this.seriesService.getSerie(this.activatedRoute.snapshot.params.id);
  }


}
