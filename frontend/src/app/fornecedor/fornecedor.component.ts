import {Component, OnInit} from '@angular/core';
import {CommonModule, DatePipe, NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FornecedorService} from "../services/fornecedor.service";
import {FornecedorDialogComponent} from "../fornecedor-dialog/fornecedor-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    NgForOf, FormsModule,
  ],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css',
  providers: [DatePipe]
})

export class FornecedorComponent implements OnInit {
  fornecedores: any[] = [];
  filtro: String = '';
  fornecedoresFixo: any[] = [];
  constructor(private fornecedorService: FornecedorService, public dialog: MatDialog,  private datePipe: DatePipe,) { }

  ngOnInit(): void {
    this.fornecedorService.listarFornecedores().subscribe(data => {
      this.fornecedores = data;
      this.fornecedoresFixo = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FornecedorDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fornecedorService.listarFornecedores().subscribe(data => {
          this.fornecedores = data;
          this.fornecedoresFixo = data;
        });
      }
    });
  }

  formatarData(data: string): string {
    return this.datePipe.transform(data, 'dd/MM/yyyy') || '';
  }

  deleteItem(id: number): void {
    if (confirm('Tem certeza que deseja deletar este item?')) {
      this.fornecedorService.excluirFornecedor(id).subscribe(() => {
        this.fornecedorService.listarFornecedores().subscribe(data => {
          this.fornecedores = data;
        });
      });
    }
  }

  onChange(): void {
    this.fornecedores = this.fornecedoresFixo.filter(fornecedor => {
      return this.filtro == '' || (fornecedor.nome.includes(this.filtro) || fornecedor.cnpj_CPF.toString().includes(this.filtro));
    })
  }

}
