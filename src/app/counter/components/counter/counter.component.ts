import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button class="btn btn-primary mx-2" (click)="incrementBy(1)">+1</button>
    <button class="btn btn-primary mx-2" (click)="resetCounter()">Reset</button>
    <button class="btn btn-primary mx-2" (click)="incrementBy(-1)">-1</button>
    <hr />
  `,
})
export class CounterComponent {
  public title: string = 'Hello World';
  public counter: number = 10;

  public incrementBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
