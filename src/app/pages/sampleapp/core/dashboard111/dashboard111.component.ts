/**
 * Created by: Demo User
 * Date: 29/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'dashboard111',
	templateUrl: 'dashboard111.component.html'
})
export class Dashboard111Component implements OnInit
{
	dashboard111Model:Dashboard111Model;
	
	cartatatachartLocalData:any; 
	cartatatachartLocalData:any; 
	constructor(private http: HttpClient)
	{
		this.dashboard111Model=new Dashboard111Model();
		this.cartatata=[];
		this.cartatata=[];
	}
	ngOnInit()
	{
		this.fetchcartatataChart();
		this.fetchcartatataChart();
	}
	fetchcartatataChart()
	{
		let reponseData: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/country/findall').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.cartatatachartLocalData = reponseData.data;
		}
		);
	}
	fetchcartatataChart()
	{
		let reponseData: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/country/findall').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.cartatatachartLocalData = reponseData.data;
		}
		);
	}
}

export class Dashboard111Model
{
}
