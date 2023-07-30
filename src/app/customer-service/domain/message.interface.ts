import { MessageEnum } from '../utils';

export interface Message {
  contentId: string;
  content: string;
  type: MessageEnum;
}
