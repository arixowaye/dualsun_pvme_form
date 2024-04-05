import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    ),
    importProvidersFrom(BrowserAnimationsModule)
  ]
};
