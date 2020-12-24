import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from '../serie';
import { SeriesService } from '../../shared/services/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Observable<Serie[]>;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.series = this.seriesService.getSeries();
  }

}
