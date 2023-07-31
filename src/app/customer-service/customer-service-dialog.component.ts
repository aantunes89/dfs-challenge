import { Component, Inject, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { DialogMode, MessageEnum } from './utils/enums';
import { CustomerServiceActions, CustomerServiceSelectors } from './data-access/state';
import { Attendant, Message } from './domain';
import { Observable, map, tap } from 'rxjs';
import { DataAccessService } from './data-access/services/data-access.service';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service-dialog.component.html',
  styleUrls: ['./customer-service-dialog.component.scss'],
})
export class CustomerServiceDialogComponent implements OnDestroy {
  public attendants$!: Observable<Attendant[] | null>;
  public selectedAttendant$!: Observable<Attendant | null>;
  public messages$!: Observable<Message[] | null>;

  public readonly dialogMode = DialogMode;
  public readonly type = MessageEnum;

  constructor(
    private readonly store: Store,
    private readonly dataAccessService: DataAccessService
  ) {}

  ngOnInit() {
    this.store.dispatch(CustomerServiceActions.getAttendants());

    this.attendants$ = this.store.select(CustomerServiceSelectors.getAttendants);

    this.selectedAttendant$ = this.store
      .select(CustomerServiceSelectors.getSelectedAttendant)
      .pipe(tap((att) => !!att && this.store.dispatch(CustomerServiceActions.getTopics())));

    this.messages$ = this.store.select(CustomerServiceSelectors.getMessages).pipe(tap(console.log));
  }

  ngOnDestroy(): void {
    this.dataAccessService.resetAppendableString();
  }
}
