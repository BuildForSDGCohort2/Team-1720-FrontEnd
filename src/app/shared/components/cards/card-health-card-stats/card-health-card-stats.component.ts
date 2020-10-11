import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-health-card-stats',
  templateUrl: './card-health-card-stats.component.html',
  styleUrls: ['./card-health-card-stats.component.scss']
})
export class CardHealthCardStatsComponent implements OnInit {

  chartTitle = 'Temperature Stats';
  chartYLabel: string;
  chartXLabel: string;
  chartData = [9, 6, 5, 7, 4, 8, 6];
  yAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  constructor() { }

  ngOnInit(): void {
  }

  public updateChartData( $chartName ): any{

    if ($chartName === 'temperature' ){
      this.chartTitle = 'Temperature Stats';
      this.chartYLabel = 'Degree °C';
      this.chartData = [36.4, 36.6, 36.2, 36.2, 36.1, 36.3, 36.3];
    } else if ($chartName === 'sugar-level' ) {
      this.chartTitle = 'Sugar Level Stats';
      this.chartYLabel = 'Gluclose level';
      this.chartData = [ 9, 6, 5, 7, 4, 8, 6];
    } else if ($chartName === 'weight' ) {
      this.chartTitle = 'Weight Stats';
      this.chartYLabel = 'Weight (kg)';
      this.chartData = [105, 90, 98, 96, 99, 102, 100];
    } else if ($chartName === 'blood-pressure' ) {
      this.chartTitle = 'Blood Pressure Stats';
      this.chartYLabel = 'mm Hg';
      this.chartData = [120, 110, 130, 153, 120, 90, 96];
    }

  }

  public onGraphDurationChange($event, val): any {
    // console.log($event);
    switch (val) {
      case 'days': {
        this.yAxisData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        this.chartXLabel = 'Days';
        break;
      }
      case 'weeks': {
        this.yAxisData = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        this.chartXLabel = 'Weeks';
        break;
      }
      case 'months': {
        this.yAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        this.chartXLabel = 'Months';
        break;
      }
      case 'years': {
        this.yAxisData = ['2015', '2016', '2017', '2018', '2019', '2020'];
        this.chartXLabel = 'Years';
        break;
      }
      default: {
        this.yAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        this.chartXLabel = 'Months';
        break;
      }
    }
  }

}
