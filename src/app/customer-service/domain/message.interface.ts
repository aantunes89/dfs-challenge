import { MessageEnum } from '../utils';

export interface Message {
  content: string;
  type: MessageEnum;
  data?: string | string[];
}
