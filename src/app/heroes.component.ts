import { Component } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: `./heroes.component.html`,
  styleUrls: [ `./heroes.component.css` ]
})



export class HeroesComponent implements OnInit {

  title = 'Tour of Heroes';

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroSerivce: HeroService, private router: Router) {}

  getHeroes(): void {
    this.heroSerivce.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
}

}






