import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public route: string = "";

  constructor(private router: Router) {
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        this.route = event.url;
      }
    })
  }
}
