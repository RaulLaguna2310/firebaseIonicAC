import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { pets } from '../models/pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private afs: AngularFirestore) { }

  salvar(pet: pets){
    return this.afs.collection('pets').add({ ...pet });
  }

  buscarPets(){
    return this.afs.collection('pets').snapshotChanges();
  }

  buscarPorId(id: string){
    return this.afs.collection('pets').doc(id).valueChanges();
  }

  alterar(pet: pets){
    return this.afs.collection('pets').doc(pet.id).update({ ...pet });
  }

  deletar(id: string){
    return this.afs.doc('pets/' + id).delete();
  }
}
