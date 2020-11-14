import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { environment } from '../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private REST_API_SERVER = 'http://localhost:3000/';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor( private cookieService: CookieService, private http: HttpClient ) {
    this.currentUserSubject = new BehaviorSubject<User>( JSON.parse(localStorage.getItem('currentUser')) );
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse( this.cookieService.get('mtibabu') ) );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Simple test conection
  public sendGetRequest(): any {
    return this.http.get(this.REST_API_SERVER + 'api/users/');
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): any {
    return this.http.post<any>(`${environment.apiUrl}/api/users/login`, { 'email': username, 'password': password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user));
        this.cookieService.set('mtibabu', JSON.stringify({ user }));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout(): void {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    const cookieExists: boolean = this.cookieService.check('mtibabu');

    if ( cookieExists ){
      this.cookieService.delete('mtibabu');
    }

    this.currentUserSubject.next(null);
  }
}
