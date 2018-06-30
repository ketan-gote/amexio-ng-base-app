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
     	path: 'core/testpage', loadChildren: './../pages/sampleapp/core/testpage/testpage.module#TestpageModule'
     	},	
	     	{
     	path: 'core/employeelist', loadChildren: './../pages/sampleapp/core/employeelist/employeelist.module#EmployeelistModule'
     	},	
	     	{
     	path: 'core/employeeregistration', loadChildren: './../pages/sampleapp/core/employeeregistration/employeeregistration.module#EmployeeregistrationModule'
     	},	
	     	{
     	path: 'core/countrylist', loadChildren: './../pages/sampleapp/core/countrylist/countrylist.module#CountrylistModule'
     	},	
	     	{
     	path: 'core/dashboard', loadChildren: './../pages/sampleapp/core/dashboard/dashboard.module#DashboardModule'
     	},	
	     	{
     	path: 'core/dashboard111', loadChildren: './../pages/sampleapp/core/dashboard111/dashboard111.module#Dashboard111Module'
     	},	
	     	{
     	path: 'core/testingnew', loadChildren: './../pages/sampleapp/core/testingnew/testingnew.module#TestingnewModule'
     	},	
	     	{
     	path: 'core/registrationform', loadChildren: './../pages/sampleapp/core/registrationform/registrationform.module#RegistrationformModule'
     	},	
	     	{
     	path: 'core/cardlayout', loadChildren: './../pages/sampleapp/core/cardlayout/cardlayout.module#CardlayoutModule'
     	},	
	     	{
     	path: 'core/formlayout', loadChildren: './../pages/sampleapp/core/formlayout/formlayout.module#FormlayoutModule'
     	},	
	     	{
     	path: 'core/rowcolumnlayout', loadChildren: './../pages/sampleapp/core/rowcolumnlayout/rowcolumnlayout.module#RowcolumnlayoutModule'
     	},	
	     	{
     	path: 'core/performanceanalysis', loadChildren: './../pages/sampleapp/core/performanceanalysis/performanceanalysis.module#PerformanceanalysisModule'
     	},	
	     	{
     	path: 'core/cardui', loadChildren: './../pages/sampleapp/core/cardui/cardui.module#CarduiModule'
     	},	
	     	{
     	path: 'core/samplepagedemo', loadChildren: './../pages/sampleapp/core/samplepagedemo/samplepagedemo.module#SamplepagedemoModule'
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