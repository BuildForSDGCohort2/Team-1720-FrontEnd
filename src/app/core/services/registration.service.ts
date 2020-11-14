import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { environment } from '../environments/environment';
import { UserRegistration, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private currentUserSubject: BehaviorSubject<UserRegistration>;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private http: HttpClient
  ) { }

  register(user: UserRegistration): any {
    return this.http.post(`${environment.apiUrl}/api/users/register`, user)
      .pipe(map(newUser => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user));
        this.cookieService.set('mtibabu', JSON.stringify({ newUser }));
        // this.currentUserSubject.next(newUser);
        return newUser;
      }));
  }
}
