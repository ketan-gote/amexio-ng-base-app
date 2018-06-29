import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"Test Page","routerLink":"core/testpage","selected":false},{"text":"Employee List","routerLink":"core/employeelist","selected":false},{"text":"Employee Registration","routerLink":"core/employeeregistration","selected":false},{"text":"Country List","routerLink":"core/countrylist","selected":false},{"text":"Dashboard","routerLink":"core/dashboard","selected":false},{"text":"Dashboard111","routerLink":"core/dashboard111","selected":false},{"text":"Testing new","routerLink":"core/testingnew","selected":false},{"text":"Registration Form","routerLink":"core/registrationform","selected":false},{"text":"CardLayout","routerLink":"core/cardlayout","selected":false},{"text":"Form Layout","routerLink":"core/formlayout","selected":false},{"text":"Row Column Layout","routerLink":"core/rowcolumnlayout","selected":false},{"text":"Performance analysis","routerLink":"core/performanceanalysis","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
