import { Component, OnInit } from '@angular/core';
import { IPlayer } from './Player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {
  pageTitle: string = 'Players';
  players: IPlayer[];
  constructor(private playerSrvice: PlayerService) {}

  ngOnInit(): void {
    this.playerSrvice.getPlayers().subscribe((data) => (this.players = data));
  }
}
