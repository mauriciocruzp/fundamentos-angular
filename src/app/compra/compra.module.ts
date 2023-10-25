import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './historial-compra/historial-compra.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ListadoComponent,
    NuevaCompraComponent,
    HistorialCompraComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ListadoComponent
  ]
})
export class CompraModule { }
