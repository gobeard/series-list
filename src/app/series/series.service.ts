import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  getSeries() {
    return this.http.get<Serie[]>("http://localhost:5000/series");
  }

  getSerie(id: number) {
    return this.http.get<Serie>("http://localhost:5000/series/" + encodeURIComponent(id));
  }
}
