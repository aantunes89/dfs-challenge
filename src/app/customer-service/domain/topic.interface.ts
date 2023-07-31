import { MessageEnum } from '../utils';

export interface Topic {
  url: string;
  type?: MessageEnum;
  data: {
    name: string;
    type: MessageEnum;
    data: string[];
  };
}
