/**
 * Created by: Demo User
 * Date: 21/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'samplepage',
  templateUrl: 'samplepage.component.html'
})
export class SamplepageComponent implements OnInit{
  samplepageModel:SamplepageModel;
        radiogroupData:any; 
  constructor(private http: HttpClient) {
    this.samplepageModel=new SamplepageModel();
     	 	this.radiogroupData=[{"genderId":"1","genderLabel":"Male"},{"genderId":"2","genderLabel":"female"}];
	  }
  onClick_Save(eventData:any){ 
let response: any;
const requestJson={
id :this.samplepageModel.id,
firstName :this.samplepageModel.firstName,
lastName :this.samplepageModel.lastName,
genderId :this.samplepageModel.genderId,
age :this.samplepageModel.age,
phone :this.samplepageModel.phone,
email :this.samplepageModel.email,
departmentId :this.samplepageModel.department,
};
this.http.post('https://uat.amexio.org:8991/rest-sample-app/api/emp/save',requestJson).subscribe(
(res: any) => {
response = res;
},
(error: any) => {

 },
 () => {
this.SaveBindResponse_1(response);
});
}
SaveBindResponse_1(response: any){

 } 
  ngOnInit(){
 		  }
 	 	}

export class SamplepageModel{
  firstName: string;  lastName: string;  genderId: string;  age: number;  phone: string;  email: string;  id: number;  department: string; }
