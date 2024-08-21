import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

bootstrapApplication(AppComponent, {
  providers: [
    BrowserAnimationsModule,
    MatSidenavModule, 
     // Provide BrowserAnimationsModule
     MatToolbarModule,
    provideRouter(routes)  // Provide router if needed
    // Add other providers as needed
  ]
})
.catch(err => console.error(err));