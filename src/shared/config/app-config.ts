import { InjectionToken } from '@angular/core';



export interface SoccerPlayerConfig {
  apiBaseUrl: string;
  defaultCategory: string;
}

export const SOCCER_PLAYER_CONFIG = new InjectionToken<SoccerPlayerConfig>('soccer-player.config');



