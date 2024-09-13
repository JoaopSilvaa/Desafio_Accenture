import {Component, OnInit} from '@angular/core';
import {CommonModule, DatePipe, NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FornecedorService} from "../services/fornecedor.service";
import {FornecedorDialogComponent} from "../fornecedor-dialog/fornecedor-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    NgForOf,
    ],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css',
  providers: [DatePipe]
})

export class FornecedorComponent implements OnInit {
  fornecedores: any[] = [];

  constructor(private fornecedorService: FornecedorService, public dialog: MatDialog,  private datePipe: DatePipe,) { }

  ngOnInit(): void {
    this.fornecedorService.listarFornecedores().subscribe(data => {
      this.fornecedores = data;

      console.log(data);
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

          console.log(data);
        });
      }
    });
  }

  formatarData(data: string): string {
    console.log(data);
    return this.datePipe.transform(data, 'dd/MM/yyyy') || '';

  }

}
