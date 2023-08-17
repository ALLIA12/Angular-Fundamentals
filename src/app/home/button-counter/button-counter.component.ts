import { Component } from '@angular/core';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css']
})
export class ButtonCounterComponent {
  counter: number = 0;

  increaseCounter(): void {
    this.counter++;
  }
}
