import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  scroll(elementId: string): void { 
    
}

}
