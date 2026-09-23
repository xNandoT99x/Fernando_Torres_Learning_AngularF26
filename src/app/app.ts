import { Component, signal } from '@angular/core';
import { SoccerPlayerList, SoccerPlayer} from '../shared/models/soccer-player';


@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project1');
  Player: SoccerPlayerList<SoccerPlayer> = [
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
  ];
}
