import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  constructor() { }

  ngOnInit(): void {
  }
  
  

}

