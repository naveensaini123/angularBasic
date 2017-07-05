import { Component } from '@angular/core';
import { HeroService } from './hero.service';



@Component({
  selector: 'my-app',
  template: `<h1>{{title}} </h1>
  `,
  providers: [ HeroService ]
})



export class AppComponent {

  title = 'Tour of Heroes';

}






