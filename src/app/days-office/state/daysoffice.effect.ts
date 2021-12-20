import { Injectable } from '@angular/core';
/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { DaysOfficeService } from '../days-office.service';
import { DaysOfficePageActions, DaysOfficeApiActions } from './actions';

@Injectable()
export class DaysOfficeEffects {
  constructor(
    private actions$: Actions,
    private daysOfficeService: DaysOfficeService
  ) {}
  loadDaysOffice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DaysOfficePageActions.loadOffices),
      mergeMap(() =>
        this.daysOfficeService
          .getDaysOffice()
          .pipe(
            map((daysOffice) =>
              DaysOfficeApiActions.loadDaysOfficeSuccess({ daysOffice })
            )
          )
      )
    );
  });
}
