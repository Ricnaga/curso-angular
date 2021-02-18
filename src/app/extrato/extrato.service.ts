import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Transactions {
  id: number;
  data: string;
  descricao: string;
  valor: number;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor(private http:HttpClient) {}

  getTransacoes(){
    return this.http.get<Transactions[]>('http://localhost:3000/transacoes');
  //   return [{
  //     id: 1,
  //     data: "2020-02-04T13:00:24.744Z",
  //     descricao: "Salario",
  //     valor: 3500,
  //     "categoria": "Salário"
  //   },
  //   {
  //     id: 2,
  //     data: "2020-02-05T14:21:24.744Z",
  //     descricao: "Sapato verde",
  //     valor: -235.99,
  //     categoria: "Vestuário"
  //   },
  //   {
  //     id: 3,
  //     data: "2020-02-05T15:00:24.744Z",
  //     descricao: "Notebook",
  //     valor: -10231.99,
  //     categoria: "Eletrônicos"
  //   },
  //   ]
  }
}
