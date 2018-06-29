/**
 * Created by: Demo User
 * Date: 29/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'formlayout',
	templateUrl: 'formlayout.component.html'
})
export class FormlayoutComponent implements OnInit
{
	formlayoutModel:FormlayoutModel;
	
	constructor(private http: HttpClient)
	{
		this.formlayoutModel=new FormlayoutModel();
	}
	ngOnInit()
	{
	}
}

export class FormlayoutModel
{
}
