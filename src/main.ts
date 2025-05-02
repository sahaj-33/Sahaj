import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { dashboardReducer } from './app/store/reducers/dashboard.reducer';
import { DashboardEffects } from './app/store/effects/dashboard.effects';
import { importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({ dashboard: dashboardReducer }),
    provideEffects([DashboardEffects]),
    importProvidersFrom(
      MatButtonModule,
      MatCardModule,
      MatIconModule,
      MatTabsModule,
      MatTooltipModule
    )
  ]
}).catch(err => console.error(err));