import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private readonly stringArray = ['Alex Hughes', 'Igor Smith', 'Leo Messi'];
  private readonly objectArray: { firstName: string; lastName: string }[] = [
    { firstName: 'Alex', lastName: 'Hughes' },
    { firstName: 'Igor', lastName: 'Smith' },
    { firstName: 'Leo', lastName: 'Messi' },
  ];

  public readonly items = this.stringArray;

  public readonly gridArray = this.createArray(8);

  private createArray(length: number): null[] {
    return new Array(length).fill(null);
  }
}
