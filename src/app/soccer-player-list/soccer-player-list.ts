import { Component, computed } from '@angular/core';
import { inject } from '@angular/core';
import { SoccerPlayer } from '../services/soccer-player';
import{ ContentEvent} from '../../shared/models/soccer-player';
import { SoccerPlayerListItem } from '../soccer-player-list-item/soccer-player-list-item';
import {SlicePipe } from '@angular/common';
import { Highlight } from '../directives/highlight';
import { Saved } from '../services/saved';
import { RouterLink } from '@angular/router';

@Component({
  imports: [SoccerPlayerListItem, SlicePipe, Highlight, RouterLink],
  selector: 'app-soccer-player-list',
  styleUrl: './soccer-player-list.css',
  templateUrl: './soccer-player-list.html',
})
export class SoccerPlayerListComponent {
  readonly players = inject(SoccerPlayer).playersList;
  readonly barcelonaPlayers = inject(SoccerPlayer).barcelonaPlayers;
  readonly barcelonaForwards = inject(SoccerPlayer).barcelonaForwards;
  readonly playerService = inject(SoccerPlayer);
  readonly savedService = inject(Saved);
  readonly savedPlayers = computed(() =>
    this.players().filter((player) => this.savedService.savedIds().includes(player.id)),
  );
  readonly filteredPlayers = computed(() =>
    this.players().filter(
      (player) =>
        this.savedService.selectedPosition() === 'All' ||
        player.position === this.savedService.selectedPosition(),
    ),
  );

  onPlayerEvent(event: ContentEvent): void {
    this.playerService.removePlayer(event.id);
  }
}
