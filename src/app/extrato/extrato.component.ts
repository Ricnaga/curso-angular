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

  transacoes: Transactions[];
  isLoading: boolean;
  loadingError: boolean;

  constructor(private extratoService: ExtratoService) {
  }

  ngOnInit() {
    this.loadExtrato();
  }

  loadExtrato() {
    this.isLoading = true;
    this.loadingError = false;

    this.extratoService.getTransacoes().subscribe(response => {
      this.isLoading = false;
      this.transacoes = response;
    }), error => {
      this.isLoading = false;
      this.loadingError = true;

    }
  }

}
