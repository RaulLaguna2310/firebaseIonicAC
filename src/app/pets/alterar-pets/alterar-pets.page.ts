import { PetsService } from './../../services/pets.service';
import { Component, OnInit } from '@angular/core';
import { pets } from 'src/app/models/pets';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar-pets',
  templateUrl: './alterar-pets.page.html',
  styleUrls: ['./alterar-pets.page.scss'],
})
export class AlterarPetsPage implements OnInit {
  pet: pets = new pets();

  constructor(
    private ptService: PetsService,
    private route: Router,
    private rotaAtivada: ActivatedRoute
  ) {
    this.pet.id = this.rotaAtivada.snapshot.params['id'];
  }

  ngOnInit() {
    this.ptService.buscarPorId(this.pet.id).subscribe((dados: any) => {
      this.pet.nome = dados['nome'];
      this.pet.especie = dados['especie'];
      this.pet.idade = dados['idade'];
      this.pet.obs = dados['obs'];
    });
  }

  salvar() {
    this.ptService.alterar(this.pet);
    this.route.navigateByUrl('/');
  }
}
