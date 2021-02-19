import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Contacts {
  id: number;
  nome: string;
  cpf: string;
  banco: string;
  ag: string;
  cc: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  API_URL_CONTATOS = environment.API_URL_CONTATOS

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Autenticação"
    })
  };

  constructor(private http: HttpClient) { }

  getContatos() {
    return this.http.get<Contacts[]>(this.API_URL_CONTATOS)
  }

  getContato(id: string) {
    return this.http.get<Contacts>(this.API_URL_CONTATOS + '/' + id, this.httpOptions)
  }

  createContato(contato: Contacts) {
    return this.http.post<Contacts>(this.API_URL_CONTATOS, contato, this.httpOptions)
  }

  updateContato(id: string, contato: Contacts) {
    return this.http.get<Contacts>(this.API_URL_CONTATOS + '/' + id)
  }

  deleteContato(id: string) {
    return this.http.delete<Contacts>(this.API_URL_CONTATOS + '/' + id)
  }
}
