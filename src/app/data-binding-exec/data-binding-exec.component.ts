import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-binding-exec',
  templateUrl: './data-binding-exec.component.html',
  styleUrls: ['./data-binding-exec.component.scss']
})
export class DataBindingExecComponent implements OnInit {
  @Input() palavra: string;
  @Input() color: string;
  @Output() clicado = new EventEmitter();

  imageURL = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80';
  initialValue = 'valor Inicial';
  isDisabled = true;
  accessibilityText = 'um texto acessível';

  valorDoInput = '';

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled', this.isDisabled);
    }, 3000);
  }

  onClick($event) {
    console.log('clicou', $event);
  }

  digitouAlgo($event) {
    this.valorDoInput = $event.target.value;
    console.log($event);
  }

  passouMouse() {
    console.log('Alguém passou o mouse')
  }
  ngOnInit(): void {
  }

  onClickBotaoEmissor($event) {
    console.log('devo emitir informação ao componente pai');
    this.clicado.emit($event);
  }

}
