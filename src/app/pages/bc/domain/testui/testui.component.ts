/**
 * Created by: MetaMagic
 * Date: 31/05/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'testui',
  templateUrl: 'testui.component.html'
})
export class TestuiComponent implements OnInit{
  testuiModel:TestuiModel;
 
  constructor(private http: HttpClient) {
    this.testuiModel=new TestuiModel();
       }
  onBlur_email(eventData:any){} 
  input_email(eventData:any){} 
  focus_email(eventData:any){} 
  onBlur_password(eventData:any){} 
  input_password(eventData:any){} 
  focus_password(eventData:any){} 
  onClick_cancel(eventData:any){} 
  onClick_login(eventData:any){} 
  ngOnInit(){
  }
 

   
}
export class TestuiModel{
  email: string;  password: string; }
