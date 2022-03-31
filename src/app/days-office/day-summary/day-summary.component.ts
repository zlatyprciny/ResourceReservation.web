import { Component, Input, OnInit } from '@angular/core';
import { DayOffice } from '../day-office';

@Component({
  selector: 'dm-day-summary',
  templateUrl: './day-summary.component.html',
  styleUrls: ['./day-summary.component.scss']
})
export class DaySummaryComponent implements OnInit {
  @Input() dayOffice: DayOffice;
  dataSource: any;
  isContextMenuVisible: boolean;
  constructor() {
    this.dataSource = [{
      text: 'Share',
      icon: 'dx-icon-globe',
      items: [
        { text: 'Facebook' },
        { text: 'Twitter' }],
    },
    { text: 'Download', icon: 'dx-icon-download' },
    { text: 'Add Comment', icon: 'dx-icon-add' },
    { text: 'Add to Favorite', icon: 'dx-icon-favorites' },
    ];
    this.isContextMenuVisible = false;
  }
  itemClick(e: any) {
    if (!e.itemData.items) {
      console.log(`The "${e.itemData.text}" item was clicked`, 'success', 1500);
    }
    this.isContextMenuVisible = false;
  }
  menuClick() {
    this.isContextMenuVisible = true;
  }

  ngOnInit(): void {
  }

}
