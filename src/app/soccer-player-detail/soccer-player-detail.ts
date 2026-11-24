import { Component, computed, inject, input, OnInit, OnDestroy } from '@angular/core';
import { SoccerPlayer } from '../services/soccer-player';
import { Saved } from '../services/saved';


@Component({
  imports: [],
  selector: 'app-soccer-player-detail',
  styleUrl: './soccer-player-detail.css',
  templateUrl: './soccer-player-detail.html',
})
export class SoccerPlayerDetail implements OnInit, OnDestroy {
  id = input.required<string>();
  private playerService = inject(SoccerPlayer);
  readonly savedService = inject(Saved);
  private openedAt = 0;
  private playerName = '';
  player = computed(() =>
    this.playerService.playersList().find((player) => player.id === Number(this.id())),
  );

  ngOnInit(): void {
    const id = this.id();
    const player = this.playerService.playersList().find((player) => player.id === Number(id));
    this.playerName = player?.name ?? 'Unknown';
    this.openedAt = Date.now();
    console.log('[lifecycle] opened:', player?.name);
  }
  ngOnDestroy(): void {
    const seconds = Math.round((Date.now() - this.openedAt) / 1000);

    console.log(`[lifecycle] closed: ${this.playerName} after ${seconds} seconds`);
  }
}
