import { Component, Input, OnInit } from '@angular/core';
import { DayOffice } from '../day-office';

@Component({
  selector: 'dm-day-summary',
  templateUrl: './day-summary.component.html',
  styleUrls: ['./day-summary.component.scss'],
})
export class DaySummaryComponent implements OnInit {
  @Input() dayOffice: DayOffice;
  dataSource: any;
  constructor() {
    this.dataSource = [
      { text: 'Update', icon: 'dx-icon-edit' },
      { text: 'Delete', icon: 'dx-icon-remove' },
    ];
  }
  itemClick(e: any) {
    if (!e.itemData.items) {
      console.log(`The "${e.itemData.text}" item was clicked`, 'success', 1500);
    }
  }
  ngOnInit(): void {}
}
