import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {EmpresaService} from "../services/empresa.service";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {CepService} from "../services/cep.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-empresa-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton,
    MatDialogContent,
    MatDialogTitle,

  ],
  templateUrl: './empresa-dialog.component.html',
  styleUrl: './empresa-dialog.component.css'
})
export class EmpresaDialogComponent {
  empresaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EmpresaDialogComponent>,
    private fb: FormBuilder,
    private empresaService: EmpresaService,
    private cepService: CepService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empresaForm = this.fb.group({
      cnpj: [''],
      nomeFantasia: [''],
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
      this.empresaService.salvarEmpresa(this.empresaForm.value).subscribe(response => {
        this.dialogRef.close(true);
      });
    } else {
      this.openSnackBar('Todos os campos devem ser preenchidos.', 'Fechar');
}
  }

  onChange(): void {

    if(this.empresaForm.value.cep.length == 8) {
      this.cepService.listaCEP(this.empresaForm.value.cep).subscribe(response => {
        this.empresaForm.patchValue({
          logradouro: response.logradouro,
          bairro: response.bairro,
          cidade: response.localidade,
          estado: response.estado
        });
        if(response.erro) {
          console.error('Erro ao buscar o CEP:');
          this.openSnackBar('Erro ao buscar o CEP. Verifique o valor informado.', 'Fechar');
        }
      });
    }
  }

  validarFormulario(): boolean {
    return Object.values(this.empresaForm.controls).every(control => control.value.trim() !== '');
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000, // Duração do Snackbar em milissegundos
    });
  }
}
