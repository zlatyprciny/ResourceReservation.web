import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { DaysOffice } from './daysoffice';
import { DayOffice } from './day-office';
@Injectable({
  providedIn: 'root',
})
export class DaysOfficeService {
  getDaysOffice(): Observable<DaysOffice[]> {
    return of([
      {
        id: 1,
        name: 'test 1',
        office: {
          id: 1,
          OfficeName: 'MUDr Uhlikova',
        },
        days: [
          { id: 1, dayOfWeek: 'Monday' },
          { id: 2, dayOfWeek: 'Tuesday' },
        ],
      },
      {
        id: 2,
        name: 'test 2',
        office: {
          id: 2,
          OfficeName: 'MUDr Hajcmanova',
        },
        days: [{ id: 2, dayOfWeek: 'Thursday' }],
      },
    ]);
  }
}
