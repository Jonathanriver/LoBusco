import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComercePage } from './detalle-comerce.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleComercePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleComercePageRoutingModule {}
