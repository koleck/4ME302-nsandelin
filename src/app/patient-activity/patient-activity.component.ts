import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';
import patientData from '../../../../db.json'

interface User{
  userID: string;
  username: string;
  email?: string;
  Role_IDrole?: string;
  organization?: string;
  lat?: string;
  long?: string;
  

}
@Component({
  selector: 'app-patient-activity',
  templateUrl: './patient-activity.component.html',
  styleUrls: ['./patient-activity.component.css']
})
export class PatientActivityComponent implements OnInit {

  constructor() { }
  users: User[] = patientData;
  ngOnInit(): void {
  }
  
}
