import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponentComponent {

    constructor(private router: Router) {

    }

  public goToHome(){
    this.router.navigate(['/']);
  }

  public goToProducts(){
    this.router.navigate(['/products']);
  }

  public goToPromotions(){
      this.router.navigate(['/promotions']);
  }
}
