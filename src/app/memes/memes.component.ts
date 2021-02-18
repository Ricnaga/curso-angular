import { Component } from '@angular/core';
import {MEMES_AGRUPADOS_POR_CATEGORIA} from '../../memesDiretivas/dados.js';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent {
 MEMES = MEMES_AGRUPADOS_POR_CATEGORIA;
}
