import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  public readonly gridSize = this.createArray(8);

  private createArray(length: number): null[] {
    return new Array(length).fill(null);
  }

  constructor() {}

  ngOnInit() {}
}
