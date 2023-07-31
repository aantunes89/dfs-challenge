import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageEnum } from '../../utils';
import { Message } from '../../domain';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() message!: Message;
  @Input() messageType!: MessageEnum;
  @Output() onSelect = new EventEmitter<Message>();

  type = MessageEnum;

  onSelectMessage(message: Message) {
    this.onSelect.emit(message);
  }
}
