import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {HeroService} from './hero.service';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: `./hero-detail.component.html`,
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

}
