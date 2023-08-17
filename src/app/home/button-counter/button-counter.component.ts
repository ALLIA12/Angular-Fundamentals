import { Component } from '@angular/core';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css']
})
export class ButtonCounterComponent {
  counter: number = 0;
  increasedByFilteredEvent: boolean = false;

  increaseCounter(event: MouseEvent): void {
    if (event.shiftKey) {
      this.counter++;
      this.increasedByFilteredEvent = true;

      setTimeout(() => {
        this.increasedByFilteredEvent = false;
      }, 3000); // Hide message after 3000 milliseconds (3 seconds)
    } else {
      this.increasedByFilteredEvent = false;
    }
  }
}
