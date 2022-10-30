import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Patientdata } from '../patientdata';
import { ChartDataset } from 'chart.js'
import { ExData } from '../ExData';
import * as d3 from 'd3';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  public ratioschart: any;
  ratio1 = 0;
  ratio2 = 0;
  ratio3 = 0;
  correct1 = 0;
  notcorrect1 = 0;
  correct2 = 0;
  notcorrect2 = 0;
  correct3 = 0;
  notcorrect3 = 0;
  hs = 0;

  private data = [
    {"Score": "Total clicks", "Clicks": "12333"},
    {"Score": "Correct clicks", "Clicks": "150793"},
    {"Score": "Missed clicks", "Clicks": "62342"},
   ,
  ];
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor() { 
  }

  async ngOnInit() {

    
  }


  async getHsData() {
    const fet1 = await fetch("assets/data/data2.csv");
    const fet2 = await fetch("assets/data/data4.csv");
    const fet3 = await fetch("assets/data/data6.csv");
    let body1 = await fet1.text();
    let body2 = await fet2.text();
    let body3 = await fet3.text();
    let row1 = body1.split('\r')
    let row2 = body2.split('\r')
    let row3 = body3.split('\r')
    let rows1 = row1.slice(0);
    let rows2 = row2.slice(0);
    let rows3 = row3.slice(0);
    rows1.forEach(i => {
      const row = i.split(',');
      const pdata: ExData = 
        {
        correct: parseInt(row[4]),
        }
      ;
      if (row[4] == "1") {
        this.correct1++;
      } else if (row[4] != "1"){
        this.notcorrect1++;
      }
    })
    this.ratio1 = (this.notcorrect1 / this.correct1) * 100;
    console.log("RATIO 1: " + this.ratio1);
    rows2.forEach(i => {
      const row = i.split(',');
      const pdata: ExData = 
        {
        correct: parseInt(row[4]),
        }
      ;
      if (row[4] == "1") {
        this.correct2++;
      } else if (row[4] != "1"){
        this.notcorrect2++;
      }
    })
    this.ratio2 = (this.notcorrect2 / this.correct2) * 100;
    console.log("RATIO 2: " + this.ratio2);

    rows3.forEach(i => {
      const row = i.split(',');
      const pdata: ExData = 
        {
        correct: parseInt(row[4]),
        }
      ;
      if (row[4] == "1") {
        this.correct3++;
      } else if (row[4] != "1"){
        this.notcorrect3++;
      }
    })
    this.ratio3 = (this.notcorrect3 / this.correct3) * 100;
    console.log("RATIO 3: " + this.ratio3);


  }
  
 createChartRatio(r1, r2, r3){
  this.ratioschart = new Chart("MyChart", {
    type: 'line', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: ['latest session - ratio in %' ],
       datasets: [
        {
          label: "Hit ratio 1",
          data: [(r1)],
          backgroundColor: 'blue'
        },
        {
          label: "Hit ratio 2",
          data: [r2],
          backgroundColor: 'limegreen'
         }, 
         {
          label: "Hit ratio 3",
          data: [r3],
          backgroundColor: 'red'
         }
      ]
    },
    options: {
      aspectRatio:2.5
    }
    
  });
  
}

  
}
