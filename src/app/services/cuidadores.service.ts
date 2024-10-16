import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { cuidadores } from './../models/cuidadores'

@Injectable({
  providedIn: 'root'
})
export class CuidadoresService {

  constructor(private afs:AngularFirestore) { }

  salvar(cuidador : cuidadores){
    return this.afs.collection('cuidadores').add({ ...cuidador });
  }

  buscarCuidadores(){
    return this.afs.collection('cuidadores').snapshotChanges();
  }

  buscarPorId(id: string){
    return this.afs.collection('pets').doc(id).valueChanges();
  }

  alterar(cuidador: cuidadores){
    return this.afs.collection('pets').doc(cuidador.id).update({ ...cuidador });
  }

  deletar(id: string){
    return this.afs.doc('pets/' + id).delete();
  }
}


