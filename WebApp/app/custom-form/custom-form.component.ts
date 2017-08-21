import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import {CustomformService} from './customform.service';

@Component({
  selector: 'form-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css'],
  providers:[CustomformService]
})
export class CustomFormComponent implements OnInit {
   
   

  constructor(private fb: FormBuilder,
    private dialog: MdDialog,
  	private customformService:CustomformService,
  	private router: Router,
  	private route: ActivatedRoute){
  	this.createForm();
  }
  dateModel:String;
   customForm : FormGroup;
  resultTemplateData =[];
  resulTemplateStateData =[];
    
  createForm(){
  	this.customForm=this.fb.group({
  		email:['', [Validators.required,Validators.pattern('[a-z0-9.@_-]{14,40}')]],
      username:['', [Validators.required,Validators.pattern('[A-Za-z.-]{5,25}')]],
      firstname:['', [Validators.required,Validators.pattern('[A-Za-z]{4,20}')]],
      lastname:['', [Validators.required,Validators.pattern('[A-Za-z]{1,10}')]],
      dob:[null, [Validators.required]],
      addressline1:['', [Validators.required]],
      addressline2:['', [Validators.required]],
      state:['', [Validators.required]],
      city:['', [Validators.required,Validators.pattern('[A-Za-z.-]{5,25}')]],
      about:['', [Validators.required,Validators.pattern('[A-Za-z0-9.@_/,><={( )!$%^&*`]{30,500}')]],
      pincode:['', [Validators.required,Validators.pattern('[0-9]{6,6}')]],
      termscondition: ['', Validators.required],
  	});
  }
 

  ngOnInit() {
  	this.getTemplateData();
  }
   onsubmit(userdata: any) {
    const newFormObj = userdata.value;

    let  dobirth=newFormObj.dob;
    let birth= String(this.dateModel).substring(0,15);
    // get formControlName value as seperate from fromGroup
    console.log(newFormObj);
    const email = newFormObj.email;
    const username = newFormObj.username;
    const firstname = newFormObj.firstname;
    const lastname = newFormObj.lastname;
    const dob = birth;
    const state = newFormObj.state['state'];
    const city = newFormObj.city;
    const addressline1 = newFormObj.addressline1;
    const addressline2 = newFormObj.addressline2;
    const pincode = newFormObj.pincode;
    const about = newFormObj.about;
    const newFormData = {email,username,firstname,lastname,state,city,dob,addressline1,addressline2,pincode,about};

    this.customformService.submitFormData(newFormData).subscribe((data) => {
      if(data.status === 200)
      {
        this.dialog.open(SucessDialog);
      }
      });
  }
  getTemplateData(){
  	this.customformService.getTemplateData().subscribe((tempateData)=>{
  		this.resultTemplateData =tempateData;
  	});
  }
  backToHome(){
    this.router.navigate(['/customform/']);
  }
}

@Component({
  selector: 'sucsess-dialog',
  template: `<p>Form Submitted Sucessfully...!!!!</p>`,
})
export class SucessDialog {
  constructor(){}
}
