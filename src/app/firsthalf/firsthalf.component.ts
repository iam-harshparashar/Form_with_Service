import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-firsthalf',
  templateUrl: './firsthalf.component.html',
  styleUrls: ['./firsthalf.component.css']
})
export class Firsthalfcomponent implements OnInit {
  v:string="hidden";
  formData:any=[];
  reactiveForm!:FormGroup;
  msg:boolean=false;
  firstname:string;
  lastname:string;
  middlename:string;
  phonenumber:number;
  emailid:string;
    constructor(private service : DataService) { }
  
    ngOnInit(): void {
      this.initForm();
    }
  onSubmit(){
    this.service.addFormData(this.reactiveForm.value)
    this.msg=true;
    this.v="visible";
    this.reactiveForm.reset();
  }
  private initForm(){
    this.reactiveForm =new FormGroup ({
      'FirstName': new FormControl('',[ Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
      'MiddleName': new FormControl('',[Validators.pattern("^[a-zA-Z]*$")]),
      'LastName': new FormControl('',[ Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
      'PhoneNumber': new FormControl('',[ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
      'EmailId': new FormControl('',[ Validators.required,Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])
    })
  }
  onClear(){
    this.reactiveForm.reset();
  }
}
