import { Component, TemplateRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Cadastro } from 'src/app/models/Cadastros';
import { Login } from 'src/app/models/Login';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalRef?: BsModalRef;
  isLoading: boolean = false;
  credenciais: Login = new Login();
  cadastro: Cadastro = new Cadastro();
  erroLogin: boolean = false;
  logado: boolean = false;

  constructor(private modalService: BsModalService,
              private _service: HttpService,
              private route: Router) { }

  ngOnInit(): void {
    if("logged" in sessionStorage){
      this.logado = true;
    }
    if(!('primeiraVez' in sessionStorage)){
      document.getElementById('abrirPopUp').click();
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openPopUp(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'modal-xl' }
      ));
  }

  scroll(elementId: string): void {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
  }

  closeModal(){
    this.modalService.hide();
    sessionStorage.setItem('primeiraVez', 'n');
  }

  login() {
    this.isLoading = true;
    this._service.fazerLogin(this.credenciais).subscribe(response =>{
      this.isLoading = false;
      if(response){
        this.modalService.hide();
        sessionStorage.setItem("logged", this.credenciais.usuario);
        this.route.navigate(["admin"]);
      }else{
        this.erroLogin = true;
      }
    })
  }

  cadastrar(){
    this.isLoading = true;
    this._service.criarCadastros(this.cadastro).subscribe(response =>{
      if(response){
        this.closeModal();
      } else{
        this.erroLogin = true;
      }
      this.isLoading = false;

    })
  }

  fecharAlert(){
    this.erroLogin = false;
  }

}
