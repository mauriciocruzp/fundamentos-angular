import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { HistorialVentaComponent } from './historial-venta/historial-venta.component';


@NgModule({
  declarations: [
    ListadoComponent,
    HistorialVentaComponent,
  ],
  imports: [
    CommonModule,
    VentaRoutingModule
  ]
})
export class VentaModule { }
