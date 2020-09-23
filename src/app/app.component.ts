import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute, NavigationCancel, NavigationError } from '@angular/router';
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
  isHome = false;
  loading = true;

  constructor(private cookieService: CookieService, private router: Router, public route: ActivatedRoute) {
    // this.cookieService.set('mtibabu', JSON.stringify({user: ''}));
    if (this.cookieService.check('mtibu')){
      this.cookieService.set('mtibabu', JSON.stringify({ user: '' }));
    }
    this.cookieValue = JSON.parse(this.cookieService.get('mtibabu'));
    this.userLoggedIn = this.cookieValue.user !== undefined && this.cookieValue.user.length > 0 ? true : false;

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.loading = true;
        if (val.url === '/home') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
      if (val instanceof NavigationCancel) {
        this.loading = false;
      }
      if (val instanceof NavigationError) {
        this.loading = false;
      }
      if (val instanceof NavigationEnd) {
        this.loading = false;
        if (val.url === '/') {
          this.isCountDownPage = true;
        } else {
          this.isCountDownPage = false;
        }
        if (val.url === '/home') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }

        this.cookieValue = JSON.parse(this.cookieService.get('mtibabu'));
        this.userLoggedIn = this.cookieValue.user !== undefined && this.cookieValue.user.length > 0 ? true : false;
      }
    });
  }
}
