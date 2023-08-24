import {
  isDevMode,
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpBackend, HttpClient, provideHttpClient } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { provideStore } from '@ngrx/store';
import { provideRouterStore } from '@ngrx/router-store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from '@app/app.routes';

export function httpLoaderFactory(handler: HttpBackend): TranslateHttpLoader {
  const httpClient = new HttpClient(handler);
  return new TranslateHttpLoader(httpClient);
}

export default {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideZoneChangeDetection({
      eventCoalescing: true,
    }),
    provideStore(),
    provideRouterStore(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpBackend],
        },
        useDefaultLang: true,
        defaultLanguage: 'en',
      })
    )
  ],
} as ApplicationConfig;
