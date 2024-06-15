import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../../countries/services/countries.service";
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  public countriesFlags: string[] = [];

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
    gsap.registerPlugin(TextPlugin);
    gsap.defaults({ease: "none"});
    let tl = gsap.timeline();
    tl.to(".typing", {duration: 2, text:"Country SPA"})
      .to(".wrapper", {duration: 2,ease:"bounce.out", y:-200})
      .fromTo(".fade", {opacity:0},{duration:0.5,opacity:1,ease: "bounce.out"})
      .fromTo(".slider", {opacity:0,position:"absolute"},{duration:0.5,opacity:1,ease: "bounce.out"});
  }
}
