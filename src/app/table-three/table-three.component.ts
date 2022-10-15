
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Patientdata } from '../patientdata';
@Component({
  selector: 'app-table-three',
  templateUrl: './table-three.component.html',
  styleUrls: ['./table-three.component.css']
})
  
  
export class TableThreeComponent implements OnInit {

  dataArr3 = [];

  displayedColumns: string[] = ['X', 'Y', 'time'];
  shown: boolean = false;
  @ViewChild(MatTable) table3: MatTable<any>;
  constructor() { }

  ngOnInit(): void {
  }
  async getData3() {
    const fet = await fetch("assets/data/data3.csv");
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
      this.dataArr3.push(pdata);
      
    })

    this.shown = true;
    this.table3.renderRows();
  }
}
