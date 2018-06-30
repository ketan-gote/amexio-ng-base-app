/**
 * Created by: Ashwini Agre
 * Date: 30/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'dashboard',
	templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit
{
	dashboardModel:DashboardModel;
	_rootpane:any;
	
	constructor(private http: HttpClient)
	{
		this.dashboardModel=new DashboardModel();
	}
	click_rootpane(){ 
		let response: any;
		this.http.get().subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.rootpaneBindResponse_1(response);
		});
	}
	rootpaneBindResponse_1(response: any)
	{
		
		let response: any;
		this.http.get().subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.rootpaneBindResponse_2(response);
		});
	}
	rootpaneBindResponse_2(response: any)
	{
		this.dashboardModel.charttest=response.countryName;
		
	} 
	ngOnInit()
	{
		this.onLoad_rootpane();
	}
}

export class DashboardModel
{
}
