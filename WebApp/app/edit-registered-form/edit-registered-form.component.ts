import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import {RegisteredFormService} from "../registered-form/registered-form.service";
import {CustomformService} from '../custom-form/customform.service';
import {EditFormService} from './edit-registered-form.service';

@Component({
	selector: 'edit-registered-form',
  templateUrl: './edit-registered-form.component.html',
  providers:[RegisteredFormService],
})

export class EditRegisteredFormComponent{
	constructor(
		private fb: FormBuilder,
		private dialog: MdDialog,
  	private customformService:CustomformService,
		private registeredFormService:RegisteredFormService,
    private editFormService:EditFormService,
		private router: Router,
  	private route: ActivatedRoute
  	){this.editForm();}
	customForm : FormGroup;
	resultRegisteredForm;
	resultTemplateData =[];
  resulTemplateStateData =[];
  email;
  username;
	dateModel;
	ngOnInit() {
		this.email=this.route.snapshot.params['email'];
		this.getRegisteredForm(this.route.snapshot.params['email']);
	}
	getRegisteredForm(email){
  	this.registeredFormService.getRegisteredForm(email).subscribe((registeredForm)=>{
  		this.resultRegisteredForm=registeredForm;
  		this.getTemplateData();
  	});
  }

editForm(){
  this.customForm=this.fb.group({
      username:['', [Validators.required,Validators.pattern('[A-Za-z.-]{5,25}')]],
      firstname:['', [Validators.required,Validators.pattern('[A-Za-z]{4,20}')]],
      lastname:['', [Validators.required,Validators.pattern('[A-Za-z]{1,10}')]],
      addressline1:['', [Validators.required]],
      addressline2:['', [Validators.required]],
      state:['', [Validators.required]],
      city:['', [Validators.required,Validators.pattern('[A-Za-z.-]{3,25}')]],
      about:['', [Validators.required,Validators.pattern('[A-Za-z0-9.@_/,><={( )!$%^&*`]{30,500}')]],
      pincode:['', [Validators.required,Validators.pattern('[0-9]{6,6}')]],
  });
  }


  onsubmit(userdata: any) {
    const newFormObj = userdata.value;
    console.log('date of birth from database',this.resultRegisteredForm['dob'])
    // get formControlName value as seperate from fromGroup
    console.log(newFormObj);
    const email = this.email;
    const username = newFormObj.username;
    const firstname = newFormObj.firstname;
    const lastname = newFormObj.lastname;
    const state = newFormObj.state;
    const city = newFormObj.city;
    const addressline1 = newFormObj.addressline1;
    const addressline2 = newFormObj.addressline2;
    const pincode = newFormObj.pincode;
    const about = newFormObj.about;
    const newFormData = {email,username,firstname,lastname,city,state,addressline1,addressline2,pincode,about};

    this.editFormService.updateFormData(newFormData).subscribe((data) => {
      if(data.status === 200)
      {
        this.dialog.open(UpdateDialog);
      }
      });
  }
  getTemplateData(){
  	this.customformService.getTemplateData().subscribe((tempateData)=>{
  		this.resultTemplateData =tempateData;
      this.resulTemplateStateData.push(this.resultTemplateData);
  	});
  }
  backTo(email:string){
    this.router.navigate(['registeredform/'+ email]);
  }
}

@Component({
  selector: 'update-dialog',
  template: `<p>Form updated Sucessfully...!!!!</p>`,
})
export class UpdateDialog {
  constructor(){}
}
	
