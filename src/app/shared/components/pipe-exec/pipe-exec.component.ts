import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-exec',
  templateUrl: './pipe-exec.component.html',
  styleUrls: ['./pipe-exec.component.scss'],
  providers: [
    DecimalPipe
  ]
})
export class PipeExecComponent {

  constructor(
    private decimalPipe: DecimalPipe
  ){}
  filme = {
    titulo: 'Harry Potter - A pedra filosofal',
    estrelas: 4.56565656,
    precoAluguel: 15.45,
    dataLancamento: new Date(2021, 2, 17)
  };

  compras = [{
    produto: 'lâmpadas',
    valor: 299.29,
    quantidade: 2,
    peso: 0,
    data: new Date(2021, 1, 1, 15, 20)
  },{
    produto:'fartinha',
    valor: 450.29,
    peso:29.33333,
    quantidade:2,
    data: new Date(2021, 1, 10, 19, 30)
  }];
  getPesoFormatado(peso: number){
if(peso <= 0){
return 'sem peso'
}

return this.decimalPipe.transform(peso, '1.1-2')+ ' Kg'
  }
}
