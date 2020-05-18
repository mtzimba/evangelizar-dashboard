import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

const COLLECTION_NAME = "centros";

@Injectable({
  providedIn: 'root'
})
export class CentrosFirebaseService {

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
      endereco: value.endereco,
      telefone: value.telefone
    });
  }

  update(key, value){
    return this.db.collection(COLLECTION_NAME).doc(key).set({
      nome: value.nome,
      endereco: value.endereco,
      telefone: value.telefone
    });
  }

  delete(key){
    return this.db.collection(COLLECTION_NAME).doc(key).delete();
  }
}
