/**
 * Created by: MetaMagic
 * Date: 01/06/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'productmaster',
  templateUrl: 'productmaster.component.html'
})
export class ProductmasterComponent implements OnInit{
  productmasterModel:ProductmasterModel;
 
  constructor(private http: HttpClient) {
    this.productmasterModel=new ProductmasterModel();
       }
  onBlur_productName(eventData:any){} 
  input_productName(eventData:any){} 
  focus_productName(eventData:any){} 
  onBlur_ptype(eventData:any){} 
  input_ptype(eventData:any){} 
  focus_ptype(eventData:any){} 
  onBlur_desc(eventData:any){} 
  input_desc(eventData:any){} 
  focus_desc(eventData:any){} 
  onClick_cancel(eventData:any){} 
  onClick_save(eventData:any){} 
  ngOnInit(){
  }
 

   
}
export class ProductmasterModel{
  productName: string;  ptype: string;  desc: string; }
