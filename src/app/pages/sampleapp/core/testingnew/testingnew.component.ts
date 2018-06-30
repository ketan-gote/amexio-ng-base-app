/**
 * Created by: Ashwini Agre
 * Date: 30/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'testingnew',
	templateUrl: 'testingnew.component.html'
})
export class TestingnewComponent implements OnInit
{
	testingnewModel:TestingnewModel;
	
	constructor(private http: HttpClient)
	{
		this.testingnewModel=new TestingnewModel();
	}
	click_countryId(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.testingnewModel.countryId).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.countryIdBindResponse_1(response);
		});
	}
	countryIdBindResponse_1(response: any)
	{
		this.stateId_Data=response.response;
		
	} 
	ngOnInit()
	{
	}
}

export class TestingnewModel
{
	 countryId: string; 
	 stateId: string; 
}
