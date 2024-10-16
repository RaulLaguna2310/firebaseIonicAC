import { Component } from '@angular/core';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { cuidadores } from 'src/app/models/cuidadores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cuidadores',
  templateUrl: './cadastro-cuidadores.page.html',
  styleUrls: ['./cadastro-cuidadores.page.scss'],
})
export class CadastroCuidadoresPage  {

  cuidador: cuidadores = new cuidadores();

  constructor(private cdServices : CuidadoresService, private route : Router) { }

  

  salvar(){
    this.cdServices.salvar(this.cuidador);
    this.route.navigateByUrl('/');
  }

}
