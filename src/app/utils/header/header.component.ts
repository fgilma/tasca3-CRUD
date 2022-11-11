import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: string = "CRUD TASCA 3";
  subtitle: string = "Crear un CRUD en Angular y datos persistentes en LocalStorage, login, guards y módulos lazy-loading" 
 
  constructor(private loginService: LoginServiceService,
              private router: Router) { }

  ngOnInit(): void {}

  
  userLogin(): string { 
    // obtenemos el nombre del usuario que se ha logueado  
    return this.loginService.getUSer()
  }

  logout(): void {
    // hacemos logout y volvemos a la página de login
    this.loginService.logOut();    
    this.router.navigate(['/login'])
  }
  
  isLogged(): boolean {
    // nos devuelve un booleano si estamos o no logueados
    return this.loginService.isLogged()
  }   
}
