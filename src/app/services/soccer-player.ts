import { computed,effect, signal } from '@angular/core';
import { Service } from '@angular/core';
import { SoccerPlayer as Player } from '../../shared/models/soccer-player';

@Service()
export class SoccerPlayer {

  private players = signal<Player[]>([
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
    {
      id: 7,
      name: 'Pau Cubarsi',
      age: 19,
      nationality: 'Spain',
      club: 'Barcelona',
      position: 'Defender',
      preferredFoot: false,
    },
    {
    id: 8,
  name: 'Raphinha',
  age: 29,
  nationality: 'Brazil',
  club: 'Barcelona',
  position: 'Forward',
  preferredFoot: false,
},
{
  id: 9,
    name: 'Anthony Gordon',
  age: 25,
  nationality: 'England',
  club: 'Barcelona',
  position: 'Forward',
  preferredFoot: true,
},
{
  id: 10,
    name: 'Karim Adeyemi',
  age: 24,
  nationality: 'Germany',
  club: 'Barcelona',
  position: 'Forward',
  preferredFoot: true,
},
  ]);

  readonly playersList = this.players.asReadonly();
  readonly barcelonaPlayers = computed(() =>
  this.players().filter(player => player.club === 'Barcelona')
  );
  readonly barcelonaForwards = computed(() =>
    this.barcelonaPlayers().filter(player => player.position === 'Forward')
  );

  addPlayer(newPlayer: Player): void {
    this.players.update((list) => [...list, newPlayer]);
  }
  removePlayer(id:number): void {
    this.players.update(list => list.filter(player => player.id !== id));

  }
  constructor(){
    effect(() => {
      console.log("Number of players:", this.players().length);

    });

  }

}
