import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DashboardState } from '../models/dashboard-state.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fetchDashboardData(period: string): Observable<DashboardState> {
    const data: DashboardState = {
      selectedPeriod: period,
      timeInRangeData: {
        labels: ['Low', 'Target', 'High'],
        datasets: [{ data: [10, 70, 20], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }]
      },
      gmiData: {
        labels: ['Good', 'Fair', 'Poor'],
        datasets: [{ data: [60, 30, 10], backgroundColor: ['#4BC0C0', '#FF9F40', '#FF6384'] }]
      },
      activePatients: 120,
      dateRange: this.calculateDateRange(period),
      lastUpdated: new Date()
    };
    console.log('data: ', data);
    return of(data).pipe(delay(1000));
  }

  private calculateDateRange(period: string): { start: Date; end: Date } {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - parseInt(period));
    return { start, end };
  }}