import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'my-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent implements OnInit {
  private readonly interval$ = interval(2500);

  public classes = {
    active: false,
    touched: false,
  };

  ngOnInit(): void {
    this.interval$.subscribe((r) => {
      //this.mutateClasses(r);
      this.createNewClasses(r)
    });
  }

  public mutateClasses(count: number): void {
    this.classes['active'] = count % 2 === 0;
    this.classes['touched'] = count % 3 === 0;
  }

  public createNewClasses(count: number): void {
    this.classes = {
      active: count % 2 === 0,
      touched: count % 3 === 0,
    };
  }
}
