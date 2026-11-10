import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { SOCCER_PLAYER_CONFIG} from '../shared/config/app-config';
import { SoccerPlayer} from './services/soccer-player';
import { MockSoccerPlayer} from './services/mock-soccer-player';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: SOCCER_PLAYER_CONFIG,
      useValue: {
        apiBaseUrl: 'https://www.thesportsdb.com/api/v1/json/123',
        defaultCategory: 'all',
      },
    },
    {
      provide: SoccerPlayer,
      useClass: MockSoccerPlayer,
    },
  ],
};
