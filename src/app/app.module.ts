import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { HemComponent } from './hem/hem.component';
import { FirebaseService } from './services/firebase.service';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { ReseacherComponent } from './reseacher/reseacher.component';
import { PhysicianComponent } from './physician/physician.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table';
import { TableOneComponent } from './table-one/table-one.component';
import { TableTwoComponent } from './table-two/table-two.component';
import { TableThreeComponent } from './table-three/table-three.component';
import { TableFourComponent } from './table-four/table-four.component';
import { TableFiveComponent } from './table-five/table-five.component';
import { TableSixComponent } from './table-six/table-six.component';
import { PatientActivityComponent } from './patient-activity/patient-activity.component'


const routers: Routes = [
  { path: 'hem-component', component: HemComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'physician', component: PhysicianComponent },
  { path: 'researcher', component: ReseacherComponent}
]; 

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    PatientComponent,
    ReseacherComponent,
    PhysicianComponent,
    HemComponent,
    TableOneComponent,
    TableTwoComponent,
    TableThreeComponent,
    TableFourComponent,
    TableFiveComponent,
    TableSixComponent,
    PatientActivityComponent,

  ],
  imports: [
    RouterModule.forRoot(routers),
    BrowserModule, HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCivCd-cqm7i0y_qEPQYm_cI0PpSsMe_VM",
      authDomain: "sistachansen-f3567.firebaseapp.com",
      projectId: "sistachansen-f3567",
      storageBucket: "sistachansen-f3567.appspot.com",
      messagingSenderId: "563719125852",
      appId: "1:563719125852:web:43da0daca3a3f1b0ef9f99"
    }),
    BrowserAnimationsModule
  ],
  exports:[RouterModule],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
