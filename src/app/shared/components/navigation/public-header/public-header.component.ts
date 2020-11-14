import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit, OnChanges {
  // isHome = false;
  @Input() isHome = false;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/home' || val.urlAfterRedirects === '/home' || val.url === '/'){
          this.isHome = true;
        } else {
          this.isHome = false;
        }

        console.log(this.isHome);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hello World');
    console.log(changes);
  }

  // Setting the page title
  setDocTitle(title: string): any {
    // console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle('mTatibu: ' + title);
  }

}
