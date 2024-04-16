import { Component, OnInit } from '@angular/core';
import { delay, map, of, startWith } from 'rxjs';

@Component({
  selector: 'my-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent implements OnInit {
  private readonly emptyArray = [];
  private readonly notEmptyArray = ['sasdasd'];

  constructor() {}

  ngOnInit() {}

  public readonly someArray = this.emptyArray;
  public readonly loadingState$ = of(null).pipe(
    delay(3000),
    map(() => 'value after 3 second'),
    startWith(false)
  );

  public getSomeValue(): string | number | object {
    return 'some value';
  }
}
