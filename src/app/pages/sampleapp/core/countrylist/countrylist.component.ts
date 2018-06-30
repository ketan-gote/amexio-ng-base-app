/**
 * Created by: Ashwini Agre
 * Date: 30/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'countrylist',
	templateUrl: 'countrylist.component.html'
})
export class CountrylistComponent implements OnInit
{
	countrylistModel:CountrylistModel;
	
	constructor(private http: HttpClient)
	{
		this.countrylistModel=new CountrylistModel();
	}
	ngOnInit()
	{
	}
}

export class CountrylistModel
{
}
