/**
 * Created by: Demo User
 * Date: 21/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'employeedetailspage',
  templateUrl: 'employeedetailspage.component.html'
})
export class EmployeedetailspageComponent implements OnInit{
  employeedetailspageModel:EmployeedetailspageModel;
 
  constructor(private http: HttpClient) {
    this.employeedetailspageModel=new EmployeedetailspageModel();
       }
  onSingleSelect_employeeList(eventData:any){ 
let response: any;
const requestJson={
id :this.employeedetailspageModel.employeeList,
};
this.http.post('https://uat.amexio.org:8991/rest-sample-app/api/emp/findById',requestJson).subscribe(
(res: any) => {
response = res;
},
(error: any) => {

 },
 () => {
this.employeeListBindResponse_1(response);
});
}
employeeListBindResponse_1(response: any){
this.employeedetailspageModel.firstName =response.response.firstName; 
this.employeedetailspageModel.lastName =response.response.lastName; 
this.employeedetailspageModel.age =response.response.age; 
this.employeedetailspageModel.email =response.response.email; 
this.employeedetailspageModel.employeeId =response.response.id; 
this.employeedetailspageModel.department =response.response.departmentId; 


 } 
  ngOnInit(){
  }
 }

export class EmployeedetailspageModel{
  employeeList: string;  firstName: string;  lastName: string;  age: number;  email: string;  employeeId: number;  department: string; }
