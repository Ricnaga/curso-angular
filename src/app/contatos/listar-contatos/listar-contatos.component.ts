import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ContatosService } from '../contatos.service';

interface Contacts {
  id: number;
  nome: string;
  cpf: string;
  banco: string;
  ag: string;
  cc: string;
}

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class ListarContatosComponent implements OnInit {

  contatos: Contacts[]
  loadingError: boolean;
  isLoading: boolean;

  constructor(
    private contatosService: ContatosService,
    private router: Router
  ) { }

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

  goToDetails(idContato:string) {
    this.router.navigate([`contatos/${idContato}`])
  }
}
