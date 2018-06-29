/**
 * Created by: Demo User
 * Date: 29/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'cardlayout',
	templateUrl: 'cardlayout.component.html'
})
export class CardlayoutComponent implements OnInit
{
	cardlayoutModel:CardlayoutModel;
	
	constructor(private http: HttpClient)
	{
		this.cardlayoutModel=new CardlayoutModel();
	}
	ngOnInit()
	{
	}
}

export class CardlayoutModel
{
}
