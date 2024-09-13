import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = '/api/empresa';

  constructor(private http: HttpClient) { }

  listarEmpresas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  salvarEmpresa(empresa: any): Observable<any> {
    return this.http.post(this.apiUrl, empresa);
  }

  excluirEmpresa(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  listaEmpresaPorID(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }
}
