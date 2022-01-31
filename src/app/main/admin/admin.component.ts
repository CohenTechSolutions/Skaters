import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Cadastro } from 'src/app/models/Cadastros';
import { Login } from 'src/app/models/Login';
import { LoginNovo } from 'src/app/models/LoginNovo';
import { LoginPublico } from 'src/app/models/LoginPublico';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  cadastros: Cadastro[];
  cadastroSelecionado: Cadastro = new Cadastro();
  loginSelecionado: Login = new Login();
  loginNovo: LoginNovo = new LoginNovo();
  logins: LoginPublico[];
  isLoading: boolean = true;
  modalRef?: BsModalRef;
  acaoLoading: boolean = false;

  @ViewChild('info', { static: false }) staticTabs?: TabsetComponent;

  constructor(private route: Router,
              private _service: HttpService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    if(!("logged" in sessionStorage)){
      this.route.navigate([""]);
    }
    this.getInfo();
    
  }

  getInfo(){
    this._service.listarCadastros().subscribe(response =>{
      this.cadastros = response;
    }, error =>{console.log("erro ao listar os cadastros");});
    this._service.listarLogin().subscribe(response =>{
      this.logins = response;
      this.isLoading = false;
    }, error =>{console.log("erro ao listar os administradores")})
  }

  editarCadastro(){
    this.acaoLoading = true;
    this._service.editarCadastro(this.cadastroSelecionado, this.cadastroSelecionado.id).subscribe(response =>{
      if(response){
        this.acaoLoading = false;
        this.getInfo();
        this.closeModal();
      }
    })
  }

  deletarCadastro(){
    this.acaoLoading = true;
    this._service.deletarCadastro(this.cadastroSelecionado.id).subscribe(response => {
      this.acaoLoading = false;
      this.getInfo();
      this.closeModal();
    })
  }

  criarCadastro(){
    this.acaoLoading = true;
    this._service.criarCadastros(this.cadastroSelecionado).subscribe(response =>{
      this.acaoLoading = false;
      this.getInfo();
      this.closeModal();
    })
  }

  criarLogin(){
    this.acaoLoading = true;
    this._service.criarLogin(this.loginSelecionado).subscribe(response =>{
      this.acaoLoading = false;
      this.getInfo();
      this.closeModal();
    })
  }

  editarLogin(){
    this.loginNovo.usuario = this.loginSelecionado.usuario;
    this.acaoLoading = true;
    this._service.editarLogin(this.loginNovo).subscribe(response =>{
      this.acaoLoading = false;
      this.getInfo();
      this.closeModal();
    })
  }

  deletarLogin(){
    this.acaoLoading = true;
    this._service.deletarLogin(this.loginSelecionado.id).subscribe(response =>{
      this.acaoLoading = false;
      this.getInfo();
      this.closeModal();
    })
  }

  openModal(template: TemplateRef<any>, i?: number){
    if(i != undefined){
      if(this.staticTabs?.tabs[0].active){
        this.cadastroSelecionado = this.cadastros[i];
      }else{
        this.loginSelecionado.id = i+1;
        this.loginSelecionado.usuario = this.logins[i].usuario;
      }
    }
    this.modalRef = this.modalService.show(template);
  }

  closeModal(){
    this.modalService.hide();
    this.cadastroSelecionado = new Cadastro();
    this.loginSelecionado = new LoginNovo();
  }

}
