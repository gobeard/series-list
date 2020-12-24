import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie } from '../../series/serie';

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

  postSerie(serie: Serie) {
    return this.http.post<Serie>("http://localhost:5000/series", serie);
  }

  removeSerie(id: number) {
    return this.http.delete("http://localhost:5000/series/" + encodeURIComponent(id));
  }

  putSerie(id: number, serie: Serie) {
    return this.http.put<Serie>("http://localhost:5000/series/" + encodeURIComponent(id), serie);
  }
}
