import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from './Player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  getPlayers(): IPlayer[] {
    let players: IPlayer[] = [
      {
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
      },
      {
        id: 237,
        first_name: 'Stephan',
        last_name: 'Curry',
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
      },
    ];

    return players;
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
