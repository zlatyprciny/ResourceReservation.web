import { Component, Input, OnInit } from '@angular/core';
import { DayOffice } from '../day-office';

@Component({
  selector: 'dm-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.scss'],
})
export class DayListComponent implements OnInit {
  @Input() dayList: DayOffice[];
  constructor() {}

  ngOnInit(): void {}
}
