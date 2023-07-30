import { Component, Input } from '@angular/core';
import { MessageEnum } from '../../utils';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() message!: string;
  @Input() messageType!: MessageEnum;

  type = MessageEnum;
}
