
import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroSearchService} from './hero-search.service';
import {Observable} from 'rxjs/Observable';
import {Hero} from './hero';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component ({
  selector: 'hero-search',
  templateUrl: './hero-service.component.html',
  styleUrls: ['./hero.service.component.css'],
  providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit, OnDestroy {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

// Push a search term into the observable stream.
  search(term: string): void {
    console.log('term adding ' + term);
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    console.log('I am here In Intialize part')
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.heroSearchService.search(term)
        : Observable.of<Hero[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero): void {
    let link = ['detail', hero.id];
    this.router.navigate(link);
  }

  ngOnDestroy(): void {
    console.log('Component delete');
  }

}
