import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  wordApp = 'uma palavra do appcomponent';
  favoriteColor = 'green';
  title = 'titulo via appComponent';

  constructor() {
    setTimeout(() => {
      this.title = 'titulo alterado em 3 segundos';
    }, 3000);
  }
}
