import {Component, Inject, Injector, Input} from '@angular/core';

@Component({
  selector: 'my-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.css'],
})
export class NgComponentOutletComponent {
  public component = DynamicComponent;
  private userName = 'From Parent User Name';
  constructor(private injector: Injector) {}

  public myInject = Injector.create({
    parent: this.injector,
    providers: [
      {
        provide: 'userName',
        useValue: this.userName,
      }
    ]
  })
}

@Component({
  selector: 'my-dynamic-component',
  template: 'hello user: <strong>{{userName}}</strong>',
})
export class DynamicComponent {

  constructor(@Inject('userName') public userName: string) {}
}
