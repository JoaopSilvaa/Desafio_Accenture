import { Routes } from '@angular/router';
import {EmpresaComponent} from "./empresa/empresa.component";
import {FornecedorComponent} from "./fornecedor/fornecedor.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [

  { path: '', component: AppComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'fornecedor', component: FornecedorComponent },
  { path: '**', redirectTo: '' }
  ];
