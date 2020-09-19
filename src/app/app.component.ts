import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cookieValue;
  userLoggedIn = false;
  routerUrl;

  constructor(private cookieService: CookieService, private router: Router, public route: ActivatedRoute) {
    this.cookieService.set('mtibabu', JSON.stringify({user: ''}), 1, '/', '', true, 'Strict');
    this.cookieValue = JSON.parse(this.cookieService.get('mtibabu'));
    this.userLoggedIn = this.cookieValue.user !== undefined && this.cookieValue.user.length > 0 ? true : false;
    // console.log(this.userLoggedIn);
    // console.log(this.cookieValue.user);
    this.routerUrl = router.url;
    router.events.subscribe((val) => {
      // see also 
      console.log(val instanceof NavigationEnd);
    });
  }
}
