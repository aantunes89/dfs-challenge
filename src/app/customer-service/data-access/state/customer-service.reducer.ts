import { Action, createReducer, on } from '@ngrx/store';
import { Topic } from '../../domain/topic.interface';
import * as CustomerServiceActions from './customer-service.actions';
import { Attendant } from '../../domain';

export interface CustomerServiceState {
  attendants: Attendant[] | null;
  selectedAttendant: Attendant | null;
  history: History | null;
  isRoot: boolean;
  isLoading: boolean;
  topics: Topic[] | null;
}

type State = CustomerServiceState;

const initialState: State = {
  attendants: null,
  selectedAttendant: null,
  history: null,
  isRoot: false,
  isLoading: false,
  topics: null,
};

const customerServiceReducer = createReducer(
  initialState,
  on(CustomerServiceActions.getAttendants, (state: State) => ({
    ...state,
    isLoading: true,
  })),
  on(
    CustomerServiceActions.getAttendantsSuccess,
    (state: State, { attendants }) => ({
      ...state,
      isLoading: false,
      attendants,
    })
  )
);

export function reducer(state: State, action: Action) {
  return customerServiceReducer(state, action);
}
