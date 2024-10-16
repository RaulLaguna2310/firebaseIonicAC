import { Component, OnInit } from '@angular/core';
import { CuidadoresService } from './../../services/cuidadores.service';
import { cuidadores } from 'src/app/models/cuidadores';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar-cuidadores',
  templateUrl: './alterar-cuidadores.page.html',
  styleUrls: ['./alterar-cuidadores.page.scss'],
})
export class AlterarCuidadoresPage implements OnInit {

  cuidador: cuidadores = new cuidadores();

  constructor(private cdService : CuidadoresService, private route: Router, private rotaAtiva: ActivatedRoute) {
    this.cuidador.id = this.rotaAtiva.snapshot.params['id']
   }

  ngOnInit() {
    this.cdService.buscarPorId(this.cuidador.id).subscribe((dados:any) => {
      this.cuidador.nome = dados['nome'];
      this.cuidador.telefone = dados['telefone'];
      this.cuidador.experiencia = dados['experiencia'];
      this.cuidador.especialidade = dados['especialidade']
    })
  }

  salvar(){
    this.cdService.alterar(this.cuidador);
    this.route.navigateByUrl('/')
  }

}
