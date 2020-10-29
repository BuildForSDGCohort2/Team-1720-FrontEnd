import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.scss']
})
export class AdminFooterComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }

  // Setting the page title
  setDocTitle(title: string): any {
    // console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle('mTatibu: ' + title);
  }

}
