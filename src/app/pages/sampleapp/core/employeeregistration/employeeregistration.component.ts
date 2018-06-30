/**
 * Created by: Ashwini Agre
 * Date: 30/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'employeeregistration',
	templateUrl: 'employeeregistration.component.html'
})
export class EmployeeregistrationComponent implements OnInit
{
	employeeregistrationModel:EmployeeregistrationModel;
	radiogroupData:any;
	
	constructor(private http: HttpClient)
	{
		this.employeeregistrationModel=new EmployeeregistrationModel();
	this.radiogroupData=[{"genderId":"1","genderLabel":"Male"},{"genderId":"2","genderLabel":"Female"}];
	}
	click_save(eventData:any)
	{ 
		let response: any;
		const requestJson={
			firstName:this.employeeregistrationModel.firstName,
			lastName:this.employeeregistrationModel.lastName,
			age:this.employeeregistrationModel.age,
			phone:this.employeeregistrationModel.phone,
			email:this.employeeregistrationModel.email,
			departmentId:this.employeeregistrationModel.departmentId,
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
	ngOnInit()
	{
	}
}

export class EmployeeregistrationModel
{
	 firstName: string; 
	 lastName: string; 
	 genderId: string; 
	 age: number; 
	 phone: string; 
	 departmentId: string; 
	 email: string; 
}
