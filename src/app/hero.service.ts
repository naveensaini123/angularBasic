import { Injectable } from '@angular/core';
import { Heroes } from './mock-heroes';
import {Hero} from './hero';


@Injectable()
export class HeroService {

  getHeroes(): Hero[] {
    return Heroes;
}

}
