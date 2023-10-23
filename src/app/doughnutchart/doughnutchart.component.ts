import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.scss']
})
export class DoughnutchartComponent implements OnInit{
  public secondChart: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){

    this.secondChart = new Chart("MySecondChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['', '',''],
	       datasets: [{
    label: 'My First Dataset',
    data: [70, 150, 500],
    backgroundColor: [
      '#D3F56A',
      '#2A4B52',
      '#DA5538',
     	
    ],
    borderColor:'transparent',
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:0.8,
        cutout:70
        
      }

    });
  }

}
