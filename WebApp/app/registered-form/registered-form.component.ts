import {Component, Input, NgModule, OnInit} from '@angular/core';
import { Http, Response} from '@angular/http';
import {MdButtonModule} from '@angular/material';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router'
import { FlexLayoutModule } from "@angular/flex-layout";
import {RegisteredFormService} from "./registered-form.service";


@Component({
  selector: 'registered-form',
  templateUrl: './registered-form.component.html',
  //styleUrls: ['./registered-form.component.css'],
  providers:[RegisteredFormService]
})
export class RegisteredFormComponent implements OnInit {

	constructor(private registeredFormService:RegisteredFormService,
  	private router: Router,
  	private route: ActivatedRoute){}
	resultRegisteredForm;
	
	ngOnInit() {
		this.getRegisteredForm(this.route.snapshot.params['email']);
	}

	getRegisteredForm(email){
  	this.registeredFormService.getRegisteredForm(email).subscribe((registeredForm)=>{
  		this.resultRegisteredForm=registeredForm;

      // console.log(registeredForm);
      // console.log(this.resultRegisteredForm);
  	});
  }
  onClickEdit(email : string){
    console.log(email);
    this.router.navigate(['editregisteredform/'+ email]);
  }
}