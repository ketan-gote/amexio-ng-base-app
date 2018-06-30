/**
 * Created by Sagar Jadhav.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {TopNavBarComponent} from "../layout/topnavbar.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component:HomeComponent,
    children: [
          	{
     	path: 'core/dashboard', loadChildren: './../pages/employeeportal/core/dashboard/dashboard.module#DashboardModule'
     	},	
	     	{
     	path: 'core/employeelist', loadChildren: './../pages/employeeportal/core/employeelist/employeelist.module#EmployeelistModule'
     	},	
	     	{
     	path: 'core/employee', loadChildren: './../pages/employeeportal/core/employee/employee.module#EmployeeModule'
     	},	
	    ]
  }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    TopNavBarComponent
  ]
})
export class HomeModule {
}