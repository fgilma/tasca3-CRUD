import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuardGuard } from './utils/session-guard.guard';

const routes: Routes = [
  /*{path:'',redirectTo:'login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, canActivate:[SessionGuardGuard]},
  {path: 'add_user', component: AddEditUserComponent,canActivate:[SessionGuardGuard]},
  {path: 'edit_user/:id', component: AddEditUserComponent, canActivate:[SessionGuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundPageComponent}*/
  {
    path:'application',
    loadChildren: () => import('./application/application.module').then(m =>m.ApplicationModule), canActivate:[SessionGuardGuard]
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'**',
    redirectTo:'login'
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
