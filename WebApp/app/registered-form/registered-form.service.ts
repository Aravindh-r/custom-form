import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class RegisteredFormService {
	constructor(private http: Http,private snackBar:MdSnackBar) { }

	getRegisteredForm(email){
		return this.http.get('api/v1/customform/'+email)
		.map(response => response.json());
	}
	clickthumbs(email:string){
		return this.http.patch('api/v1/customform/liked/'+email,{})
		.catch(err => {
                this.snackBar.open('Please try again later..!!!','internal server error', {
                    duration: 3000
                });
                return Observable.throw(err); // observable needs to be returned or exception raised
            });
	}
	unClickthumbs(email:string){
		return this.http.patch('api/v1/customform/unliked/'+email,{})
		.catch(err => {
                this.snackBar.open('Please try again later..!!!','internal server error', {
                    duration: 3000
                });
                return Observable.throw(err); // observable needs to be returned or exception raised
            });
	}
}