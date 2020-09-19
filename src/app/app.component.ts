import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cookieValue;
  userLoggedIn = false;
  isCountDownPage = false;

  constructor(private cookieService: CookieService, private router: Router, public route: ActivatedRoute) {
    this.cookieService.set('mtibabu', JSON.stringify({user: ''}));
    this.cookieValue = JSON.parse(this.cookieService.get('mtibabu'));
    this.userLoggedIn = this.cookieValue.user !== undefined && this.cookieValue.user.length > 0 ? true : false;

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/') {
          this.isCountDownPage = true;
        } else {
          this.isCountDownPage = false;
        }
      }
    });
  }
}
