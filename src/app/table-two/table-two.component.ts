
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Patientdata } from '../patientdata';
@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.css']
})
  
  
export class TableTwoComponent implements OnInit {

  dataArr2 = [];
  shown: boolean = false;
  displayedColumns2: string[] = ['X', 'Y', 'time', 'correct'];
  @ViewChild(MatTable) table2: MatTable<any>;
  constructor() { }

  ngOnInit(): void {
  }
  async getData2() {
    const fet = await fetch("assets/data/data2.csv");
    let body = await fet.text();
    let row1 = body.split('\r')
    let rows = row1.slice(1);
    
    rows.forEach(i => {
      const row = i.split(',');
      const pdata: Patientdata = 
        {
          X: row[0],
          Y: row[1],
        time: row[2],
          correct:row[3]
        }
      ;
      this.dataArr2.push(pdata);
      
    })
    this.shown = true;

    this.table2.renderRows();
  }
}
