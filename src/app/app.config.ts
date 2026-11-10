import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { SOCCER_PLAYER_CONFIG} from '../shared/config/app-config';
import { SoccerPlayer} from './services/soccer-player';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // The order does not affect our app because the loading interceptor
    // uses finalize() and the error interceptor rethrows the error.
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor])),
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
      useClass: SoccerPlayer,
    },
  ],
};
