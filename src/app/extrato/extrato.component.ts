import { Component, OnInit } from '@angular/core';
import { ExtratoService } from './extrato.service';

interface Transactions {
  id: number;
  data: string;
  descricao: string;
  valor: number;
  categoria: string;
}

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})


export class ExtratoComponent implements OnInit {

  transacoes:Transactions[];


  constructor(private extratoService: ExtratoService) {
  }

  ngOnInit() {
    this.extratoService.getTransacoes().subscribe(response => {
      this.transacoes = response;
    })
  }

}
