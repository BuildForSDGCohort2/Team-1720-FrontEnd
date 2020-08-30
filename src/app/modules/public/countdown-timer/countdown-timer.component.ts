import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  public enddate = '31 August 2020';
  public diff: number;
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;

  constructor(elm: ElementRef) {
  }

  ngOnInit(): void {

    interval(1000).pipe(
      map((x) => {
        this.diff = Date.parse(this.enddate) - Date.parse(new Date().toString());
      })).subscribe((x) => {
        this.days = this.getDays(this.diff);
        this.hours = this.getHours(this.diff);
        this.minutes = this.getMinutes(this.diff);
        this.seconds = this.getSeconds(this.diff);
      });
  }

  getDays(t): any {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  getHours(t): any {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t): any {
    return Math.floor((t / 1000 / 60) % 60);
  }

  getSeconds(t): any {
    return Math.floor((t / 1000) % 60);
  }

}
