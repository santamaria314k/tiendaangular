import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomekComponent } from './homek.component';
import { MenuTiendaComponent } from '../menu-tienda/menu-tienda.component';
import { CatalagoTiendaComponent } from '../catalago-tienda/catalago-tienda.component';
import { FooterTiendaComponent } from '../footer-tienda/footer-tienda.component';



@NgModule({
  declarations: [
    HomekComponent,
    MenuTiendaComponent,
    CatalagoTiendaComponent,
    FooterTiendaComponent
  ],
  exports:[
    HomekComponent,
    MenuTiendaComponent,
    CatalagoTiendaComponent,
    FooterTiendaComponent

  ],
  imports: [
    CommonModule
  ]
})
export class HomekModule { }
