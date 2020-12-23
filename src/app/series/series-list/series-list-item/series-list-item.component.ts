import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../../serie';

@Component({
  selector: 'app-series-list-item',
  templateUrl: './series-list-item.component.html',
  styleUrls: ['./series-list-item.component.css']
})
export class SeriesListItemComponent implements OnInit {

  @Input() serie:Serie;
  
  constructor() { }

  ngOnInit(): void {
  }

}
