import { Injectable, Query } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wine } from '../models/wine';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


@Injectable()
export class WineService {

  public wines: Wine[];
  constructor(private httpClient: HttpClient) {}

  getWines(query: string): Observable<Wine[]> {
    return this.httpClient.get<Wine[]>('/api/wine', {
      params: {q: query}
    });
  }

  changeQuantity(id: number, changeInQuantity: number): Observable<any> {
    return this.httpClient.patch('/api/wine/' + id, {changeInQuantity: changeInQuantity});
  }

  create(wine: Wine): Observable<Wine> {
    return this.httpClient.post<Wine>('/api/wine', wine);
  }

}

