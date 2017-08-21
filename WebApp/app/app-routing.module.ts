import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomFormComponent } from './custom-form/custom-form.component';
import {CustomFormListComponent} from './custom-form-list/custom-form-list.component';
import {RegisteredFormComponent} from "./registered-form/registered-form.component";
import {EditRegisteredFormComponent} from "./edit-registered-form/edit-registered-form.component";

const routes: Routes = [
          {
          path: '',
          redirectTo: '/customform',
          pathMatch: 'full'
          },
          {
              path: 'customform',
              component: CustomFormComponent
          },
          {
              path: 'customformlist',
              component: CustomFormListComponent
          },
          {
              path: 'registeredform/:email',
              component: RegisteredFormComponent
          },
          {
              path: 'editregisteredform/:email',
              component: EditRegisteredFormComponent
          },
          { path: '**', redirectTo: '/customform' }

 ];
 @NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }