import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface coord{
  X: number;
  Y: number;
}
@Component({
  selector: 'app-spiraldrawing',
  templateUrl: './spiraldrawing.component.html',
  styleUrls: ['./spiraldrawing.component.css']
})
  
  
export class SpiraldrawingComponent implements OnInit {
  @ViewChild('myCanvas1', { static: false }) myCanvas1: ElementRef;
  @ViewChild('myCanvas3', { static: false }) myCanvas3: ElementRef;
  @ViewChild('myCanvas5', {static: false}) myCanvas5: ElementRef;
  arr = [];
  arr3 = [];
  arr5 = [];
  constructor() { }

  public context: CanvasRenderingContext2D;
 
  ngOnInit(): void {
    this.fetchdata();
  }
  async fetchdata() {
    const fet = await fetch("assets/data/data1.csv");
    let body = await fet.text();
    let row1 = body.split('\r')
    let rows = row1.slice(0);
    rows.forEach(i => {
      const row = i.split(',');
      const xydata: coord = 
        {
          X: parseInt(row[0]),
          Y: parseInt(row[1]),
        }
        ;
      this.arr.push(xydata);
    })

    const fet3 = await fetch("assets/data/data3.csv");
    let body3 = await fet3.text();
    let row3 = body3.split('\r')
    let rows3 = row3.slice(0);
    rows3.forEach(i => {
      const row = i.split(',');
      const xydata: coord = 
        {
          X: parseInt(row[0]),
          Y: parseInt(row[1]),
        }
        ;
      this.arr3.push(xydata);
    })

    const fet5 = await fetch("assets/data/data5.csv");
    let body5 = await fet5.text();
    let row5 = body5.split('\r')
    let rows5 = row5.slice(0);
    rows5.forEach(i => {
      const row = i.split(',');
      const xydata: coord = 
        {
          X: parseInt(row[0]),
          Y: parseInt(row[1]),
        }
        ;
      this.arr5.push(xydata);
    })
  }
  drawSpiral1() {
    var can = this.myCanvas1.nativeElement.getContext('2d');
    can.moveTo(this.arr[0], this.arr[1]);
    this.arr.forEach(element => {

      can.fillRect(element.X, element.Y, 3,3);
      can.stroke();
    });
  }
  drawSpiral3() {
    var can = this.myCanvas3.nativeElement.getContext('2d');
    can.moveTo(this.arr3[0], this.arr3[1]);
    this.arr3.forEach(element => {
      console.log("elemenet:" + element)
      can.fillRect(element.X, element.Y, 3,3);
      can.stroke();
    });
  }
  drawSpiral5() {
    var can = this.myCanvas5.nativeElement.getContext('2d');
    can.moveTo(this.arr5[0], this.arr5[1]);
    this.arr5.forEach(element => {

      can.fillRect(element.X, element.Y, 3,3);
      can.stroke();
    });
  }
  ngAfterViewInit(): void {
    

  }
  

}
