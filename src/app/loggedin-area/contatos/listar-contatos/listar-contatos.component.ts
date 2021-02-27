import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
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

  goToDetails(idContato: number) {
    this.router.navigate([`contatos/${idContato}`])
  }

  deleteContact(idContato: number) {
    this.contatosService.deleteContato(idContato)
      .subscribe(
        response => this.onSuccessDeletarContato(idContato),
        error => this.onErrorDeletarContato(),
      )
  }

  onSuccessDeletarContato(idContato: number) {
    this.contatos = this.contatos.filter(
      contato => contato.id !== idContato)
    this.toastr.success('Sucesso!', 'Contato foi deletado com sucesso')
  }

  onErrorDeletarContato() {
    console.log('Ocorreu um erro ao deletar contato')
  }

  newContact() {
    this.router.navigate([`contatos/novo`])
  }

  editContact(idContato: number) {
    this.router.navigate([`contatos/${idContato}/editar`])
  }
}
