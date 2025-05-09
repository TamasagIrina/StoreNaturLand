import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(readonly router: Router){

  }

  purchaseButton(){
    this.router.navigateByUrl('mainPage/purchase');
  }
}
