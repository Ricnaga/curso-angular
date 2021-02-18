import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ContatosService } from './contatos.service';

interface Contacts {
  id: number;
  nome: string;
  cpf: string;
  banco: string;
  ag: string;
  cc: string;
}

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos:Contacts[]
  loadingError: boolean;
  isLoading: boolean;

  constructor(private contatosService: ContatosService) { }

  ngOnInit() {
    this.loadContatos()
  }

  loadContatos() {
    this.loadingError = false;
    this.contatosService.getContatos()
      .pipe(take(1))
      .subscribe(
        response => this.onSuccess(response),
          error => this.onError(error)
          )
  }

  onSuccess(response: Contacts[]) {
    this.contatos = response;
  }

  onError(error: any) {
    this.loadingError = true;
  }
}
