import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string="http://localhost:8080/api/"
  constructor(private http:HttpClient) { }

  getAllRecord(){
   return (this.http.get(`${this.baseUrl}getAllEmp`));
  }
  getParticularRecord(id:any){
    return(this.http.get(`${this.baseUrl }getparticularEmpById/${id}`))
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getallcountry`))
  }

  addEmployee(obj:any){
    return (this.http.post(`${this.baseUrl}addEmp`,obj,{
      responseType:'text'
    }));
  }
  updateEmployee(obj:any){
    return (this.http.put(`${this.baseUrl}updateEmp/${obj.id}`,
      obj,{
        responseType:"text"
      }
    ));
  }
  deleteEmployee(id:any){
    return(this.http.delete(`${this.baseUrl}deleteemp/${id}`,{
      responseType:"text"
    }));
  }
  changeStatus(id:any){
    return (this.http.get(`${this.baseUrl}updateStatus/${id}`,{responseType:"text"}));
  }
  
}
