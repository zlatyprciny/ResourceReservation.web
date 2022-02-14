import { Office } from 'src/app/shared/models/ambulatory/office';
import { DayOffice } from './day-office';
export interface DaysOffice {
  id: number | null;
  name:string;
  office: Office;
   days: DayOffice[] | null;
}
