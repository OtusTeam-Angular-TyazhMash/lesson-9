import { Component, OnInit } from '@angular/core';

enum UserRole {
  ADMIN = 'admin',
  SUPPORT = 'support',
  USER = 'user',
  SALES = 'sales'

}

@Component({
  selector: 'my-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
  public userRoleEnum = UserRole;
  public userRole? = UserRole.ADMIN;

  constructor() {}

  ngOnInit() {
    if (this.userRole == UserRole.ADMIN) {
      // logic for admin
    }
  }
}
