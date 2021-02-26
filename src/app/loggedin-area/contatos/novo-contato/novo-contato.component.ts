import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss']
})
export class NovoContatoComponent implements OnInit {
  contatoForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contatoForm = this.formBuilder.group({
      nome: [''],
      banco: ['']
    });

  }
  salvarContato(){

  }

}
