import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// Llama al servicio userService para listar todos los items
  // de LocalStorage, y borra uno o todos los elementos.
  // Si quieres editar o crear un nuevo usuario te lleva a las 
  // páginas de add_user o edit_user/id_item 
  lista_usuario :User[]= [];
 
  constructor(private user_service: UserServiceService) { }  
  
  ngOnInit(): void {
  } 

  getAllUsers(): User[] {    
    // primera opcion sin observable
    // return this.user_service.getAllUsers()

    // segunda opcion subscripcion observable    
    this.user_service.getAllUsers().subscribe(items => this.lista_usuario = items);
    return this.lista_usuario;    
  }
  removeUsuari(id: number): void{    
    this.user_service.removeUsuari(id)
  }
  resetAll(): void {
    this.user_service.resetAll();
  }  
}