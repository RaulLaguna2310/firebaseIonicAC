import { PetsService } from './../../services/pets.service';
import { Component,  } from '@angular/core';
import { pets } from 'src/app/models/pets';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pets',
  templateUrl: './cadastro-pets.page.html',
  styleUrls: ['./cadastro-pets.page.scss'],
})
export class CadastroPetsPage{

  pet : pets = new pets();

  constructor(private ptService : PetsService, private route : Router) { }


  salvar(){
    this.ptService.salvar(this.pet);
    this.route.navigateByUrl('/')
  }

}
