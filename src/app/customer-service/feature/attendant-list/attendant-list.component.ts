import { Component, Input } from '@angular/core';
import { Attendant } from '../../domain';

@Component({
  selector: 'app-attendant-list',
  templateUrl: './attendant-list.component.html',
  styleUrls: ['./attendant-list.component.scss'],
})
export class AttendantListComponent {
  @Input() attendants!: Attendant[] | null;

  public onSelect(attendant: Attendant): void {
    console.log(attendant);

    return;
  }
}
