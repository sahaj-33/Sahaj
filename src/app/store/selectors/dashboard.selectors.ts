import { createSelector } from '@ngrx/store';
import { DashboardState } from '../../models/dashboard-state.interface';

export interface AppState {
  dashboard: DashboardState;
}

export const selectDashboardState = (state: { dashboard: DashboardState }) => state.dashboard;

export const selectTimeInRangeData = createSelector(selectDashboardState, (state) => state.timeInRangeData);
export const selectGmiData = createSelector(selectDashboardState, (state) => state.gmiData);
export const selectActivePatients = createSelector(selectDashboardState, (state) => state.activePatients);
export const selectDateRange = createSelector(selectDashboardState, (state) => state.dateRange);
export const selectLastUpdated = createSelector(selectDashboardState, (state) => state.lastUpdated);