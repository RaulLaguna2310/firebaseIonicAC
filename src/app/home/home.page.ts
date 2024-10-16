
import { Component, OnInit } from '@angular/core';
import { PetsService } from '../services/pets.service';
import { pets } from '../models/pets';
import { AlertController } from '@ionic/angular';
import { cuidadores } from '../models/cuidadores';
import { CuidadoresService } from '../services/cuidadores.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public listaPets: pets[] = [];
  public listaCuidadores: cuidadores[] = [];

  constructor(private ptService : PetsService,
              private cdService : CuidadoresService,
              private alertController : AlertController) {}

  ngOnInit() {
    this.buscarPets();
    this.buscarCuidadores();
  }

  buscarCuidadores(){
    this.cdService.buscarCuidadores().subscribe(dadosRetorno => {
      this.listaCuidadores = dadosRetorno.map((registro:any) => (
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()['nome'],
          telefone: registro.payload.doc.data()['telefone'],
          experiencia: registro.payload.doc.data()['experiencia'],
          especialidade: registro.payload.doc.data()['especialidade']
        }
      ))
    })
  }

  async daletarCuidadores(id: string){
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão deste Cuidador?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.cdService.deletar(id);
          },
        },
      ],
    });
    await alert.present();
    this.buscarCuidadores();
  }



  buscarPets(){
    this.ptService.buscarPets().subscribe(dadosRetorno => {
      this.listaPets = dadosRetorno.map((registro:any) => (
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()['nome'],
          especie: registro.payload.doc.data()['especie'],
          idade: registro.payload.doc.data()['idade'],
          obs: registro.payload.doc.data()['obs'],
        }
      ));
    });
  }

  async daletarPets(id: string){
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão deste Pet?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.ptService.deletar(id);
          },
        },
      ],
    });
    await alert.present();
    this.buscarPets();
  }
}
