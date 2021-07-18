import { Injectable } from '@angular/core';

//librerias de angular fire
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private ngFirestore: AngularFirestore
  ) { }

    create(latitude: string, longitude: string){
      return this.ngFirestore.collection('locations').add({latitude, longitude, Desarrollador: "Hipo Eddy"});
    }

}
