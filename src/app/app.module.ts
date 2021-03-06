import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player/player-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerDetailComponent } from './player/player-detail.component';

@NgModule({
  declarations: [AppComponent, PlayerListComponent, PlayerDetailComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
