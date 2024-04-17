import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'my-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  private readonly interval$ = interval(2000).pipe(
    takeWhile((count) => count < 5)
  );

  public styles = {
    'font-size': '10px',
  };

  ngOnInit(): void {
    this.interval$.subscribe((count) => {
      //this.mutateStyles(count);
      this.createNewStyles(count);
    });
  }

  public mutateStyles(count: number): void {
    this.styles['font-size'] = this.calculate(count);
  }

  public createNewStyles(count: number): void {
    this.styles = {
      ['font-size']: this.calculate(count),
    };
  }

  private calculate = (count: number) => `${(count + 10) * 1.5}px`;
}
