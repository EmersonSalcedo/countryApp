import {Component, OnInit} from '@angular/core';
import { gsap } from "gsap";

import { TextPlugin } from "gsap/TextPlugin";
import {Router} from "@angular/router";

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{
  constructor(public route:Router) {
  }
    ngOnInit(): void {
      gsap.registerPlugin(TextPlugin);
      gsap.defaults({ease: "none"});
      let tl = gsap.timeline();
      tl.to("h1", {duration: 2, text:"Country SPA"})
        .to(".wrapper", {duration: 2,ease:"bounce.out", y:-200})
        .fromTo("nav", {opacity:0},{duration:2,opacity:1,ease: "bounce.out"});
    }


}
