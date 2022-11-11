import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../models/user_login.model';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo!: string;
  formulario_login!: FormGroup;
  mensaje_validacion!: string;
  //mensaje_usuario!: string;
  form_login_valido!: boolean;

  constructor(private fb: FormBuilder,
              private login_service: LoginServiceService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.titulo = "Login";    
    this.create_form_login();
  }

  create_form_login(): void {
    // crea formulario login
    this.formulario_login = this.fb.group({
      usuario: ['', [Validators.required]],      
      password: ['', [Validators.required]]      
    }); 

  }

  login(): void { 
    // obtiene usuario y password del formulario login
    // si usuario está registrado redirige a pagina home
    // tambien gestiona validaciones   
    let user_login: LoginUser = {} as unknown as LoginUser; 
    let logueado: boolean;  
    if (this.formulario_login.valid) {      
      user_login = this.formulario_login.value;      
      logueado = this.login_service.getLogin(user_login);
      if (logueado){
        this.form_login_valido = true;
        this.mensaje_validacion = "Usuario correcto"
        this.formulario_login.reset();
        this.router.navigate(['application/home']);
      }
      else {
        this.form_login_valido = false;
        this.mensaje_validacion = "Usuario incorrecto"
      }      
    }
    else {
      this.form_login_valido = false;
      this.mensaje_validacion = "Falta introducir algún campo.";
    }  
  }
}