import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DataAccessService } from '../services/data-access.service';
import * as CustomerServiceActions from './customer-service.actions';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CustomerServiceEffects {
  loadAttendants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerServiceActions.getAttendants),
      switchMap(() =>
        this.historyService.getAttendants().pipe(
          map((attendants) =>
            CustomerServiceActions.getAttendantsSuccess({ attendants })
          ),
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

  constructor(
    private actions$: Actions,
    private historyService: DataAccessService
  ) {}
}
