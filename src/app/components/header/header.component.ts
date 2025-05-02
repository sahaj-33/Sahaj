import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPeriod } from '../../store/actions/dashboard.actions';
import { AppState, selectSelectedPeriod } from '../../store/selectors/dashboard.selectors';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  periods = ['30 days', '60 days', '90 days'];
  selectedPeriod$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.selectedPeriod$ = this.store.select(selectSelectedPeriod);
  }

  onPeriodSelect(period: string) {
    this.store.dispatch(selectPeriod({ period }));
  }

  print() {
    // Placeholder for print functionality (not implemented as per requirements)
  }
}