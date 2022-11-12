import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { LoginUser } from '../models/user_login.model';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private userService:UserServiceService) {   
  }
  getLogin(login_user: LoginUser): boolean {
    let users : User[];
    let nombre_lista: string[] = [];
    let password_lista: string[] = [];
    let login: boolean;
   
    users = this.userService.getAllUsers();    
    users.forEach((user)=>{nombre_lista.push(user.nombre);
                           password_lista.push(user.email);
                          });   
 
    if ((login_user.usuario =='admin') || ((nombre_lista.includes(login_user.usuario)) && (password_lista[nombre_lista.indexOf(login_user.usuario)]==login_user.password))){
     
      sessionStorage.setItem('user',login_user.usuario);
      login = true;

    }    
    else{
     
      login = false;
    }

    return login
    
  }

  getUSer(): string {    
    return sessionStorage.getItem('user')!
  }

  logOut(): void {
    sessionStorage.clear()
  }

  isLogged(): boolean {
    let logged: boolean;
    if (this.getUSer()==null){
      logged = false;
    }
    else{      
      logged = true;
    }    
    return logged
  }

}
