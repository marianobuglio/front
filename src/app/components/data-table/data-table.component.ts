import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() title:string
  @Input() header:Array<String>
  @Input() link:string
  constructor(private router:Router) {
    
   }

  ngOnInit() {
    console.log(this.link)
  }

}
