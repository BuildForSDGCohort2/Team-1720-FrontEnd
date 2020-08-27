import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  // Count down config
  config = {
    leftTime: (60 * 60 * 24) * 34,
    format: 'd MMMM y h:mm:ss',
    prettyText: '<p></p>'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
