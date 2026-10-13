import { computed, signal } from '@angular/core';
import { SoccerPlayer as Player } from '../../shared/models/soccer-player';
import { inject } from '@angular/core';
import {SOCCER_PLAYER_CONFIG} from '../../shared/config/app-config';

export class MockSoccerPlayer {
  private config = inject(SOCCER_PLAYER_CONFIG);
  readonly apiBaseUrl = this.config.apiBaseUrl;

  private players = signal<Player[]>([
    {
      id: 101,
      name: 'Kylian Mbappé',
      age: 27,
      nationality: 'France',
      club: 'Real Madrid',
      position: 'Forward',
      preferredFoot: false,
    },
    {
      id: 102,
      name: 'Vinícius Jr.',
      age: 26,
      nationality: 'Brazil',
      club: 'Real Madrid',
      position: 'Forward',
      preferredFoot: false,
    },
    {
      id: 103,
      name: 'Jude Bellingham',
      age: 23,
      nationality: 'England',
      club: 'Real Madrid',
      position: 'Midfielder',
      preferredFoot: true,
    },
    {
      id: 104,
      name: 'Thibaut Courtois',
      age: 34,
      nationality: 'Belgium',
      club: 'Real Madrid',
      position: 'Goalkeeper',
      preferredFoot: false,
    },
  ]);
  readonly playersList = this.players.asReadonly();
  readonly barcelonaPlayers = computed(() =>
    this.players().filter((player) => player.club === 'Barcelona Legends'),
  );
  readonly barcelonaForwards = computed(() =>
    this.barcelonaPlayers().filter((player) => player.position === 'Forward'),
  );

  addPlayer(newPlayer: Player): void {
    this.players.update((list) => [...list, newPlayer]);
  }

  removePlayer(id: number): void {
    this.players.update((list) => list.filter((player) => player.id !== id));
  }

}



