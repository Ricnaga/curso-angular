import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent  {
  @Input() newTitle: string;

  title = 'Seja bem-vindo from header';

  constructor(
    private authService: AuthService
  ) { }


  logout() {
    this.authService.logout()
  }
}
