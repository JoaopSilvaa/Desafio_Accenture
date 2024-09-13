import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FornecedorService } from '../services/fornecedor.service';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { CepService } from '../services/cep.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-fornecedor-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatDialogActions,
    MatButton,
    MatDialogContent,
    MatDialogTitle,
    NgIf,
  ],
  templateUrl: './fornecedor-dialog.component.html',
  styleUrls: ['./fornecedor-dialog.component.css']
})
export class FornecedorDialogComponent {
  fornecedorForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FornecedorDialogComponent>,
    private fb: FormBuilder,
    private fornecedorService: FornecedorService,
    private cepService: CepService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fornecedorForm = this.fb.group({
      cnpj_CPF: [''],
      nome: [''],
      rg: [''],
      data_de_Nascimento: [''],
      email: [''],
      cep: [''],
      logradouro: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      numero: ['']
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.validarFormulario()) {
      if (this.validarIdade()) {
        this.fornecedorService.salvarFornecedor(this.fornecedorForm.value).subscribe(response => {
          this.dialogRef.close(true);
        });
      } else {
        this.openSnackBar('Não é permitido cadastro para menores de 18 anos em seu estado.', 'Fechar');
      }
    } else {
      this.openSnackBar('Todos os campos devem ser preenchidos.', 'Fechar');
    }
  }

  onChange(): void {
    if (this.fornecedorForm.value.cep.length == 8) {
      this.cepService.listaCEP(this.fornecedorForm.value.cep).subscribe(response => {
        this.fornecedorForm.patchValue({
          logradouro: response.logradouro,
          bairro: response.bairro,
          cidade: response.localidade,
          estado: response.estado
        });
      });
    }
  }

  validarFormulario(): boolean {
    return Object.keys(this.fornecedorForm.controls).every(controlName => {
      const control = this.fornecedorForm.get(controlName);
      if (controlName === 'rg' || controlName === 'data_de_Nascimento') {
        return true;
      }
      return control?.value.toString().trim() !== '';
    });
  }

  validarCPF(): boolean {
    return this.fornecedorForm.value.cnpj_CPF.toString().length == 11;
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000, // Duração do Snackbar em milissegundos
    });
  }

  validarIdade(): boolean {
    const hoje = new Date();
    const nascimento = new Date(this.fornecedorForm.value.data_de_Nascimento);
    const diferencaDatas = hoje.getTime() - nascimento.getTime();
    const idade = Math.floor(Math.ceil(Math.abs(diferencaDatas) / (1000 * 3600 * 24)) / 365.25);
    return !(this.fornecedorForm.value.estado == 'Paraná' && idade < 18);
  }
}
