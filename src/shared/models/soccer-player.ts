export interface SoccerPlayer {
  id: number;
  name: string;
  age: number;
  nationality: string;
  club: string;
  position: 'Forward' | 'Midfielder' | 'Defender' | 'Goalkeeper';
  preferredFoot?: boolean;
}

export type SoccerPlayerList<T> = T[];

export interface ContentEvent {
  id: number;
  action: 'opened' | 'favourited';
}



