import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { dashboardReducer } from './app/store/reducers/dashboard.reducer';
import { DashboardEffects } from './app/store/effects/dashboard.effects';

console.log('Starting application bootstrap...');

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({ dashboard: dashboardReducer }),
    provideEffects([DashboardEffects])
  ]
}).catch(err => console.error(err));