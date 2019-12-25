import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-list-setting',
  templateUrl: './list-setting.component.html',
  styleUrls: ['./list-setting.component.scss']
})
export class ListSettingComponent implements OnInit {

  items=[

    {
      title: 'General',
      home: true,
      data: {
        permission: 'view',
        resource: 'pepito'
      },
      children: [
        {
          title: 'Usuarios',
          icon: 'people-outline',
          link: '/user',
        },
      ],
    },
    
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
