import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
  isLoggedIn: boolean;
  gitRedirect: boolean;
  constructor(public firebaseAuth: AngularFireAuth, private afstore: AngularFirestore, private router: Router) { }
 
  ngOnInit(): void {

    this.gitRedirect = false;
  }

  signinGooglePopup() {
    const popupGoogle = new firebase.auth.GoogleAuthProvider();
    return this.firebaseAuth.signInWithPopup(popupGoogle).then(() => {
      this.router.navigate(['/patient']);
        this.isLoggedIn = true;
    }).catch((error) => {
      console.log("error" + error)
      alert(error);
      this.isLoggedIn = false;
    });
  }
  
  signinGithubPopup() {
    const popupGithub = new firebase.auth.GithubAuthProvider();
     this.firebaseAuth.signInWithPopup(popupGithub).then(() => {
       if (popupGithub.providerId != "") {
         this.isLoggedIn = true;
        return this.router.navigate(['/researcher']);
       }
    }).catch((error) => {
      console.log("error" + error)
      alert(error);
    });
   
  }

 
  
  signinTwitterPopup() {
    const popupTwitter = new firebase.auth.TwitterAuthProvider();
    return this.firebaseAuth.signInWithPopup(popupTwitter).then(() => {
        this.isLoggedIn = true;
      
      this.router.navigate(['/physician']);
    }).catch((error) => {
      console.log("error" + error)
      alert(error);
      this.isLoggedIn = false;
    });
  }
}
