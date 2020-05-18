import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

const COLLECTION_NAME = "eventos";

@Injectable({
  providedIn: 'root'
})
export class EventosFirebaseService {

  constructor(public db: AngularFirestore) { }

  getAll(){
    return this.db.collection(COLLECTION_NAME).snapshotChanges();
  }

  getByKey(centerKey){
    return this.db.collection(COLLECTION_NAME).doc(centerKey).snapshotChanges();
  }

  create(value){
    return this.db.collection(COLLECTION_NAME).add({
      nome: value.nome,
      descricao: value.descricao
    });
  }

  update(key, value){
    return this.db.collection(COLLECTION_NAME).doc(key).set({
      nome: value.nome,
      descricao: value.descricao
    });
  }

  delete(key){
    return this.db.collection(COLLECTION_NAME).doc(key).delete();
  }
}
