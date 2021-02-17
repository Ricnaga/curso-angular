import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-exec',
  templateUrl: './pipe-exec.component.html',
  styleUrls: ['./pipe-exec.component.scss']
})
export class PipeExecComponent  {

  filme = {
    titulo: 'Harry Potter - A pedra filosofal',
    estrelas: 4.56565656,
    precoAluguel:15.45,
    dataLancamento: new Date(2021, 2, 17)
  };

}
