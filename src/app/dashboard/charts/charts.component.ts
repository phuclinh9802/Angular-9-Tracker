import { Component, OnInit } from '@angular/core';

import { CoronaService } from 'src/app/service/corona.service';
import { Chart } from 'node_modules/chart.js'
//
// >>>>>>> 9d07a3afaae2f068bafa61d6d05b1548dff09c9d

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  countries: any;
  confirmed: any;
  recovered: any;
  deaths: any;
  country: any;



  confirmArray: Number[] = [];
  recoverArray: Number[] = [];
  deathArray: Number[] = [];
  days: Number[] = [];
  day: any = 0;
  myChart: any;

  constructor(private corona : CoronaService) { }

  ngOnInit(): void {
    this.corona.getCountries().subscribe((data) => {
      this.countries = data;
    })
  }

  getCountry(country: any) {
    this.country = country;
  }
  getInfo(): void {
    alert("Information has been received!");
    this.day = 0;
    this.corona.getInfoByCountries(this.country).subscribe((data) => {
      for (let element of data) {
        this.day = this.day + 1;
        this.days.push(this.day);
        this.confirmArray.push(element.Confirmed);
        
        this.recoverArray.push(element.Recovered);
        this.deathArray.push(element.Deaths);
      }
      console.log(this.confirmArray);
    })
    
    // this.myChart.update();
    
  }

  getConfirmed(): Number {
    return this.confirmArray[this.day - 1];
  }

  getRecovered(): Number {
    return this.recoverArray[this.day - 1];
  }

  getDeath(): Number {
    return this.deathArray[this.day - 1];
  }
  showChart(): void {

    // var button = document.getElementById("showButton");
    // // if (this.myChart != undefined) {
    // //     this.myChart.destroy();
    // // }
    this.myChart = new Chart("myChart", {
      type: 'line',
      data: {

        labels: this.days,
        datasets: [
          { 
            data: this.confirmArray,
            label: "Confirmed",
            borderColor: "yellow",
            fontColor: "#eee",
            fill: true
            
          },
          { 
            data: this.recoverArray,
            label: "Recovered",
            borderColor: "green",
            fontColor: "#eee",
            fill: true
            
          },
          { 
            data: this.deathArray,
            label: "Deaths",
            borderColor: "red",
            fontColor: "#eee",
            fill: true
          }
        ]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
              onClick: (e) => e.stopPropagation()
          },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Total # of Days',
              fontColor: '#eee'
            },
            gridLines: {
              display: true,
              color: '#aaa',
              lineWidth: 1
            },
            ticks: {
              fontColor: "white",
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: '# of People',
              fontColor: '#eee'
            },
            gridLines: {
              display: true,
              color: '#aaa',
              lineWidth: 1
            },
            ticks: {
              fontColor: "white",
            }
          }]
        }
      }
    });

  }

  clear(): void {
    alert("Information has been cleared! Now you can search for new information.");
    this.confirmArray = [];
    this.deathArray = [];
    this.recoverArray = [];
    this.days = [];

    this.myChart.destroy();


  }

}
