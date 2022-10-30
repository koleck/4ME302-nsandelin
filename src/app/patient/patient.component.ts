
import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTable } from '@angular/material/table';
import Chart from 'chart.js/auto';
import { ExData } from '../ExData';
import { FormBuilder } from '@angular/forms';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
  

export class PatientComponent implements OnInit {
  @ViewChild('feeling') feelElement: ElementRef;
  @ViewChild(MatTable) table: MatTable<any>;
  data = [];
  shown: boolean = false;
  index = 0;
  correct = 0;
  notcorrect = 0;
  correct1 = 0;
  notcorrect1 = 0;
  correct2 = 0;
  notcorrect2 = 0;
  correct3 = 0;
  notcorrect3 = 0;
  hs = "";
  ratio = "";
  ratio1 = 0;
  ratio2 = 0;
  ratio3 = 0;
  public statschart: any;
  myfeeling: string = "";

  constructor(feelElement: ElementRef) {
    this.feelElement=feelElement;
   };

  ngOnInit(): void {
    this.getDataForTable();
    this.getHsData();
    
  }
  submitButton(feeling) {
    this.myfeeling = feeling;
  }

  createChart(cor, notcor){
    this.statschart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['latest session - clicks' ],
	       datasets: [
          {
            label: "Total clicks",
            data: [(cor+notcor)],
            backgroundColor: 'blue'
          },
          {
            label: "Good quality",
            data: [cor],
            backgroundColor: 'limegreen'
           }, 
           {
            label: "Misses",
            data: [notcor],
            backgroundColor: 'red'
           }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
    
  }


  async getDataForTable() {
    const fet = await fetch("assets/data/data2.csv");
    let body = await fet.text();
    let row1 = body.split('\r')
    this.index = row1.length
    let rows = row1.slice(0);
    rows.forEach(i => {
      const row = i.split(',');
      const pdata: ExData = 
        {
          X: parseInt(row[0]),
          Y: parseInt(row[1]),
        time: parseInt(row[2]),
        button: parseInt(row[3]),
        correct: parseInt(row[4]),
        index: i.length
        }
      ;
      this.data.push(pdata);
      if (row[4] == "1") {
        this.correct++;
      } else if (row[4] != "1"){
        this.notcorrect++;
      }
    })
    this.ratio = ((this.notcorrect / this.correct) * 100).toString() +"%";
    this.createChart(this.correct, this.notcorrect);
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

    if ((this.ratio1 >= this.ratio2) && (this.ratio1 >= this.ratio3)) {
      console.log("ratio1: " + this.ratio1)
      this.hs = (this.ratio1).toString() + "%";
    } else if ((this.ratio2 >= this.ratio1) && (this.ratio2 >= this.ratio3)) { 
      this.hs = (this.ratio2).toString() + "%";
      console.log("ratio2: " + this.ratio2)
    } else if ((this.ratio3 >= this.ratio1) && (this.ratio3 >= this.ratio2)) {
      this.hs = (this.ratio3).toString() + "%";
      console.log("ratio3: " + this.ratio3)
    }

  }

}
