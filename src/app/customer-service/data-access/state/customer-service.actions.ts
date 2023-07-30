import { createAction, props } from '@ngrx/store';
import { Attendant } from '../../domain';
import { HttpErrorResponse } from '@angular/common/http';

export const getAttendants = createAction('GET ATTENDANTS');

export const getAttendantsSuccess = createAction(
  'GET ATTENDANTS SUCCESS',
  props<{ attendants: Attendant[] }>()
);

export const getAttendantsFailure = createAction(
  'GET ATTENDANTS FAILURE',
  props<{ error: HttpErrorResponse }>()
);
