import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  doLogin(email: string, senha: string) {
    // return this.http.post(this.API_URL+ '/auth', contato, this.httpOptions)

    if (email === 'email@email.com' && senha === '123') {
      return of({
        usuario: {
          nome: 'ricardo',
          sobrenome: 'naga',
          email: 'email@email.com',
        },
        token: 'umtoken'
      })
    }

    throwError('Usuário ou senha incorretos')
  }
}
