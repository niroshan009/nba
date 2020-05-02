import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from './Player';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private httpClient: HttpClient) {}

  getPlayerById(id: number): Observable<any> {
    let api: string = 'https://www.balldontlie.io/api/v1/players/' + id;
    return this.httpClient.get<any>(api);
  }

  getPlayers(): Observable<IPlayer[]> {
    let api: string = 'https://www.balldontlie.io/api/v1/players';
    let players: IPlayer[];

    return this.httpClient
      .get<any>(api)
      .pipe(map((data) => (players = data.data)));
    //   .pipe(tap((data) => console.log(JSON.stringify(data))));
  }
}
