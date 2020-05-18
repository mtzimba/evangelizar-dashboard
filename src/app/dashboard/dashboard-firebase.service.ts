import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

const COLLECTION_EVENTOS = "eventos";
const COLLECTION_PESSOAS = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class DashboardFirebaseService {

  constructor(public db: AngularFirestore) { }

  getEventos(){
    return this.db.collection(COLLECTION_EVENTOS).snapshotChanges();
  }

  getPessoasByEventos(evento){
    if (evento) {
      return this.db.collection(COLLECTION_PESSOAS, ref => ref.where('evento', '==', evento)).snapshotChanges();
    } else {
      return this.db.collection(COLLECTION_PESSOAS).snapshotChanges();
    }
    
  }

  deletePessoa(key){
    return this.db.collection(COLLECTION_PESSOAS).doc(key).delete();
  }
}
