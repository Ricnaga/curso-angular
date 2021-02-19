import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService
  ) { }

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
        .pipe(
          tap(response => {
            this.authService.setUser(response.usuario)
          })
        )
    }

    throwError('Usuário ou senha incorretos')
  }
}
