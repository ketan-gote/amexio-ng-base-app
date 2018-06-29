/**
 * Created by: Ashwini Agre
 * Date: 29/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'rowcolumnlayout',
	templateUrl: 'rowcolumnlayout.component.html'
})
export class RowcolumnlayoutComponent implements OnInit
{
	rowcolumnlayoutModel:RowcolumnlayoutModel;
	
	constructor(private http: HttpClient)
	{
		this.rowcolumnlayoutModel=new RowcolumnlayoutModel();
	}
	ngOnInit()
	{
	}
}

export class RowcolumnlayoutModel
{
}
