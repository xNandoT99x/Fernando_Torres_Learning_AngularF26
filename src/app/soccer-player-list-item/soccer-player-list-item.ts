import { Component, input, output } from '@angular/core';
import {SoccerPlayer, ContentEvent} from '../../shared/models/soccer-player';

@Component({
  imports: [],
  selector: 'app-soccer-player-list-item',
  styleUrl: './soccer-player-list-item.css',
  templateUrl: './soccer-player-list-item.html',
})
export class SoccerPlayerListItem {
  player = input.required<SoccerPlayer>();
  playerEvent = output<ContentEvent>();
  toggle():void{
    this.playerEvent.emit({
      id:this.player().id,
      action:'opened'
    });

  }
}
