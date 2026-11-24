import { Component, input, output } from '@angular/core';
import {SoccerPlayer, ContentEvent} from '../../shared/models/soccer-player';
import { RouterLink } from '@angular/router';
import { UpperCasePipe, DecimalPipe } from '@angular/common';
import { PositionLabelPipe } from '../pipes/position-label-pipe';
import { ShortNamePipe } from '../pipes/short-name-pipe';
import { Confirm } from '../directives/confirm';
import { Highlight } from '../directives/highlight';




@Component({
  imports: [RouterLink, UpperCasePipe, DecimalPipe, PositionLabelPipe, ShortNamePipe, Confirm],
  selector: 'app-soccer-player-list-item',
  hostDirectives: [
    { directive: Highlight, inputs: ['appHighlight: highlightColor'] }
  ],
  styleUrl: './soccer-player-list-item.css',
  templateUrl: './soccer-player-list-item.html',
})
export class SoccerPlayerListItem {
  player = input.required<SoccerPlayer>();
  playerEvent = output<ContentEvent>();
  toggle(): void {
    this.playerEvent.emit({
      id: this.player().id,
      action: 'opened',
    });
  }
}
