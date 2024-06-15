import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from "@angular/router";
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SliderCoverflowComponent } from './components/slider-coverflow/slider-coverflow.component';
import { HeroComponent } from './components/hero/hero.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    SearchBoxComponent,
    SliderCoverflowComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    HeaderComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
