import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { AddEditUserComponent } from './pages/add-edit-user/add-edit-user.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEditUserComponent,
    HomeComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    ReactiveFormsModule
  ]
})
export class ApplicationModule { }
