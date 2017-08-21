import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule,
 MdIconModule,
  MdInputModule,
    MdSelectModule, 
    MdAutocompleteModule,
    MdDialogModule,
    MdCheckboxModule, 
    MdCardModule, 
    MdMenuModule,
    MaterialModule, 
    MdButtonModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdListModule } from '@angular/material';
import { MarkdownModule } from 'angular2-markdown';
//import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import {CustomformService} from './custom-form/customform.service';
import { CustomFormComponent ,SucessDialog} from './custom-form/custom-form.component';
import {CustomFormListService} from './custom-form-list/custom-form-list.service';
import {CustomFormListComponent} from './custom-form-list/custom-form-list.component';
import {MenuBar} from './menu-bar/menu-bar.component';
import {RegisteredFormComponent} from "./registered-form/registered-form.component";
import {RegisteredFormService} from "./registered-form/registered-form.service";
import {EditRegisteredFormComponent,UpdateDialog} from "./edit-registered-form/edit-registered-form.component";
import {EditFormService} from './edit-registered-form/edit-registered-form.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
  AppComponent,CustomFormComponent,CustomFormListComponent,EditRegisteredFormComponent,SucessDialog,MenuBar,RegisteredFormComponent,UpdateDialog],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule, 
    MarkdownModule,
    AppRoutingModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    MdInputModule,
    MdAutocompleteModule,
    InfiniteScrollModule
    ],
    entryComponents: [CustomFormComponent,SucessDialog,EditRegisteredFormComponent,UpdateDialog],
    providers: [CustomformService,CustomFormListService,RegisteredFormService,EditFormService],
    bootstrap: [AppComponent],
  })
export class AppModule { }

