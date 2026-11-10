export interface TheSportsDBPlayer {
  idPlayer: string;
  strPlayer: string | null;
  strNationality: string | null;
  strTeam: string | null;
  strPosition: string | null;
  dateBorn: string | null;
  strSide: string | null;
}
export interface TheSportsDBResponse {
  player: TheSportsDBPlayer[] | null;
}
