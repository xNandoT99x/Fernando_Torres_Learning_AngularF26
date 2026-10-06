import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { SoccerPlayer } from '../services/soccer-player';
import{ ContentEvent} from '../../shared/models/soccer-player';
import { SoccerPlayerListItem } from '../soccer-player-list-item/soccer-player-list-item';
@Component({
  imports: [SoccerPlayerListItem],
  selector: 'app-soccer-player-list',
  styleUrl: './soccer-player-list.css',
  templateUrl: './soccer-player-list.html',
})
export class SoccerPlayerListComponent {
  readonly players = inject(SoccerPlayer).playersList;
  readonly barcelonaPlayers = inject(SoccerPlayer).barcelonaPlayers;

  onPlayerEvent(event: ContentEvent): void {
    console.log(event);
  }
}
