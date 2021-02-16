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
  receiveValue = 0;

  constructor() {
    setTimeout(() => {
      this.title = 'titulo alterado em 3 segundos';
    }, 3000);
  }

  eventoRecebido($event) {
    console.log('Appcomponent:evento recebido!', $event);
  }

  addChanges($event) {
    this.receiveValue += 1;
  }

  subChanges($event) {
    this.receiveValue -= 1;
  }
}
