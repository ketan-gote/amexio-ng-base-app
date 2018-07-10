/**
 * Created by: deepali arvind
 * Date: 10/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'firstui',
	templateUrl: 'firstui.component.html'
})
export class FirstuiComponent implements OnInit
{
	firstuiModel:FirstuiModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.firstuiModel=new FirstuiModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class FirstuiModel
{
}
