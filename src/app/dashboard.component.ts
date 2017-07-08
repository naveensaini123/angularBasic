import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';


@Component ({
  selector: 'my-dashboard',
  // template: '<h3>My Dashboard</h3>'
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(heroes.length - 4, heroes.length));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
