import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'd-flex flex-column align-items-center mt-5 mb-5 pl-md-5 pr-md-5 pl-1 pr-1';
  @Input() game: Game;

  constructor() {
    // this.game = new Game(
    //   'fifa 20',
    //   'fifa.com'
    // );
  }

  votoUp(){
    this.game.votoUp();
    return false;
  }

  votoDown(){
    this.game.votoDown();
    return false;
  }

  ngOnInit(): void {
  }

}
