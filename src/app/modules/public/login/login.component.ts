import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private cookieService: CookieService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // Creating the form
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logUserIn(): any{
    this.cookieService.set('mtibabu', JSON.stringify({ user: 'userTest' }));
    this.router.navigate(['/dashboard']);
  }

}
