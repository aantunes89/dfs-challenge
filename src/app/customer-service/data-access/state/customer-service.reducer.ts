import { Action, createReducer, on } from '@ngrx/store';
import { Topic } from '../../domain/topic.interface';
import * as CustomerServiceActions from './customer-service.actions';
import { Attendant, Message } from '../../domain';
import { MessageEnum } from '../../utils';

export interface CustomerServiceState {
  attendants: Attendant[] | null;
  selectedAttendant: Attendant | null;
  messages: Message[] | null;
  isRoot: boolean;
  isLoading: boolean;
  topics: Topic[] | null;
}

type State = CustomerServiceState;

const initialState: State = {
  attendants: null,
  selectedAttendant: null,
  messages: null,
  isRoot: false,
  isLoading: false,
  topics: null,
};

const customerServiceReducer = createReducer(
  initialState,
  on(CustomerServiceActions.getAttendants, CustomerServiceActions.getTopics, (state: State) => ({
    ...state,
    isLoading: true,
  })),
  on(CustomerServiceActions.getAttendantsSuccess, (state: State, { attendants }) => ({
    ...state,
    isLoading: false,
    attendants,
  })),
  on(CustomerServiceActions.selectAttendant, (state: State, { selectedAttendant }) => ({
    ...state,
    isLoading: false,
    selectedAttendant,
  })),
  on(CustomerServiceActions.getTopicsSuccess, (state: State, { topics }) => ({
    ...state,
    isLoading: false,
    topics,
  })),
  on(CustomerServiceActions.updateMessages, (state: State, { messages }) => ({
    ...state,
    isLoading: false,
    messages,
  })),
  on(CustomerServiceActions.addMessageSuccess, (state: State, { message }) => {
    return {
      ...state,
      isLoading: false,
      messages: state.messages ? [...state.messages, message] : null,
    };
  }),
  on(CustomerServiceActions.getSubjectsSuccess, (state: State, { messages }) => {
    console.log(messages);
    return {
      ...state,
      isLoading: false,
      messages: state.messages ? [...state.messages, ...messages] : null,
    };
  })
);

export function reducer(state: State, action: Action) {
  return customerServiceReducer(state, action);
}
