import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';
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
  selector: 'app-detalhes-contatos',
  templateUrl: './detalhes-contatos.component.html',
  styleUrls: ['./detalhes-contatos.component.scss']
})
export class DetalhesContatosComponent implements OnInit {
  contato: Contacts;
  isLoading: boolean;
  loadingError: boolean;

  constructor(
    private route: ActivatedRoute,
    private contatosService: ContatosService,
    private router: Router
  ) { }

  ngOnInit() {
    const idContato = this.route.snapshot.paramMap.get('id')
    this.loadContato(idContato)
  }

  loadContato(idContato: string) {
    this.isLoading = true
    this.loadingError = false;
    this.contatosService.getContato(idContato)
      .pipe(
        take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response: Contacts) {
    this.contato = response;
  }

  onError(error: any) {
    this.loadingError = true;
  }

  goBack(){
    this.router.navigate([`contatos`])
  }
}
