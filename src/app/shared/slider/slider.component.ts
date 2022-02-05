import { Component, OnInit } from '@angular/core';

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

  constructor() { }
  numeroPorSlide = 3;

  ngOnInit(): void {
    if(screen.width <= 750){
      this.numeroPorSlide = 1;
    }
  }

  onSwiper(swiper: any) {
  }
  onSlideChange() {
  }

}
