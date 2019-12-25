import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  headers=['columna 1','columna 2','columna 3']
  
  constructor() { }

  ngOnInit() {
  }

}
