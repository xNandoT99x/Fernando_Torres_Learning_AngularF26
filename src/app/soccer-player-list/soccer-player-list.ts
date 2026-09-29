import { Component } from '@angular/core';
import{ SoccerPlayerList, SoccerPlayer} from '../../shared/models/soccer-player';

@Component({
  imports: [],
  selector: 'app-soccer-player-list',
  styleUrl: './soccer-player-list.css',
  templateUrl: './soccer-player-list.html',
})
export class SoccerPlayerListComponent {

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
