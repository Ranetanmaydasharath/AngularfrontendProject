import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from '../model/Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  allcountry:any[]=[];
  isUpdate:boolean=false
  addData:Employee=<Employee>{};

  constructor(private service:HttpService ,
              private router:Router,
              private route:ActivatedRoute
  ){}

  ngOnInit(): void {
      this.getAllCountryFromBackend();
      this.getDataFromUrl();
  }
  getDataFromUrl(){
    this.route.paramMap
    .subscribe((param)=>{
      console.log(param.get("id"));
      this.service.getParticularRecord(param.get("id"))
      .subscribe((response:any)=>{
        // console.log(response)
        this.addData=response;
        this.isUpdate=true;
      })
    })  
    
  }


  getAllCountryFromBackend(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      // console.log(response);
      this.allcountry=response;
    })
  }
  onSubmit(){
    if(this.isUpdate){

      //Update logic API
      this.addData.updatedBy="Admin";
      this.addData.updatedDate=Date.now();
      this.service.updateEmployee(this.addData)
      .subscribe((response)=>{
        console.log(response);
        this.router.navigate(['']);
      })

    }else{

      //Add new Record

    

    this.addData.createdBy="admin";
    this.addData.ceratedDate=Date.now();
    this.addData.updatedBy="admin";
    this.addData.updatedDate=Date.now();

    this.service.addEmployee(this.addData)
    .subscribe((response)=>{
      // console.log(response);
      this.router.navigate([``]);

    })

  }
}


}
