
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Patientdata } from '../patientdata';
@Component({
  selector: 'app-table-five',
  templateUrl: './table-five.component.html',
  styleUrls: ['./table-five.component.css']
})
  
  
export class TableFiveComponent implements OnInit {

  dataArr5 = [];
  shown: boolean = false;
  displayedColumns: string[] = ['X', 'Y', 'time'];

  @ViewChild(MatTable) table5: MatTable<any>;
  constructor() { }

  ngOnInit(): void {
  }
  async getData5() {
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
      this.dataArr5.push(pdata);
      
    })
    console.log(this.dataArr5);
    this.shown = true;
    this.table5.renderRows();
  }
}
