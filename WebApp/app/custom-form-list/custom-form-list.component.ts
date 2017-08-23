import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import {CustomFormListService} from './custom-form-list.service';
import {MdListModule} from '@angular/material';

@Component({
  selector: 'custom-form-list',
  templateUrl: './custom-form-list.component.html',
  styleUrls: ['./custom-form-list.component.css'],
  providers:[CustomFormListService]
})
export class CustomFormListComponent implements OnInit {

	constructor(private customFormListService:CustomFormListService,
  	private router: Router,
  	private route: ActivatedRoute){}

	resultRegisteredForms;
  dataInAPage:number;
  totalPages:number;
  totalData:number;
  page;
  resultant;
	ngOnInit() {
  	this.getRegisteredForms();

  }

  getRegisteredForms(){
    this.dataInAPage =10;
    this.page=1;
  	this.customFormListService.getRegisteredForms().subscribe((registeredForms)=>{
  		this.resultRegisteredForms=registeredForms;
      this.resultant=this.resultRegisteredForms;
      this.resultRegisteredForms=this.resultRegisteredForms.slice(0,this.dataInAPage);
      this.totalData =registeredForms.length;
      console.log('data available',this.totalData);
      this.totalPages =registeredForms.length/this.dataInAPage;
      this.totalPages=Math.round(this.totalPages);
  	});
  }

   onScroll(){
     const scrolledValue = this.dataInAPage;
     this.dataInAPage += 10;
     this.page = this.page +1;
     if(this.page<=this.totalPages){
     this.resultRegisteredForms=this.resultant.slice(0,this.dataInAPage);
   }else {
       this.resultRegisteredForms = this.resultant.slice(0,this.totalData);
     }
  }

  redirect(email: string) {
    this.router.navigate(['registeredform/'+ email]);
    
  }
}