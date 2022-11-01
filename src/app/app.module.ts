import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './utils/header/header.component';
import { AddEditUserComponent } from './pages/add-edit-user/add-edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    NotFoundPageComponent,
    HomeComponent,
    AddEditUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
