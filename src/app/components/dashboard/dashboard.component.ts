import { Component } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectActivePatients, selectDateRange, selectLastUpdated } from '../../store/selectors/dashboard.selectors';
import { DashboardState } from '../../models/dashboard-state.interface';
import { HeaderComponent } from '../header/header.component';
import { TimeInRangeChartComponent } from '../time-in-range-chart/time-in-range-chart.component';
import { GmiChartComponent } from '../gmi-chart/gmi-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, TimeInRangeChartComponent, GmiChartComponent, AsyncPipe, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  activePatients$: Observable<number>;
  dateRange$: Observable<{ start: Date; end: Date }>;
  lastUpdated$: Observable<Date>;

  constructor(private store: Store<{ dashboard: DashboardState }>) {
    this.activePatients$ = this.store.select(selectActivePatients);
    this.dateRange$ = this.store.select(selectDateRange);
    this.lastUpdated$ = this.store.select(selectLastUpdated);
  }
}