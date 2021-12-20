import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { DaysOffice } from './daysoffice';
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
          OfficeName: 'MUdr Uhlikova',
        },
      },
      {
        id: 2,
        name: 'test 2',
        office: {
          id: 2,
          OfficeName: 'Mudr Hajcmanova',
        },
      },
    ]);
  }
}
