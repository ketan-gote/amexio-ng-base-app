/**
 * Created by: Ashwini Agre
 * Date: 30/06/2018
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
	
	constructor(private http: HttpClient)
	{
		this.dashboard111Model=new Dashboard111Model();
	}
	ngOnInit()
	{
		this.fetchcartatatachartLocalDataChart();
	}
	fetchcartatatachartLocalDataChart()
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
