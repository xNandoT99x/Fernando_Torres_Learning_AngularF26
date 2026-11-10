import { computed,effect, inject, signal } from '@angular/core';
import { Injectable } from '@angular/core';
import { SoccerPlayer as Player } from '../../shared/models/soccer-player';
import { SOCCER_PLAYER_CONFIG } from '../../shared/config/app-config';
import { TheSportsDBPlayer, TheSportsDBResponse } from '../../shared/models/thesportsdb-player';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SoccerPlayer {
  private config = inject(SOCCER_PLAYER_CONFIG);
  private http = inject(HttpClient);
  readonly apiBaseUrl = this.config.apiBaseUrl;

  private mapPlayer(player: TheSportsDBPlayer): Player | null {
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
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
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
  private players = signal<Player[]>([]);
  readonly error = signal<string | null>(null);
readonly loading = signal<boolean>(false);

  readonly playersList = this.players.asReadonly();
  readonly barcelonaPlayers = computed(() =>
    this.players().filter((player) => player.club === 'Barcelona'),
  );
  readonly barcelonaForwards = computed(() =>
    this.barcelonaPlayers().filter((player) => player.position === 'Forward'),
  );

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<TheSportsDBResponse>(`${this.apiBaseUrl}/lookup_all_players.php`, {
        params: { id: '133739' },
      })
      .subscribe({
        next: (response) => {
          const players = (response.player ?? [])
            .map((player) => this.mapPlayer(player))
            .filter((player): player is Player => player !== null);
          this.players.set(players);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Could not load players.')
          this.loading.set(false);

        },
      });
  }
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
    this.load();
    effect(() => {
      console.log('Number of players:', this.players().length);
    });
  }
}
