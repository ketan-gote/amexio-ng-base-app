/**
 * Created by: Ketano Gote
 * Date: 12/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'countrystate',
	templateUrl: 'countrystate.component.html'
})
export class CountrystateComponent implements OnInit
{
	countrystateModel:CountrystateModel;
	stateId_Data:any;
	successMsgData:any[]=[];
	
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.countrystateModel=new CountrystateModel();
		this.stateId_Data=[];
	}
	ngOnInit()
	{
	}
	
	onSingleSelect_countryId(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountry'+'/'+this.countrystateModel.countryId).subscribe(
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
		this.stateId_Data=response.states;
		
	} 
	
	
}

export class CountrystateModel
{
	 countryId: string; 
	 stateId: string; 
}
