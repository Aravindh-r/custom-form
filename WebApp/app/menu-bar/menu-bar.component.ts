import { Component, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html'
  //styleUrls: ['./menu-bar.component.css']
})
export class MenuBar implements OnInit{
	constructor() {
  }
ngOnInit() {}
  routinglabels=[
  { logo: 'customform', link: 'customform', label: 'Custom Registration Form' },
  { logo: 'customformlist', link: 'customformlist', label: 'Registrated Forms' }];
}