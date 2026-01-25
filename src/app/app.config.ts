//import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
//import { provideRouter } from '@angular/router';

//import { routes } from './app.routes';

//export const appConfig: ApplicationConfig = {
//  providers: [
//    provideBrowserGlobalErrorListeners(),
//    provideZoneChangeDetection({ eventCoalescing: true }),
//    provideRouter(routes)
//  ]
//};
// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';  // <- add

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]   // <- add
};




