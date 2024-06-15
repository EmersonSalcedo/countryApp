import { NgModule } from '@angular/core';
import {provideRouter, RouterModule, Routes, withViewTransitions} from '@angular/router';
import {HomePageComponent} from "./shared/pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule )
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    provideRouter(
      routes,
      withViewTransitions()
    )
  ]
})
export class AppRoutingModule { }
