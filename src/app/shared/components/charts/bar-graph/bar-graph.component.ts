import { Component, OnChanges, OnInit, SimpleChanges, Input, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, Chart } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit, OnChanges {

  @Input() title;
  @Input() yLabel;
  @Input() xLabel;
  @Input() chartData;
  @Input() yAxisData;

  @ViewChild(BaseChartDirective) chart;
  // public chart: BaseChartDirective;

  // Bar graph configurations.
  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
      text: 'Temperature stats'
    },
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 25,
          beginAtZero: true,
          fontSize: 10,
          padding: 2,
          lineHeight: 1
        },
        scaleLabel: {
          display: true,
          labelString: 'degrees °C'
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: 10,
          padding: 2,
          lineHeight: 1
        },
        scaleLabel: {
          display: true,
          labelString: 'Months'
        },
        gridLines: {
          offsetGridLines: true,
          color: 'rgba(0, 0, 0, 0.07'
        }
      }]
    }
  };
  barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [45, 37, 60, 70, 46, 33],
      label: 'Best Fruits',
      barPercentage: 0.5,
      barThickness: 14,
      backgroundColor: 'rgba(100, 100, 104, 1)',
      hoverBackgroundColor: 'rgba(0, 0, 0, 1)',
      borderColor: 'rgba(0, 0, 0, 0)'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    // console.log(changes);

    if (changes.yAxisData !== undefined && !changes.yAxisData.firstChange) {
      this.barChartLabels = changes.yAxisData.currentValue;
      this.barChartOptions.scales.xAxes[0].scaleLabel.labelString = changes.xLabel.currentValue;
      this.chart.refresh();
    }

    if ( changes.title !== undefined && !changes.title.firstChange ) {
      this.barChartOptions.title.text = changes.title.currentValue;
      this.barChartOptions.scales.yAxes[0].scaleLabel.labelString = changes.yLabel.currentValue;
      this.barChartData[0].data = changes.chartData.currentValue;

      if (changes.title.currentValue === 'Sugar Level Stats'){
        this.barChartOptions.scales.yAxes[0].ticks.stepSize = 4;
      } else if (changes.title.currentValue === 'Temperature Stats'){
        this.barChartOptions.scales.yAxes[0].ticks.stepSize = 8;
      }else{
        this.barChartOptions.scales.yAxes[0].ticks.stepSize = 25;
      }
      this.chart.refresh();
    }

  }

}
