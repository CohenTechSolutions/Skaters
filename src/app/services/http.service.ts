import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/Login';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string = environment.apiUrl;

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  });

  fazerLogin(login: Login){
    return this.http.post(this.url + "login/fazerlogin", login).pipe(take(1));
  }

  listarLogin(){
    return this.http.get(this.url + "login");
  }

  criarLogin(login: Login){
    return this.http.post(this.url + "login", login).pipe(take(1));
  }

  deletarLogin(id: number){
    return this.http.delete(this.url + "/" + id).pipe(take(1));
  }
}
