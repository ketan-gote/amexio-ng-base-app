/**
 * Created by: Ketan Gote
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
	companyPerformancechartLocalData:any;
	dailyActivitychartLocalData:any;
	
	constructor(private http: HttpClient)
	{
		this.dashboardModel=new DashboardModel();
	}
	ngOnInit()
	{
		this.fetchcompanyPerformancechartLocalDataChart();
		this.fetchdailyActivitychartLocalDataChart();
	}
	
	
	fetchcompanyPerformancechartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('https://api.myjson.com/bins/18hpt2').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.companyPerformancechartLocalData = reponseData.data;
		}
		);
	}
	fetchdailyActivitychartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('https://api.myjson.com/bins/9ykpy').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.dailyActivitychartLocalData = reponseData.data;
		}
		);
	}
	
}

export class DashboardModel
{
}
