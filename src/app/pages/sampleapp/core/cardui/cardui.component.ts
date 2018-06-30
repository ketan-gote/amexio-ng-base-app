/**
 * Created by: Ashwini Agre
 * Date: 30/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'cardui',
	templateUrl: 'cardui.component.html'
})
export class CarduiComponent implements OnInit
{
	carduiModel:CarduiModel;
	
	constructor(private http: HttpClient)
	{
		this.carduiModel=new CarduiModel();
	}
	ngOnInit()
	{
	}
}

export class CarduiModel
{
}
