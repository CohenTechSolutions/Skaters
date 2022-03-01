import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Pagamento } from '../models/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagSeguroService {
  url = "https://localhost:44323/api/pagamento";

  constructor(private http: HttpClient) { }

  cobranca(pagamento: Pagamento){
    return this.http.post(this.url, pagamento).pipe(take(1));
  }
}
