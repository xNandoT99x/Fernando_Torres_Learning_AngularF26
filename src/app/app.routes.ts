import { Routes } from '@angular/router';
import { SoccerPlayerListComponent } from './soccer-player-list/soccer-player-list';
import { SoccerPlayerDetail } from './soccer-player-detail/soccer-player-detail';
import { SoccerPlayerForm } from './soccer-player-form/soccer-player-form'

export const routes: Routes = [
  {path: '', redirectTo: 'soccer-players',pathMatch:'full'},
  {path: 'soccer-players', component: SoccerPlayerListComponent },
  {path: 'soccer-players/add', component: SoccerPlayerForm },
  {path: 'soccer-players/edit/:id', component: SoccerPlayerForm},
  {path: 'soccer-players/:id', component: SoccerPlayerDetail }
];
