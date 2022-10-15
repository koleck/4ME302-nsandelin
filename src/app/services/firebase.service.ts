import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firebaseAuth: AngularFireAuth, private afstore: AngularFirestore, router: Router) { }
  
async googleLoginPopup(err) {
    const popup = new firebase.auth.GoogleAuthProvider();
    const credd = await this.firebaseAuth.signInWithPopup(popup);
  if (credd != null) {
    console.log("logged in google");
  } else 
  {
    console.log("nope");
    err.message();
    }
}

}
