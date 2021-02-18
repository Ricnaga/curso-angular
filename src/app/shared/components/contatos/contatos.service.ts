import { HttpClient } from '@angular/common/http';
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

  constructor(private http:HttpClient) { }

  getContatos(){
    return this.http.get<Contacts[]>(this.API_URL_CONTATOS)
  }

  getContato(id:string){
    return this.http.get<Contacts>(this.API_URL_CONTATOS+'/'+id)
  }
}
