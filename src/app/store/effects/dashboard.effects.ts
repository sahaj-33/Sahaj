import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadDashboardDataSuccess, loadDashboardDataFailure, selectPeriod } from '../actions/dashboard.actions';
import { DataService } from '../../services/data.service';

@Injectable()
export class DashboardEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectPeriod),
      mergeMap(({ period }) =>
        this.dataService.fetchDashboardData(period).pipe(
          map(data => loadDashboardDataSuccess({ data })),
          catchError(error => of(loadDashboardDataFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {
    console.log('DataService injected:', this.dataService);
  }
}