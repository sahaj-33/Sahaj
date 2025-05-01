import { createAction, props } from '@ngrx/store';
import { DashboardState } from '../../models/dashboard-state.interface';

export const selectPeriod = createAction('[Dashboard] Select Period', props<{ period: string }>());
export const loadDashboardData = createAction('[Dashboard] Load Data');
export const loadDashboardDataSuccess = createAction('[Dashboard] Load Data Success', props<{ data: DashboardState }>());
export const loadDashboardDataFailure = createAction('[Dashboard] Load Data Failure', props<{ error: any }>());