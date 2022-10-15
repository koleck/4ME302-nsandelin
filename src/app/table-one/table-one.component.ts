
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Patientdata } from '../patientdata';
@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.css']
})
  
  
export class TableOneComponent implements OnInit {

  dataArr = [];

  displayedColumns: string[] = ['X', 'Y', 'time'];
  shown: boolean = false;
  @ViewChild(MatTable) table1: MatTable<any>;
  constructor() { }

  ngOnInit(): void {
  }
  async getData1() {
    const fet = await fetch("assets/data/data1.csv");
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
      this.dataArr.push(pdata);
      
    })

    this.shown = true;
    this.table1.renderRows();
  }
}
