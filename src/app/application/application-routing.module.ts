import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditUserComponent } from './pages/add-edit-user/add-edit-user.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'add_user', component: AddEditUserComponent},
      {path:'home', component: HomeComponent},
      {path:'edit_user/:id', component: AddEditUserComponent},
      {path:'**', component: NotFoundPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
