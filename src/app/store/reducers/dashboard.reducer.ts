import { createReducer, on } from '@ngrx/store';
import { DashboardState } from '../../models/dashboard-state.interface';
import { loadDashboardDataSuccess, selectPeriod } from '../actions/dashboard.actions';

export const initialState: DashboardState = {
  selectedPeriod: '30 days',
  timeInRangeData: null,
  gmiData: null,
  activePatients: 0,
  dateRange: { start: new Date(), end: new Date() },
  lastUpdated: new Date()
};

export const dashboardReducer = createReducer(
  initialState,
  on(selectPeriod, (state, { period }) => ({ ...state, selectedPeriod: period })),
  on(loadDashboardDataSuccess, (state, { data }) => ({ ...state, ...data }))
);