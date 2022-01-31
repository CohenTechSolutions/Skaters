import { Component, Inject, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Login } from 'src/app/models/Login';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalRef?: BsModalRef;
  @Input() component: string;
  isLoading: boolean = false;
  credenciais: Login = new Login();
  erroLogin: boolean = false;
  logado: boolean = false;

  constructor(private modalService: BsModalService,
              private _service: HttpService,
              private route: Router) { }

  ngOnInit(): void {
    if("logged" in sessionStorage){
      this.logado = true;
      this.credenciais.Usuario = sessionStorage.getItem("logged");
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  scroll(elementId: string): void {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
  }

  login() {
    this.isLoading = true;
    this._service.fazerLogin(this.credenciais).subscribe(response =>{
      this.isLoading = false;
      if(response){
        this.modalService.hide();
        sessionStorage.setItem("logged", this.credenciais.Usuario);
        this.route.navigate(["admin"]);
      }else{
        this.erroLogin = true;
      }
    })
  }

  closeModal(){
    this.modalService.hide();
  }

  fecharAlert(){
    this.erroLogin = false;
  }

  logOut(){
    sessionStorage.clear();
    window.location.reload();
  }

  admin(){
    this.route.navigate(["admin"]);
  }

}
