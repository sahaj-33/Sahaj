import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectActivePatients, selectDateRange, selectLastUpdated, selectSelectedPeriod } from '../../store/selectors/dashboard.selectors';
import { DashboardState } from '../../models/dashboard-state.interface';
import { HeaderComponent } from '../header/header.component';
import { TimeInRangeChartComponent } from '../time-in-range-chart/time-in-range-chart.component';
import { GmiChartComponent } from '../gmi-chart/gmi-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    HeaderComponent, 
    TimeInRangeChartComponent, 
    GmiChartComponent, 
    AsyncPipe, 
    DatePipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  activePatients$: Observable<number>;
  dateRange$: Observable<{ start: Date; end: Date }>;
  lastUpdated$: Observable<Date>;
  selectedPeriod$: Observable<string>;
  dashboardData$: Observable<any>;

  constructor(private store: Store<{ dashboard: DashboardState }>) {
    this.activePatients$ = this.store.select(selectActivePatients);
    this.dateRange$ = this.store.select(selectDateRange);
    this.lastUpdated$ = this.store.select(selectLastUpdated);
    this.selectedPeriod$ = this.store.select(selectSelectedPeriod);
    this.dashboardData$ = this.store.select(state => state.dashboard);
  }
}