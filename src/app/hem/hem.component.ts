import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hem',
  templateUrl: './hem.component.html',
  styleUrls: ['./hem.component.css']
})
export class HemComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
