import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
  public userRole?: 'admin' | 'support' | 'user' = 'admin';

  constructor() {}

  ngOnInit() {}
}
