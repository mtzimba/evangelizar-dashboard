import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

const COLLECTION_NAME = "evangelization-centers";

@Injectable({
  providedIn: 'root'
})
export class EvangelizationCenterFirebaseService {

  constructor(public db: AngularFirestore) { }

  getAll(){
    return this.db.collection(COLLECTION_NAME).snapshotChanges();
  }

  getByKey(centerKey){
    return this.db.collection(COLLECTION_NAME).doc(centerKey).snapshotChanges();
  }

  create(value){
    return this.db.collection(COLLECTION_NAME).add({
      name: value.name,
      address: value.address,
      phoneNumber: value.phoneNumber
    });
  }

  update(centerKey, value){
    return this.db.collection(COLLECTION_NAME).doc(centerKey).set(value);
  }

  delete(centerKey){
    return this.db.collection(COLLECTION_NAME).doc(centerKey).delete();
  }
}
