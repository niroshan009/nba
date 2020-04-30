import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IPlayer } from './Player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
})
export class PlayerDetailComponent implements OnInit {
  pageTitile: string = 'Player Overview';
  player: IPlayer;

  constructor(
    private router: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    let playerId = +this.router.snapshot.paramMap.get('id');
    this.player = this.playerService.getPlayerById(playerId);
  }
}
