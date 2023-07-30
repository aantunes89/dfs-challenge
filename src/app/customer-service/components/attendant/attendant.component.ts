import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Attendant } from '../../domain';

@Component({
  selector: 'app-attendant',
  templateUrl: './attendant.component.html',
  styleUrls: ['./attendant.component.scss'],
})
export class AttendantComponent {
  @Input() attendant!: Attendant;
  @Output() onSelect = new EventEmitter<Attendant>();
}
