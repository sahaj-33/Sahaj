import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { selectTimeInRangeData } from '../../store/selectors/dashboard.selectors';
import { DashboardState } from '../../models/dashboard-state.interface';

@Component({
  selector: 'app-time-in-range-chart',
  standalone: true,
  imports: [NgChartsModule, AsyncPipe],
  templateUrl: './time-in-range-chart.component.html',
  styleUrls: ['./time-in-range-chart.component.scss']
})
export class TimeInRangeChartComponent {
  timeInRangeData$: Observable<any>;

  barChartOptions: ChartConfiguration['options'] = {
    scales: { y: { beginAtZero: true } }
  };

  constructor(private store: Store<{ dashboard: DashboardState }>) {
    this.timeInRangeData$ = this.store.select(selectTimeInRangeData);
  }
}