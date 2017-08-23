import {Component, Input, NgModule, OnInit} from '@angular/core';
import { Http, Response} from '@angular/http';
import { MdDialog, MdDialogRef ,MdButtonModule} from '@angular/material';
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
    private dialog: MdDialog,
  	private router: Router,
  	private route: ActivatedRoute){}
	resultRegisteredForm;
	
	ngOnInit() {
		this.getRegisteredForm(this.route.snapshot.params['email']);
	}

	getRegisteredForm(email){
  	this.registeredFormService.getRegisteredForm(email).subscribe((registeredForm)=>{
  		this.resultRegisteredForm=registeredForm;
  	});
  }
  onClickEdit(email : string){
    this.router.navigate(['editregisteredform/'+ email]);
  }
  onLiked(email:string){
this.registeredFormService.clickthumbs(email).subscribe((data)=>{
   if(data.status === 200)
      {
        this.getRegisteredForm(email);
      }
});
  }
    onUnliked(email:string){
this.registeredFormService.unClickthumbs(email).subscribe((data)=>{
   if(data.status === 200)
      {
        this.getRegisteredForm(email);
      }
});

  }
}