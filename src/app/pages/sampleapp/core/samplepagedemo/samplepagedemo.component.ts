/**
 * Created by: Ashwini Agre
 * Date: 30/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'samplepagedemo',
	templateUrl: 'samplepagedemo.component.html'
})
export class SamplepagedemoComponent implements OnInit
{
	samplepagedemoModel:SamplepagedemoModel;
	activitychartLocalData:any;
	
	constructor(private http: HttpClient)
	{
		this.samplepagedemoModel=new SamplepagedemoModel();
	}
	click_country(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.samplepagedemoModel.country).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.countryBindResponse_1(response);
		});
	}
	countryBindResponse_1(response: any)
	{
		this.states_Data=response.response;
		
	} 
	ngOnInit()
	{
		this.fetchactivitychartLocalDataChart();
	}
	fetchactivitychartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('https://api.myjson.com/bins/9ykpy').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.activitychartLocalData = reponseData.data;
		}
		);
	}
}

export class SamplepagedemoModel
{
	 country: string; 
	 states: string; 
}
