import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadDashboardDataSuccess, loadDashboardDataFailure, selectPeriod } from '../actions/dashboard.actions';
import { DataService } from '../../services/data.service';
import { DashboardState } from '../../models/dashboard-state.interface';

@Injectable()
export class DashboardEffects {
  loadData$: any;

  constructor(private actions$: Actions, private dataService: DataService) {
    this.loadData$ = createEffect(() =>
      this.actions$.pipe(
        ofType(selectPeriod),
        mergeMap(({ period }) => {
          return this.dataService.fetchDashboardData(period).pipe(
            map(data => loadDashboardDataSuccess({ data })),
            catchError(error => of(loadDashboardDataFailure({ error })))
          );
        })
      )
    );
  }
}