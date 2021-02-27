import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';
import { ContatosService } from '../contatos.service';

interface Contacts {
  id: number;
  nome: string;
  cpf: string;
  banco: string;
  ag: string;
  cc: string;
}

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.scss']
})
export class EditarContatoComponent implements OnInit {
  contatoForm: FormGroup
  idContato: string
  contato: Contacts;
  isLoading: boolean;
  loadingError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private contatosService: ContatosService
  ) { }

  ngOnInit(): void {
    this.initForm()
    this.idContato = this.route.snapshot.paramMap.get('id')

    if (this.isEditting()) {
      this.loadContato(this.idContato)
    }
  }
  isEditting = () => Boolean(this.idContato)

  initForm() {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      banco: ['', [Validators.required]],
      ag: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      cc: ['', [
        Validators.required,
        Validators.minLength(5)
      ]]
    });
  }

  onSubmit() {
    if (this.contatoForm.invalid) {
      this.validateAllFormField()

      return
    }

    if (this.isEditting()) {
      this.salvarContato()
      return
    }

    this.criarContato()
  }

  criarContato() {
    this.contatosService.createContato(this.contatoForm.value)
      .subscribe(
        response => this.onSuccessCriarContato(),
        error => this.onError()
      )
  }

  salvarContato() {
    this.contatosService.updateContato(this.idContato, this.contatoForm.value)
      .subscribe(
        response => this.onSuccessSalvarContato(),
        error => this.onError()
      )
  }

  onSuccessCriarContato() {
    this.toastr.success('Sucesso!', 'Contato foi criado com sucesso')
    this.router.navigate(['contatos'])
  }

  onSuccessSalvarContato() {
    this.toastr.success('Sucesso!', 'Contato foi editado com sucesso')
    this.router.navigate(['contatos'])
  }

  onError() {
    this.toastr.error('Error!', 'Alguma coisa deu erro, tente novamente')
  }

  validateAllFormField() {
    Object.keys(this.contatoForm.controls)
      .forEach(field => {
        const control = this.contatoForm.get(field)
        control.markAsTouched()
      })
  }

  showErrorOnEmail(controlName: string) {

    if (!this.contatoForm.get(controlName)) {
      return false
    }
    return this.contatoForm.get(controlName).invalid && this.contatoForm.get(controlName).touched
  }

  loadContato(idContato: string) {
    this.isLoading = true
    this.loadingError = false;
    this.contatosService.getContato(idContato)
      .pipe(
        take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response => this.onSuccessloadContato(response),
        error => this.onErrorloadContato(error)
      )
  }

  onSuccessloadContato(response: Contacts) {
    this.contatoForm.patchValue(response)
  }

  onErrorloadContato(error: any) {
    this.loadingError = true;
  }
}
