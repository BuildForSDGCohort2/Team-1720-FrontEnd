import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  pageTitle: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {

    // Setting the page title
    // this.router
    //   .events.pipe(
    //     filter(event => event instanceof NavigationEnd),
    //     map(() => {
    //       const child = this.activatedRoute.firstChild;
    //       if (child.snapshot.data['title']) {
    //         this.pageTitle = child.snapshot.data['title'];
    //       }
    //     })
    //   ).subscribe((ttl: string) => {
    //     this.titleService.setTitle(ttl);
    //   });
  }

  ngOnInit(): void {
  }

}
