/**
 * Created by: Demo User
 * Date: 21/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'employeedetails',
  templateUrl: 'employeedetails.component.html'
})
export class EmployeedetailsComponent implements OnInit{
  employeedetailsModel:EmployeedetailsModel;
 
  constructor(private http: HttpClient) {
    this.employeedetailsModel=new EmployeedetailsModel();
       }
  ngOnInit(){
  }
 }

export class EmployeedetailsModel{
 }
