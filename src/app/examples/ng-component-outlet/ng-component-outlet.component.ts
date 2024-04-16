import {
  Component,
  Inject,
  Injector,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'my-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.css'],
})
export class NgComponentOutletComponent {
  public component = DynamicComponent;
  constructor() {}
}

@Component({
  selector: 'my-dynamic-component',
  template: 'hello user: <strong>{{userName}}</strong>',
})
export class DynamicComponent {
  @Input()
  public readonly userName: string = 'Dynamic User Name';
}
