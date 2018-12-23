import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output('numberEmitted') numberEmitted = new EventEmitter<number>();
  num = 0;
  interval;

  startGame(){
      this.interval = setInterval(() => {
        this.num++;
        this.numberEmitted.emit(this.num);
      }, 1000);
  }

  stopGame(){
    clearInterval(this.interval);
  }

}
