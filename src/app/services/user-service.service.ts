import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  lista_usuario: User[] = [];

  constructor() {

   // Al abrir el navegador asigna a una lista los datos guardados en LocalStorage 
   this.getAllUsers().subscribe(items => this.lista_usuario = items);
   
  }
  
  // Devuelve el objeto solicitado de la lista
  getUser(id: number): User {    
    return this.lista_usuario[id-1]
  }
 

  // Devuelve todos los objetos guardados en LocalStorage
  // en una lista de objetos User,
  // si no existen datos entrega una lista vacía
  getAllUsers(): Observable<User[]> {
    let lista_usuarios: User[] = [];

    if (localStorage.getItem('users')) {      
      let lista = JSON.parse(localStorage.getItem('users')!);
      lista.forEach(function (value:User) {
        lista_usuarios.push(value);
      });      
    }    
    return of(lista_usuarios)
  }

  // Inserta un nuevo elemento en LocalStorage
  insertUsuari (usuario: User): void {    
    this.lista_usuario.push(usuario)
    localStorage.setItem('users', JSON.stringify(this.lista_usuario));    
  }

  // Elimina todos los elementos de LocalStorage
  resetAll(): void {
    localStorage.clear();
    this.lista_usuario=[];   
  }
  
  // Elimina un objeto de LocalStorage
  removeUsuari(id: number): void {   
    this.lista_usuario.splice(id, 1);
    localStorage.setItem('users', JSON.stringify(this.lista_usuario));       
  }
  
  // Actualiza un objeto de LocalStorage
  updateUsuari(user: User): void {
    this.lista_usuario[user.id-1] = user;
    localStorage.setItem('users', JSON.stringify(this.lista_usuario));
  }  
  
}
