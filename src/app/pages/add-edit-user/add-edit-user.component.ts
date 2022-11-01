import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  
  formulario!: FormGroup;
  titulo!:string; 
  mensaje_validacion!: string;
  mensaje_usuario_creado_editado!: string;
  form_valido!: boolean;
  id!: string;           // guarda el valor de id enviado en la ruta
  is_add_user!: boolean; // permite elegir método de crear o actualizar ítem

  constructor(private user_service: UserServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }
    
  ngOnInit(): void {

    // si no existe id en la ruta se crea nuevo ítem
    // si existe id en la ruta actualiza ítem
    // si el valor de id no pertenece a ningún elemento
    // va a página no encontrada
    this.id = this.route.snapshot.params['id'];    
    this.is_add_user = !this.id;   

    // validaciones necesarias
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]      
    });

    if (!this.is_add_user){
      // Edita ítem con sus valores en el formulario para
      // actualizar
      this.titulo = `Editar usuario ${this.id}`
      let user_edit = this.user_service.getUser(parseInt(this.id));

      if (!user_edit){        
        this.router.navigate(['**'], { relativeTo: this.route });
      }

      this.formulario.setValue({
        nombre: user_edit.nombre,
        apellido: user_edit.apellido,
        email: user_edit.email
      })
    }
    else{
      // Añade nuevo ítem, campos formularios vacíos
      this.titulo = "Añadir usuario"
    }
  }

  // Llama al servicio para editar o crear nuevo elemento
  // Acepta el formulario si se cumplen las validaciones
  // una vez validado los datos borra el formulario
  insertUpdateUsuari(): void {
    let user: User = {} as unknown as User;   

    if (this.formulario.valid) {
      this.mensaje_validacion = "Todos los datos son válidos.";
      this.form_valido = true;   
      
      user = this.formulario.value;
      user.id = this.user_service.lista_usuario.length;
      
      if (this.is_add_user) {      
        this.user_service.insertUsuari(user);
        this.mensaje_usuario_creado_editado = "Usuario añadido"     
      }
      else {
        user.id = parseInt(this.id);
        this.user_service.updateUsuari(user);
        this.mensaje_usuario_creado_editado = "Usuario actualizado"
      } 
      this.formulario.reset();
    }
    else {
      this.mensaje_validacion = "Falta introducir algún campo o el mail es incorrecto.";
      this.form_valido = false;
    }     
  }    
}