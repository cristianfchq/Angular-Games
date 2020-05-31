import { Component } from '@angular/core';
import { Game } from './game/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string;
  title: string;

  games: Game[];

  constructor(){
    this.pageTitle = 'Angular Games';
    this.title = 'Vota por tus juegos favoritos';

    this.games = [
      new Game('fifa 20', 'https://www.ea.com/es-es/games/fifa/fifa-20', 12 ),
      new Game('GTA V', 'https://www.rockstartgames.com/V/es-es/games/fifa/fifa-20', 21 ),
      new Game('pes 2020', 'https://www.konami.com/wepes/2020/es-es/games/', 10 ),
      new Game('the witcher', 'https://www.witcher.com/en/', 3 ),
    ];
  }

  addGame(newtitle: HTMLInputElement, newlink: HTMLInputElement){
    console.log('voy a crear un nuevo juego llamado ' + newtitle.value + ' y su enlace es ' + newlink.value);
    this.games.push(new Game(newtitle.value, newlink.value));
    return false;
  }

  sortedGames(): Game[]{
    return this.games.sort((a: Game, b: Game) => b.votos - a.votos);
  }
}
