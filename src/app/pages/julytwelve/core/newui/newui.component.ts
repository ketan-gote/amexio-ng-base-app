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
	selector: 'newui',
	templateUrl: 'newui.component.html'
})
export class NewuiComponent implements OnInit
{
	newuiModel:NewuiModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.newuiModel=new NewuiModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class NewuiModel
{
}
