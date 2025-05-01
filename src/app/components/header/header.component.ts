import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPeriod } from '../../store/actions/dashboard.actions';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  periods = ['30 days', '60 days', '90 days'];

  constructor(private store: Store) {}

  onPeriodSelect(period: string) {
    this.store.dispatch(selectPeriod({ period }));
  }
}