/**
 * Created by: Ketan Gote
 * Date: 30/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'employee',
	templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit
{
	employeeModel:EmployeeModel;
	radiogroupData:any;
	state_Data:any;
	
	constructor(private http: HttpClient)
	{
		this.employeeModel=new EmployeeModel();
	this.radiogroupData=[{"genderId":"1","gender":"Male"},{"genderId":"1","gender":"Female"}];
		this.state_Data=[];
	}
	ngOnInit()
	{
	}
	
	click_country(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.employeeModel.country).subscribe(
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
		this.state_Data=response.response;
		
	} 
	click_save(eventData:any)
	{ 
		let response: any;
		const requestJson={
			firstName:this.employeeModel.firstName,
			lastName:this.employeeModel.lastName,
			genderId:this.employeeModel.gender,
			age:this.employeeModel.age,
			phone:this.employeeModel.phone,
			email:this.employeeModel.email,
			departmentId:this.employeeModel.department,
			countryId:this.employeeModel.country,
			stateId:this.employeeModel.state
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
			this.saveBindResponse_1(response);
		});
	}
	saveBindResponse_1(response: any)
	{
		
	} 
	
	
}

export class EmployeeModel
{
	 firstName: string; 
	 lastName: string; 
	 gender: string; 
	 email: string; 
	 phone: string; 
	 age: number; 
	 department: string; 
	 country: string; 
	 state: string; 
}
