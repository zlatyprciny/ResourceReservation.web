import { Component, Input, OnInit } from '@angular/core';
import { DayOffice } from '../day-office';

@Component({
  selector: 'dm-day-summary',
  templateUrl: './day-summary.component.html',
  styleUrls: ['./day-summary.component.scss']
})
export class DaySummaryComponent implements OnInit {
  @Input() dayOffice: DayOffice;
  constructor() { }

  ngOnInit(): void {
  }

}
