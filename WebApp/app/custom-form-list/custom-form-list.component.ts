import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import {CustomFormListService} from './custom-form-list.service';
import {MdListModule} from '@angular/material';
//import { InfiniteScrollModule } from 'angular2-infinite-scroll';
//import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
  page;
  resultant;
	ngOnInit() {
  	this.getRegisteredForms();

  }

  /*onScroll1(e) {
    console.log('clickldakfjalf');
  }*/

  getRegisteredForms(){
    this.dataInAPage =10;
    this.page=1;
  	this.customFormListService.getRegisteredForms().subscribe((registeredForms)=>{
  		this.resultRegisteredForms=registeredForms;
      this.resultant=this.resultRegisteredForms;
      this.resultRegisteredForms=this.resultRegisteredForms.slice(0,this.dataInAPage);
      console.log('resultant 1 st page',this.resultRegisteredForms);
      this.totalPages =registeredForms.length/this.dataInAPage;
      //this.resultant=this.totalPages;
      this.totalPages=Math.round(this.totalPages);
      console.log('totalPages',this.totalPages);
      // this.onScroll();
  	});
  }

   onScroll(){
     console.log('onscroll before increement dataInAPage',this.dataInAPage);
     const scrolledValue = this.dataInAPage;
     console.log('scrolledValue',scrolledValue);
     this.dataInAPage += 10;
     console.log('onscroll after increement dataInAPage',this.dataInAPage);
     this.page = this.page +1;
     console.log('Current page',this.page);
     if(this.page<=this.totalPages){
     this.resultRegisteredForms=this.resultant.slice(0,this.dataInAPage);
     console.log('resultant 2nd page',this.resultRegisteredForms); 
   }else{
     alert('no more pages to load')
   }
  }
  redirect(email: string) {
    this.router.navigate(['registeredform/'+ email]);
  }
 

}