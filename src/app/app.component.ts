import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPeriod } from './store/actions/dashboard.actions';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  template: '<app-dashboard></app-dashboard>'
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(selectPeriod({ period: '30 days' }));
  }
}