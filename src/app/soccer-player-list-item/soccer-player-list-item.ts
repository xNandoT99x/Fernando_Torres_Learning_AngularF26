import { Component, input } from '@angular/core';
import {SoccerPlayer} from '../../shared/models/soccer-player';

@Component({
  imports: [],
  selector: 'app-soccer-player-list-item',
  styleUrl: './soccer-player-list-item.css',
  templateUrl: './soccer-player-list-item.html',
})
export class SoccerPlayerListItem {
  player = input.required<SoccerPlayer>();

}
