import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class EditFormService {

  constructor(private http: Http,private snackBar:MdSnackBar) { }
  data;
  private handleError(error: any){
        return Observable.throw(error.json());        
    }

 updateFormData(newFormData) {
    return this.http.patch('api/v1/customform/', newFormData)
            .catch(err => {
                this.snackBar.open('Please try again later..!!!','internal server error', {
                    duration: 3000
                });
                return Observable.throw(err); // observable needs to be returned or exception raised
            })
    }

}
