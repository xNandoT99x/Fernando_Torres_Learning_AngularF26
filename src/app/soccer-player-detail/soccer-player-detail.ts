import { Component, computed, inject, input } from '@angular/core';
import { SoccerPlayer } from '../services/soccer-player';

@Component({
  imports: [],
  selector: 'app-soccer-player-detail',
  styleUrl: './soccer-player-detail.css',
  templateUrl: './soccer-player-detail.html',
})
export class SoccerPlayerDetail {
  id = input.required<string>();
  private playerService = inject(SoccerPlayer);
  player = computed(() =>
    this.playerService.playersList().find (
      player => player.id === Number(this.id())

    ));

}
