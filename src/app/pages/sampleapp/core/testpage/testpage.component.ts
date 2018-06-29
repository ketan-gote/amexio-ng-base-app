/**
 * Created by: Ashwini Agre
 * Date: 29/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'testpage',
	templateUrl: 'testpage.component.html'
})
export class TestpageComponent implements OnInit
{
	testpageModel:TestpageModel;
	
	constructor(private http: HttpClient)
	{
		this.testpageModel=new TestpageModel();
	}
	ngOnInit()
	{
	}
}

export class TestpageModel
{
}
