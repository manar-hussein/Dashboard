import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent {

  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec' ], 
	       datasets: [
          {
            label: "",
            data: ['150','170', '280','290','295','300','310', '320','305', '310','350',
								 '270', '200', '205','180','260','250','260'],
            backgroundColor: '#DA5538',
            borderColor: "#DA5538",
            borderWidth: 1,
            fill: false, 
   
            
            
          },
          {
            label: "",
            data: ['210', '215', '200', '215', '215',
									 '250', '220', '200','200','195','170','200','210','215'],
            backgroundColor: '#D3F56A',
            borderColor: "#D3F56A",
            borderWidth: 1
          }  
        ]
      },
      options: {
        aspectRatio:2.5,
        elements: {
          point:{
              radius: 0
          },
          line: {
            tension : 0.5 // smooth lines
        },
        
        },
        plugins:{
          legend: {

          }
        }

      }
      
    });
  }
  
}
