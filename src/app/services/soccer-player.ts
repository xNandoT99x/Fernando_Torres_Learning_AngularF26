import { computed,effect, inject, signal } from '@angular/core';
import { Injectable } from '@angular/core';
import { SoccerPlayer as Player } from '../../shared/models/soccer-player';
import { SOCCER_PLAYER_CONFIG } from '../../shared/config/app-config';
import { TheSportsDBPlayer } from '../../shared/models/thesportsdb-player';

@Injectable()
export class SoccerPlayer {
  private config = inject(SOCCER_PLAYER_CONFIG);
  readonly apiBaseUrl = this.config.apiBaseUrl;

  private mapPlayer(player: TheSportsDBPlayer): Player  | null {
    let position: Player['position'];

    const apiPosition = player.strPosition?.toLowerCase() ?? '';

    if (apiPosition.includes('goalkeeper')) {
      position = 'Goalkeeper';
    } else if (apiPosition.includes('back') || apiPosition.includes('defender')) {
      position = 'Defender';
    } else if (apiPosition.includes('midfield')) {
      position = 'Midfielder';
    } else if (
      apiPosition.includes('forward') ||
      apiPosition.includes('winger') ||
      apiPosition.includes('striker')
    ) {
      position = 'Forward';
    } else {
      return null;
    }

    const today = new Date();
    const birthDate = player.dateBorn ? new Date(player.dateBorn) : null;

    let age = 0;

    if (birthDate && !isNaN(birthDate.getTime())) {
      age = today.getFullYear() - birthDate.getFullYear();

      if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
          today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
    }

    if (!birthDate || isNaN(birthDate.getTime())) {
      return null;
    }

    return {
      id: Number(player.idPlayer),
      name: player.strPlayer ?? 'Unknown',
      age: age,
      nationality: player.strNationality ?? 'Unknown',
      club: player.strTeam ?? 'Unknown',
      position: position,
    };
  }
  private players = signal<Player[]>([
    {
      id: 1,
      name: 'Leo Messi',
      age: 39,
      nationality: 'Argentina',
      club: 'Inter Miami',
      position: 'Forward',
      preferredFoot: false,
    },
    {
      id: 2,
      name: 'Cristiano Ronaldo',
      age: 41,
      nationality: 'Portuguese',
      club: 'Al Nassr',
      position: 'Forward',
      preferredFoot: false,
    },
    {
      id: 3,
      name: 'Lamine Yamal',
      age: 19,
      nationality: 'Spain',
      club: 'Barcelona',
      position: 'Forward',
    },
    {
      id: 4,
      name: 'Kylian Mbappé',
      age: 27,
      nationality: 'France',
      club: 'Real Madrid',
      position: 'Forward',
      preferredFoot: true,
    },
    {
      id: 5,
      name: 'Kevin De Bruyne',
      age: 35,
      nationality: 'Belgium',
      club: 'Napoli',
      position: 'Midfielder',
      preferredFoot: false,
    },
    {
      id: 6,
      name: 'Joan Garcia',
      age: 25,
      nationality: 'Spain',
      club: 'Barcelona',
      position: 'Goalkeeper',
      preferredFoot: true,
    },
    {
      id: 7,
      name: 'Pau Cubarsi',
      age: 19,
      nationality: 'Spain',
      club: 'Barcelona',
      position: 'Defender',
      preferredFoot: false,
    },
    {
      id: 8,
      name: 'Raphinha',
      age: 29,
      nationality: 'Brazil',
      club: 'Barcelona',
      position: 'Forward',
      preferredFoot: false,
    },
    {
      id: 9,
      name: 'Anthony Gordon',
      age: 25,
      nationality: 'England',
      club: 'Barcelona',
      position: 'Forward',
      preferredFoot: true,
    },
    {
      id: 10,
      name: 'Karim Adeyemi',
      age: 24,
      nationality: 'Germany',
      club: 'Barcelona',
      position: 'Forward',
      preferredFoot: true,
    },
  ]);

  readonly playersList = this.players.asReadonly();
  readonly barcelonaPlayers = computed(() =>
    this.players().filter((player) => player.club === 'Barcelona'),
  );
  readonly barcelonaForwards = computed(() =>
    this.barcelonaPlayers().filter((player) => player.position === 'Forward'),
  );

  addPlayer(newPlayer: Player): void {
    this.players.update((list) => [...list, newPlayer]);
  }
  updatePlayer(updatedPlayer: Player): void {
    this.players.update((list) =>
      list.map((player) => (player.id === updatedPlayer.id ? updatedPlayer : player)),
    );
  }

  removePlayer(id: number): void {
    this.players.update((list) => list.filter((player) => player.id !== id));
  }
  constructor() {
    effect(() => {
      console.log('Number of players:', this.players().length);
    });
  }
}
