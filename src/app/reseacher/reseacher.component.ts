
import { Component, OnInit, ViewChild } from '@angular/core';
import * as xml2js from "xml2js";
import { NewsRss } from '../news-rss';
import { HttpClient } from '@angular/common/http';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-reseacher',
  templateUrl: './reseacher.component.html',
  styleUrls: ['./reseacher.component.css']
})
export class ReseacherComponent implements OnInit {
  Rss: NewsRss;
  draw = "";
  draw2 = "";
  draw3 = "";
  @ViewChild('draw') drawElement: ElementRef;
  @ViewChild('draw2') draw2Element: ElementRef;
  @ViewChild('draw3') draw3Element: ElementRef;
  CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  constructor(private http: HttpClient) {
  
   }

  ngOnInit(): void {
   
  }
  
  submitButton(drawings) {
    this.draw = drawings;
  }

  submitButton2(drawings) {
    this.draw2 = drawings;
  }

  submitButton3(drawings) {
    this.draw3 = drawings;
  }
  async GetRSS() {
    const req: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://cors-anywhere.herokuapp.com/https://parkinsonsnewstoday.com/feed", req)
      .subscribe(data => {
        console.log(data);
        let parseString = xml2js.parseString;
        console.log("data: " + data)
        parseString(data, (error, finds: NewsRss) => {
          this.Rss = finds;
        });
      });
  }
  } 

