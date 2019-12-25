import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() title:string
  @Input() header:Array<String>
  constructor() { }

  ngOnInit() {
  }

}
