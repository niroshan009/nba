import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from './Player';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private httpClient: HttpClient) {}

  getPlayers(): Observable<any> {
    let api: string = 'https://www.balldontlie.io/api/v1/players';

    return this.httpClient.get<any>(api);
    //   .pipe(tap((data) => console.log(JSON.stringify(data))));
  }
  getPlayerById(id: number): Observable<any> {
    let api: string = 'https://www.balldontlie.io/api/v1/players/' + id;
    return this.httpClient.get<any>(api);
  }
}
