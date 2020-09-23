import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  currentDate = new Date();
  headerSearch: FormGroup;

  constructor(private cookieService: CookieService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Creating the form
    this.headerSearch = this.formBuilder.group({
      searchTerm: ['', Validators.required]
    });
  }

  logout(): any{
    this.cookieService.set('mtibabu', JSON.stringify({ user: '' }));
    this.router.navigate(['/home']);
  }

}
