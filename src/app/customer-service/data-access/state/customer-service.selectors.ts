import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CustomerServiceState } from './customer-service.reducer';

export const customerServiceFeatureSelector =
  createFeatureSelector<CustomerServiceState>('customer-service');

export const getAttendants = createSelector(
  customerServiceFeatureSelector,
  ({ attendants }) => attendants
);

export const getSelectedAttendant = createSelector(
  customerServiceFeatureSelector,
  ({ selectedAttendant }) => selectedAttendant
);

export const getTopics = createSelector(customerServiceFeatureSelector, ({ topics }) => topics);

export const getMessages = createSelector(
  customerServiceFeatureSelector,
  ({ messages }) => messages
);
