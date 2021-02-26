import { Component, OnInit } from '@angular/core';
import { ExtratoService } from './extrato.service';
import { finalize, take } from 'rxjs/operators'

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
  pages = 1;

  constructor(private extratoService: ExtratoService) {
  }

  ngOnInit() {
    this.loadExtrato();
  }

  loadExtrato() {
    this.isLoading = true;
    this.loadingError = false;

    this.extratoService.getTransacoes(this.pages)
      .pipe(take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
          response => this.onSuccess(response),
          error => this.onError(error))
  }

  onSuccess(response: Transactions[]) {
    this.transacoes = response;
  }

  onError(error: any) {
    this.loadingError = true;
  }

  previousPage(){
    this.pages--;
    this.loadExtrato()
  }

  nextPage(){
    this.pages++;
    this.loadExtrato()
  }
}
