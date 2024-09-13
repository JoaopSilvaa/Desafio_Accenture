import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private apiUrl = '/api/fornecedor';

  constructor(private http: HttpClient) { }

  listarFornecedores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  salvarFornecedor(fornecedor: any): Observable<any> {
    return this.http.post(this.apiUrl, fornecedor);
  }

  excluirFornecedor(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  listaFornecedorPorID(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }
}
