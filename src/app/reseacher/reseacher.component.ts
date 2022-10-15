
import { Component, OnInit } from '@angular/core';
import * as xml2js from "xml2js";
import { NewsRss } from '../news-rss';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reseacher',
  templateUrl: './reseacher.component.html',
  styleUrls: ['./reseacher.component.css']
})
export class ReseacherComponent implements OnInit {
  Rss: NewsRss;

  CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  constructor(private http: HttpClient) {
  
   }

  ngOnInit(): void {
   
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

