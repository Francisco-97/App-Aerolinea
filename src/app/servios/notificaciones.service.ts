import { inject, Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarModule} from '@angular/material/snack-bar';
import { title } from 'process';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  constructor(public snackBar: MatSnackBar) { 
  }

  success(message: string, title?: string){
    this.snackBar.openFromComponent(NotificacionesComponent, {
      data: {
        message: message,
        title: title,
        icon: 'fa-check-circle'
      },
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['info']
    })
  }

  acceder(message: string, title?: string){
    this.snackBar.openFromComponent(NotificacionesComponent, {
      data: {
        message: message,
        title: title,
        icon: 'fa-check-circle'
      },
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['acceso']
    })
  }

  error(message: string, title?: string){
    this.snackBar.openFromComponent(NotificacionesComponent, {
      data: {
        message: message,
        title: title,
        icon: 'fa-check-circle'
      },
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['error']
    })
  }

  vueloReservado(){
    this.success(' ✅ ¡Reserva enviada! Recibirás un correo con los detalles.')
  }

  Bienvenido(){
    this.acceder("¡Bienvenido Usuario!")
  }

  Denegado(){
    this.error("Usuario o contraseña incorrecta")
  }
}
