import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Office } from 'src/app/shared/models/ambulatory/office';

@Component({
  selector: 'pm-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.scss'],
})
export class OfficeListComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  @Input() officeList: any ;
  @Output() onOfficeChanged = new EventEmitter<Office>();


  onFocusedRowChanged(e: any) {
    this.onOfficeChanged.emit(e.row.data as Office);
  }
}
