import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//import { MdSnackBar } from '@angular/material';

@Injectable()
export class CustomFormListService {
	constructor(private http: Http) { }

	getRegisteredForms(){
		return this.http.get('api/v1/customform/')
		.map(response => response.json());
	}
}