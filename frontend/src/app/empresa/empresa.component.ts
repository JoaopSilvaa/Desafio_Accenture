import { Component, OnInit } from '@angular/core';
import {EmpresaService} from "../services/empresa.service";
import {CommonModule, NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterOutlet} from "@angular/router";
import {EmpresaDialogComponent} from "../empresa-dialog/empresa-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    NgForOf
  ],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})

export class EmpresaComponent implements OnInit {
  empresas: any[] = [];

  constructor(private empresaService: EmpresaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.empresaService.listarEmpresas().subscribe(data => {
      this.empresas = data;

      console.log(data);
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
          this.empresas = data;

          console.log(data);
        });
      }
    });
  }
}
