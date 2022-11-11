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
    console.log(login_user);
    users = this.userService.getAllUsers();
    let pepe: string[] = [];
    let papa: string[] = [];
    let login: boolean;
    users.forEach((user)=>{pepe.push(user.nombre);
                           papa.push(user.email);
                          });   
    console.log(pepe);
    if ((login_user.usuario =='admin') || ((pepe.includes(login_user.usuario)) && (papa.includes(login_user.password)))){
      console.log("si lo ve");
      sessionStorage.setItem('user',login_user.usuario);
      login = true;

    }    
    else{
      console.log("no lo ve");
      login = false;
    }

    return login
    
  }

  getUSer(): string {
    let nameLogin: string;
    nameLogin = sessionStorage.getItem('user')!
    //console.log("fsdsdgdsgd");
    //console.log(nameLogin);
    return nameLogin
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
