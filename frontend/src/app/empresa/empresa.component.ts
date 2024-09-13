import { Component, OnInit } from '@angular/core';
import {EmpresaService} from "../services/empresa.service";
import {CommonModule, NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterOutlet} from "@angular/router";
import {EmpresaDialogComponent} from "../empresa-dialog/empresa-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    NgForOf, FormsModule, MatFormField, MatInput, MatLabel, ReactiveFormsModule
  ],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})

export class EmpresaComponent implements OnInit {
  empresas: any[] = [];
  filtro: String = '';
  empresasFixo: any[] = [];

  constructor(private empresaService: EmpresaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.empresaService.listarEmpresas().subscribe(data => {
      this.empresasFixo = data;
      this.empresas = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmpresaDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.empresaService.listarEmpresas().subscribe(data => {
          this.empresasFixo = data;
          this.empresas = data;
        });
      }
    });
  }

  deleteItem(id: number): void {
    if (confirm('Tem certeza que deseja deletar este item?')) {
      this.empresaService.excluirEmpresa(id).subscribe(() => {
        this.empresaService.listarEmpresas().subscribe(data => {
          this.empresasFixo = data;
          this.empresas = data;
        });
      });
    }
  }


  onChange(): void {
    this.empresas = this.empresasFixo.filter(empresa => {
      return this.filtro == '' || (empresa.nomeFantasia.includes(this.filtro) || empresa.cnpj.toString().includes(this.filtro));
    })
  }


}
