
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'dashboard',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'detail/:id',
      component: HeroDetailComponent
    }
]

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
  }
)

export class AppRoutingModule {}
