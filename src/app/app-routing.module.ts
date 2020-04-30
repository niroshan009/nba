import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player/player-list.component';
import { PlayerDetailComponent } from './player/player-detail.component';

const routes: Routes = [
  {
    path: 'players',
    component: PlayerListComponent,
  },
  {
    path: 'player/:id',
    component: PlayerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
