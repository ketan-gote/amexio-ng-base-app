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
	selector: 'testui',
	templateUrl: 'testui.component.html'
})
export class TestuiComponent implements OnInit
{
	testuiModel:TestuiModel;
	successMsgData:any[]=[];
	
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testuiModel=new TestuiModel();
	}
	ngOnInit()
	{
	}
	
	onClick_navigate(eventData:any)
	{ 
		this.router.navigate(['core/newui']);
		
	} 
	onClick_Noto(eventData:any)
	{ 
		this.successMsgData.push('Record  saved successfully');
		
		
	} 
	onClick_service(eventData:any)
	{ 
		let response: any;
		const requestJson={
			id:this.testuiModel.employee,
		 };
		this.http.post('https://uat.amexio.org:8991/rest-sample-app/api/emp/',requestJson).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.serviceBindResponse_1(response);
		});
	}
	serviceBindResponse_1(response: any)
	{
		this.router.navigate(['core/newui']);
		
	} 
	
	
}

export class TestuiModel
{
	 employee: string; 
}
