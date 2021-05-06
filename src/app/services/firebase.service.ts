import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public  afAuth:  AngularFireAuth, public firestore: AngularFirestore,private router : Router) { }

  async loginintoDatabase(data) {
    return  await this.afAuth.signInWithEmailAndPassword(data.email, data.password)

}
async register(email: string, password: string) {
  return await this.afAuth.createUserWithEmailAndPassword(email, password)

}

addNewUser(data) {
  return this.firestore.collection('users').add(data)
}
getUserData(email) {
  return this.firestore.collection("users").snapshotChanges()
  //  const data =  this.firestore.collection('users',ref =>
  //  ref.where("email", "==",email ))
  //  console.log('data', data)
}
logout() {
  this.afAuth.signOut()
  console.log('logout Scucessfully')
  localStorage.removeItem('authenticatedByLoginToken')
  this.router.navigateByUrl('/login')
}
}
