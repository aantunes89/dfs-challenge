import { Component, Input } from '@angular/core';
import { Message } from '../../domain';
import { Store } from '@ngrx/store';
import { CustomerServiceActions } from '../../data-access/state';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent {
  @Input() messages!: Message[] | null;

  constructor(private readonly store: Store) {}

  ngOnInit() {
    console.log(this.messages);
  }

  public onSelect(message: Message) {
    this.store.dispatch(CustomerServiceActions.addMessage({ message }));
  }
}
