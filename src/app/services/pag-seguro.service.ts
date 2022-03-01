import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Pagamento } from '../models/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagSeguroService {
  url = "https://sandbox.api.pagseguro.com/charges";
  //url = "http://localhost:4200/api"

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'Authorization': '62E9566FAF5A442289B4D6F4C9F5826F',
    'x-api-version': '4.0',
    'Content-Type':'application/json',
    //'Access-Control-Allow-Origin': 'https://pagseguro.uol.com.br'
    'Access-Control-Allow-Origin': 'https://sandbox.pagseguro.uol.com.br'
  });

  cobranca(pagamento: Pagamento){
    return this.http.post(this.url, pagamento, {headers: this.headers}).pipe(take(1));
  }
}
