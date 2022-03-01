import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private modalService: BsModalService) { }
  numeroPorSlide = 3;
  modalRef?: BsModalRef;

  ngOnInit(): void {
    if(screen.width <= 750){
      this.numeroPorSlide = 1;
    }
  }

  onSwiper(swiper: any) {
  }
  onSlideChange() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal(){
    this.modalService.hide();
  }

}
