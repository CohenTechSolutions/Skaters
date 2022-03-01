import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HomeComponent } from './main/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AulasComponent } from './main/aulas/aulas.component';
import { AdminComponent } from './main/admin/admin.component';
import { SliderComponent } from './shared/slider/slider.component';
import { SobreComponent } from './main/sobre/sobre.component';
import { CompraComponent } from './shared/compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AulasComponent,
    AdminComponent,
    SliderComponent,
    SobreComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    TabsModule.forRoot(),
    SwiperModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
