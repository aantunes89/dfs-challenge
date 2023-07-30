import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { MessageEnum } from './utils/enums';
import {
  CustomerServiceActions,
  CustomerServiceSelectors,
} from './data-access/state';
import { Attendant } from './domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service-dialog.component.html',
  styleUrls: ['./customer-service-dialog.component.scss'],
})
export class CustomerServiceDialogComponent {
  readonly attendants$!: Observable<Attendant[] | null>;

  constructor(
    private readonly store: Store,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.attendants$ = this.store.select(
      CustomerServiceSelectors.getAttendants
    );
  }

  type = MessageEnum;

  ngOnInit() {
    this.store.dispatch(CustomerServiceActions.getAttendants());
  }
}
