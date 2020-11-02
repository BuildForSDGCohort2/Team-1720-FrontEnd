import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {
  isHome = false;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/home' || val.urlAfterRedirects === '/home' || val.url === '/'){
          console.log(val.url);
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
    });
  }

  // Setting the page title
  setDocTitle(title: string): any {
    // console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle('mTatibu: ' + title);
  }

}
