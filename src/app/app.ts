import { Component, signal } from '@angular/core';
import { SoccerPlayerListComponent } from './soccer-player-list/soccer-player-list';


@Component({
  imports: [SoccerPlayerListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project1');

}
