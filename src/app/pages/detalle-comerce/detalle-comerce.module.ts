import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleComercePageRoutingModule } from './detalle-comerce-routing.module';

import { DetalleComercePage } from './detalle-comerce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleComercePageRoutingModule
  ],
  declarations: [DetalleComercePage]
})
export class DetalleComercePageModule {}
