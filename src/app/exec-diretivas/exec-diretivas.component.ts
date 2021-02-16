import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exec-diretivas',
  templateUrl: './exec-diretivas.component.html',
  styleUrls: ['./exec-diretivas.component.scss']
})
export class ExecDiretivasComponent {
  listaFrutas = [
    'Maçã', 'Laranja', 'Mamão', 'Pêra'
  ];

  carrosLista = [
    {
      placa: 'JND-7438',
      cor: 'preto'
    },
    {
      placa: 'JGG-20394',
      cor: 'azul'
    },
    {
      placa: 'JND-1239',
      cor: 'branco'
    },
    {
      placa: 'OGK-7095',
      cor: 'vermelho'
    },
  ];

  deveExibir = false;

  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  soma(n1, n2) {
    return n1 + n2;
  }
}
