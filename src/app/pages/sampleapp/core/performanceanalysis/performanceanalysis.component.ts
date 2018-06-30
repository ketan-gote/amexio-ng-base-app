/**
 * Created by: Ashwini Agre
 * Date: 30/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'performanceanalysis',
	templateUrl: 'performanceanalysis.component.html'
})
export class PerformanceanalysisComponent implements OnInit
{
	performanceanalysisModel:PerformanceanalysisModel;
	companyPerchartLocalData:any;
	dailyActivitieschartLocalData:any;
	
	constructor(private http: HttpClient)
	{
		this.performanceanalysisModel=new PerformanceanalysisModel();
	}
	ngOnInit()
	{
		this.fetchcompanyPerchartLocalDataChart();
		this.fetchdailyActivitieschartLocalDataChart();
	}
	fetchcompanyPerchartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('https://api.myjson.com/bins/18hpt2').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.companyPerchartLocalData = reponseData.data;
		}
		);
	}
	fetchdailyActivitieschartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('https://api.myjson.com/bins/9ykpy').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.dailyActivitieschartLocalData = reponseData.data;
		}
		);
	}
}

export class PerformanceanalysisModel
{
}
