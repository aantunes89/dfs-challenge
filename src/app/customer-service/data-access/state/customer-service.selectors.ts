import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CustomerServiceState } from './customer-service.reducer';

export const customerServiceFeatureSelector =
  createFeatureSelector<CustomerServiceState>('customer-service');

export const getAttendants = createSelector(
  customerServiceFeatureSelector,
  ({ attendants }) => attendants
);
