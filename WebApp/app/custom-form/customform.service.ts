import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class CustomformService {

  constructor(private http: Http,private snackBar:MdSnackBar) { }
  data;
  private handleError(error: any){
        return Observable.throw(error.json());        
    }
  getTemplateData(){
  	return this.http.get(`api/v1/templates/state`)
		.map(response => response.json());
  }

  getTemplateStateData(state:string){
  	return this.http.get('api/v1/templates/'+state+'/city')
		.map(response => response.json());
  }

 submitFormData(newFormData) {
   console.log('inside serveice',newFormData);
// const headers = new Headers();
//         headers.append('Content-Type', 'application/json');
    return this.http.post('api/v1/customform', newFormData)
            .catch(err => {
                this.snackBar.open('Please try again later..!!!','internal server error', {
                    duration: 3000
                });
                return Observable.throw(err); // observable needs to be returned or exception raised
            })
    }

}
