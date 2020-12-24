import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from '../series/serie';
import { SeriesService } from '../shared/services/series.service';

@Component({
  selector: 'app-serie-create',
  templateUrl: './serie-create.component.html',
  styleUrls: ['./serie-create.component.css']
})
export class SerieCreateComponent implements OnInit {

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
  }

  createSerie(serie: Serie) {
    this.seriesService.postSerie(serie).subscribe(res => {
      console.log(res);

    })
  }
}
