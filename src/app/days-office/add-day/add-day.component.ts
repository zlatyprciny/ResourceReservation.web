import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-day',
  templateUrl: './add-day.component.html',
  styleUrls: ['./add-day.component.scss']
})
export class AddDayComponent implements OnInit {

  @Input() day: string;

  constructor() { }

  ngOnInit(): void {
  }

}
