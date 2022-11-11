import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEditUserComponent} from './pages/add-edit-user/add-edit-user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SessionGuardGuard } from './utils/session-guard.guard';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, canActivate:[SessionGuardGuard]},
  {path: 'add_user', component: AddEditUserComponent,canActivate:[SessionGuardGuard]},
  {path: 'edit_user/:id', component: AddEditUserComponent, canActivate:[SessionGuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundPageComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
