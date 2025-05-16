import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { ListaVuelosComponent } from '../lista-vuelos/lista-vuelos.component';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NotificacionesService } from '../servios/notificaciones.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatDialogModule, MatCardModule, MatNativeDateModule, MatDatepickerModule,
    MatInputModule, MatFormFieldModule, MatMenuModule, NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly dialog = inject(MatDialog);
  private toats = Inject(ToastrService);
  config: MatSnackBarConfig
  private snackBar = inject(MatSnackBar)
  Name: string;
  User: boolean = false

  constructor(private router: Router,
    //private dialog = inject(MatDialog),
    private notify: NotificacionesService,
    //private toats: ToastrService
  ){}

  openDialog(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '35%',
      height: '75%',
      maxHeight: 'none',
      minHeight: 'none',
      data: {
        nombre: this.Name
      }
    })
    dialogRef.afterClosed().subscribe(result =>{
        console.log("hola",result)
        if(result){
          this.Name = result//"Usuario Corporativo"//"Usuario Minorista"
          console.log(this.Name)
          this.ValidarUsuario(this.Name);
          this.notify.Bienvenido()
        }
        
    })

  }

  goListaVuelo(){
    const dialogRef = this.dialog.open(ListaVuelosComponent, {
      width: '79%',
      height: '85%',
      maxWidth: '90vw',
      maxHeight: '90vw',
      data: {
        nombre: this.Name
      }
    })
    dialogRef.afterClosed().subscribe(result =>{
      //this.notify.vueloReservado()
      
    })

    //this.notify.success("Hola", "Ok")
    //this.notify.vueloReservado()
    //this.shormessa("Hola")
  }

  shormessa(message: string, title?: string){
    this.snackBar.open(message, title, {
      duration: 5000,
      panelClass: ['error']
    })
  }

  cerrarSesion(){
    this.Name = ""
  }

  ValidarUsuario(result:string){
    if(this.Name === "Usuario Corporativo")
      this.User = true; 
  }
}
