/**
 * Created by: Ashwini Agre
 * Date: 30/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'testnewpagefordemo',
	templateUrl: 'testnewpagefordemo.component.html'
})
export class TestnewpagefordemoComponent implements OnInit
{
	testnewpagefordemoModel:TestnewpagefordemoModel;
	
	constructor(private http: HttpClient)
	{
		this.testnewpagefordemoModel=new TestnewpagefordemoModel();
	}
	click_countryId(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.testnewpagefordemoModel.countryId).subscribe(
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

export class TestnewpagefordemoModel
{
	 countryId: string; 
	 stateId: string; 
}
