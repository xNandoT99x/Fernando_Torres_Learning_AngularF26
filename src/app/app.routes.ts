import { Routes } from '@angular/router';
import { SoccerPlayerListComponent } from './soccer-player-list/soccer-player-list';
import { SoccerPlayerDetail } from './soccer-player-detail/soccer-player-detail';

export const routes: Routes = [
  {path: '', redirectTo: 'soccer-players',pathMatch:'full'},
  {path: 'soccer-players', component: SoccerPlayerListComponent },
  {path: 'soccer-players/:id', component: SoccerPlayerDetail }
];
