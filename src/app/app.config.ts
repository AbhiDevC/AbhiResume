import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, withRouterConfig } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav'; // Angular Material modules

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(
    routes, withRouterConfig({ onSameUrlNavigation: 'reload' }) // Add this configuration
  ), provideAnimationsAsync()]
};

