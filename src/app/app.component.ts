import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numbers = [1, 2, 3, 4];
  numbersArray = [];
  onNumberEmitted(num) {
    this.numbersArray.push(num);
  }
}
