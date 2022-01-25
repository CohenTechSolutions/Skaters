import { Component, Inject, Input, OnInit, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalRef?: BsModalRef;
  @Input() component: string;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  scroll(elementId: string): void { 
    document.getElementById(elementId).scrollIntoView({behavior: "smooth"});
}

}
