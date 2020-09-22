import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): any{
    this.cookieService.set('mtibabu', JSON.stringify({ user: '' }));
    this.router.navigate(['/home']);
  }

}
