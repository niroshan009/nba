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
  getPlayerById(id: number): IPlayer {
    let player: IPlayer = {
      id: 237,
      first_name: 'LeBron',
      last_name: 'James',
      position: 'F',
      height_feet: 6,
      height_inches: 8,
      weight_pounds: 250,
      team: {
        id: 14,
        abbreviation: 'LAL',
        city: 'Los Angeles',
        conference: 'West',
        division: 'Pacific',
        full_name: 'Los Angeles Lakers',
        name: 'Lakers',
      },
    };

    return player;
  }
}
