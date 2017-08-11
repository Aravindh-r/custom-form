import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//import { MdSnackBar } from '@angular/material';

@Injectable()
export class RegisteredFormService {
	constructor(private http: Http) { }

	getRegisteredForm(email){
		return this.http.get('api/v1/customform/'+email)
		.map(response => response.json());
	}
}