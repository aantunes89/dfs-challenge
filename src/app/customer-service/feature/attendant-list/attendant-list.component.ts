import { Component, Input, OnDestroy } from '@angular/core';
import { Attendant } from '../../domain';
import { Store } from '@ngrx/store';
import { CustomerServiceActions } from '../../data-access/state';

@Component({
  selector: 'app-attendant-list',
  templateUrl: './attendant-list.component.html',
  styleUrls: ['./attendant-list.component.scss'],
})
export class AttendantListComponent {
  @Input() attendants!: Attendant[] | null;

  constructor(private readonly store: Store) {}

  public onSelect(selectedAttendant: Attendant): void {
    return this.store.dispatch(CustomerServiceActions.selectAttendant({ selectedAttendant }));
  }
}
