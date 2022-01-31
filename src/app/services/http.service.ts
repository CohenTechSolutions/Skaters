import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/Login';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { LoginPublico } from '../models/LoginPublico';
import { Cadastro } from '../models/Cadastros';
import { LoginNovo } from '../models/LoginNovo';

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
    return this.http.get<LoginPublico[]>(this.url + "login");
  }

  criarLogin(login: Login){
    return this.http.post(this.url + "login", login).pipe(take(1));
  }

  deletarLogin(id: number){
    return this.http.delete(this.url + "login/" + id).pipe(take(1));
  }

  editarLogin(login: LoginNovo){
    return this.http.put(this.url+"login", login).pipe(take(1));
  }

  listarCadastros(){
    return this.http.get<Cadastro[]>(this.url + "cadastros");
  }

  criarCadastros(cadastro: Cadastro){
    return this.http.post(this.url + "cadastros", cadastro).pipe(take(1));
  }

  editarCadastro(cadastro: Cadastro, Id: number){
    return this.http.put(this.url + "cadastros/" + Id, cadastro).pipe(take(1));
  }

  deletarCadastro(id: number){
    return this.http.delete(this.url + "cadastros/" + id).pipe(take(1));
  }
}
