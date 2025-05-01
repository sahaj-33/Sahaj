import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { selectGmiData } from '../../store/selectors/dashboard.selectors';
import { DashboardState } from '../../models/dashboard-state.interface';

@Component({
  selector: 'app-gmi-chart',
  standalone: true,
  imports: [NgChartsModule, AsyncPipe],
  templateUrl: './gmi-chart.component.html',
  styleUrls: ['./gmi-chart.component.scss']
})
export class GmiChartComponent {
  gmiData$: Observable<any>;

  pieChartOptions: ChartConfiguration['options'] = {
    plugins: { legend: { position: 'bottom' } }
  };

  constructor(private store: Store<{ dashboard: DashboardState }>) {
    this.gmiData$ = this.store.select(selectGmiData);
  }
}