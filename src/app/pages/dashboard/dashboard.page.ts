import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  slideOpts2 = {
    initialSlide: 1,
    speed: 400
  };

  
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    
  }

  Detalle() {
    this.router.navigateByUrl('detalle-comerce');
  }

}
