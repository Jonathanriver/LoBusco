import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-comerce',
  templateUrl: './detalle-comerce.page.html',
  styleUrls: ['./detalle-comerce.page.scss'],
})
export class DetalleComercePage implements OnInit {
  nombreImag = "";
  UrlImag="";
  imagSrc="";
  Precio: any;
  TituloCombo:any;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
    this.nombreImag = 'comerce1.png';
    this.UrlImag= "url('../../../assets/Imagenes/"+this.nombreImag+"')";
    this.imagSrc="../../../assets/Imagenes/Menu1.png";
    this.TituloCombo="Combo Especial";
    this.Precio=45000;
  }

}
