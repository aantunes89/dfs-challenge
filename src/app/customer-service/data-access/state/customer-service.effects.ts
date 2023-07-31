import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { DataAccessService } from '../services/data-access.service';
import * as CustomerServiceActions from './customer-service.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Message } from '../../domain';
import { MessageEnum } from '../../utils';
import { CustomerServiceSelectors } from '.';
import { Store } from '@ngrx/store';
import { Topic } from '../../domain/topic.interface';

@Injectable()
export class CustomerServiceEffects {
  loadAttendants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerServiceActions.getAttendants),
      switchMap(() =>
        this.dataAccessService.getAttendants().pipe(
          map((attendants) => CustomerServiceActions.getAttendantsSuccess({ attendants })),
          catchError((error) =>
            of(
              CustomerServiceActions.getAttendantsFailure({
                error,
              } as HttpErrorResponse)
            )
          )
        )
      )
    )
  );

  loadTopics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerServiceActions.getTopics),
      switchMap(() =>
        this.dataAccessService.getTopics().pipe(
          mergeMap((topics) => {
            const messages = Object.values(topics).map(
              ({ url, type }): Message => ({ content: url, type: MessageEnum[type!] })
            );
            console.log(messages);
            return [
              CustomerServiceActions.getTopicsSuccess({ topics }),
              CustomerServiceActions.updateMessages({ messages }),
            ];
          }),
          catchError((error) =>
            of(
              CustomerServiceActions.getMessagesFailure({
                error,
              } as HttpErrorResponse)
            )
          )
        )
      )
    )
  );

  addMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerServiceActions.addMessage),
      mergeMap(({ message }) => [
        CustomerServiceActions.addMessageSuccess({
          message: { ...message, type: MessageEnum.ANSWER },
        }),
        CustomerServiceActions.getSubjects({ subject: message.content }),
      ])
    )
  );

  loadSubjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerServiceActions.getSubjects),
      switchMap(({ subject }) =>
        this.dataAccessService.getNextTreeLevel(subject).pipe(
          map(({ data }: any) => {
            const newMessages = data.map(({ name, type }: any) => ({ content: name, type }));
            return CustomerServiceActions.getSubjectsSuccess({ messages: newMessages });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataAccessService: DataAccessService,
    private readonly store: Store
  ) {}
}
