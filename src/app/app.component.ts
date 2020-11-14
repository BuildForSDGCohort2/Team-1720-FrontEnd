import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute, NavigationCancel, NavigationError } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AuthenticationService } from './core/services/authentication.service';
import { User } from './core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cookieValue;
  userLoggedIn = false;
  isHome = false;
  loading = true;
  currentUser: User;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    public route: ActivatedRoute,
    private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    // this.cookieService.set('mtibabu', JSON.stringify({user: ''}));
    if ( this.currentUser === null ){
      // this.cookieService.set('mtibabu', JSON.stringify({ user: '' }));
      this.cookieService.delete('mtibabu');
      this.userLoggedIn = false;
      this.isHome = true;
    }

    // this.cookieValue = JSON.parse(this.cookieService.get('mtibabu'));
    // this.userLoggedIn = this.cookieValue.user !== undefined && this.cookieValue.user.length > 0 ? true : false;
    this.userLoggedIn = this.currentUser !== null ? true : false;

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.loading = true;
        if (val.url === '/home' || val.url === '/') {
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
        if (val.url === '/home') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }

        this.userLoggedIn = this.currentUser !== null ? true : false;

        // this.cookieValue = JSON.parse(this.cookieService.get('mtibabu'));
        // this.userLoggedIn = this.cookieValue.user !== undefined && this.cookieValue.user.token.length > 0 ? true : false;
      }
    });
  }

  logout(): any {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
