import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cookieValue;
  userLoggedIn = false;

  constructor(private cookieService: CookieService) {
    this.cookieService.set('mtibabu', JSON.stringify({user: ''}), 1, '/', 'localhost', true, 'Strict');
    this.cookieValue = JSON.parse(this.cookieService.get('mtibabu'));
    this.userLoggedIn = this.cookieValue.user !== undefined && this.cookieValue.user.length > 0 ? true : false;
    console.log(this.userLoggedIn);
    // console.log(this.cookieValue.user);
  }
}
