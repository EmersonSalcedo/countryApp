import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../../countries/services/countries.service";
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {delay} from "rxjs";

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  public countriesFlags: string[] = [];
  public loadTransition:boolean = false;

  constructor(private countryService:CountriesService) {
    countryService.searchAll()
      .subscribe(countries => {
        for(let i=0; i<10; i++){
          let randomFlag=Math.floor(Math.random() * (countries.length + 1)) + 1;
          while (this.countriesFlags.includes(countries[randomFlag].flags.svg)){
            randomFlag=Math.floor(Math.random() * (countries.length + 1)) + 1;
          }
          this.countriesFlags.push(countries[randomFlag].flags.svg)
        }
      });
  }
  ngOnInit(): void {
    if( this.countryService.loadAnimation ) return;
    gsap.registerPlugin(TextPlugin);
    gsap.defaults({ease: "none"});
    let tl = gsap.timeline();
    tl.fromTo(".typing", {text:""},{duration: 2, text:"Country SPA"})
      .fromTo(".wrapper",{y:0}, {duration: 2,ease:"bounce.out", y:-200})
      .fromTo(".fade", {opacity:0},{duration:0.5,opacity:1,ease: "bounce.out"})
      .fromTo(".slider", {opacity:0,position:"absolute"},{duration:0.5,opacity:1,ease: "bounce.out"})
    delay(tl.totalDuration())
    this.loadTransition = true;
    this.countryService.loadAnimation = true;
  }
}
