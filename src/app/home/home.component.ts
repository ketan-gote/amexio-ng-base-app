import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Catlog","expand":true,"children":[{"text":"Product Master","routerLink":"catlog/productmaster","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
