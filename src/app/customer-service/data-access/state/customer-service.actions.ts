import { createAction, props } from '@ngrx/store';
import { Attendant, Message } from '../../domain';
import { HttpErrorResponse } from '@angular/common/http';
import { Topic } from '../../domain/topic.interface';

export const getAttendants = createAction('GET ATTENDANTS');

export const getAttendantsSuccess = createAction(
  'GET ATTENDANTS SUCCESS',
  props<{ attendants: Attendant[] }>()
);

export const getAttendantsFailure = createAction(
  'GET ATTENDANTS FAILURE',
  props<{ error: HttpErrorResponse }>()
);

export const selectAttendant = createAction(
  'SELECT ATTENDANT',
  props<{ selectedAttendant: Attendant }>()
);

export const getTopics = createAction('GET TOPICS');

export const getTopicsSuccess = createAction('GET TOPICS SUCCESS', props<{ topics: Topic[] }>());

export const getMessagesFailure = createAction(
  'GET TOPICS FAILURE',
  props<{ error: HttpErrorResponse }>()
);

export const getMessagesSuccess = createAction('GET MESSAGES', props<{ messages: Message[] }>());

export const updateMessages = createAction('UPDATE MESSAGES', props<{ messages: Message[] }>());

export const addMessage = createAction('ADD MESSAGE', props<{ message: Message }>());

export const addMessageSuccess = createAction(
  'ADD MESSAGE SUCCSESS',
  props<{ message: Message }>()
);

export const getSubjects = createAction('GET SUBJECTS', props<{ subject: string }>());

export const getSubjectsSuccess = createAction('GET MESSAGES', props<{ messages: Message[] }>());

export const getSubjectsFailure = createAction(
  'GET TOPICS FAILURE',
  props<{ error: HttpErrorResponse }>()
);
