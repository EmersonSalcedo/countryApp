import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    HeaderComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    HeaderComponent,
    ContactPageComponent
  ]
})
export class SharedModule { }
