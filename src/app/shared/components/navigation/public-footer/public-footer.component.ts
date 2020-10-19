import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-public-footer',
  templateUrl: './public-footer.component.html',
  styleUrls: ['./public-footer.component.scss']
})
export class PublicFooterComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }

  // Setting the page title
  setDocTitle(title: string): any {
    // console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle('mTatibu: ' + title);
  }

}
