import { Routes } from '@angular/router';
import { SoccerPlayerListComponent } from './soccer-player-list/soccer-player-list';
import { editPlayerGuard } from './guards/edit-player-guard';
export const routes: Routes = [
  { path: '', redirectTo: 'soccer-players', pathMatch: 'full' },
  { path: 'soccer-players', component: SoccerPlayerListComponent },
  { path: 'soccer-players/add', loadComponent: () =>
      import('./soccer-player-form/soccer-player-form')
        .then(m => m.SoccerPlayerForm)
  },
  { path: 'soccer-players/edit/:id', loadComponent: ()=>
      import ('./soccer-player-form/soccer-player-form')
        .then(m => m.SoccerPlayerForm),
    canActivate: [editPlayerGuard]
  },
  {
    path: 'soccer-players/:id',
    loadComponent: () =>
      import('./soccer-player-detail/soccer-player-detail').then(m => m.SoccerPlayerDetail)
  },
];
