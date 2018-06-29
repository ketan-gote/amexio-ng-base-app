/**
 * Created by: Demo User
 * Date: 29/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'registrationform',
	templateUrl: 'registrationform.component.html'
})
export class RegistrationformComponent implements OnInit
{
	registrationformModel:RegistrationformModel;
	
	radiogroupData:any; 
	stateId_Data:any; 
	constructor(private http: HttpClient)
	{
		this.registrationformModel=new RegistrationformModel();
	this.radiogroupData=[{"genderId":"1","genderName":"Male"},{"genderId":"2","genderName":"Female"}];
		this.stateId_Data=[];
	}
	click_countryId(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.registrationformModel.countryId).subscribe(
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
	click_Save(eventData:any)
	{ 
		let response: any;
		const requestJson={
			firstName:this.registrationformModel.firstName,
			lastName:this.registrationformModel.lastName,
			genderId:this.registrationformModel.genderId,
			age:this.registrationformModel.age,
			phone:this.registrationformModel.phoneNo,
			email:this.registrationformModel.email,
			departmentId:this.registrationformModel.departmentId,
			countryId:this.registrationformModel.countryId,
			stateId:this.registrationformModel.stateId
		 };
		this.http.post('https://uat.amexio.org:8991/rest-sample-app/api/emp/save',requestJson).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.SaveBindResponse_1(response);
		});
	}
	SaveBindResponse_1(response: any)
	{
		
	} 
	ngOnInit()
	{
	}
}

export class RegistrationformModel
{
	 firstName: string; 
	 lastName: string; 
	 genderId: string; 
	 age: number; 
	 email: string; 
	 phoneNo: string; 
	 departmentId: string; 
	 countryId: string; 
	 stateId: string; 
}
