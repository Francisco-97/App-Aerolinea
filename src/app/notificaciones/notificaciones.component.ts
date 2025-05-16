import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notificaciones',
  imports: [ ],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.scss'
})
export class NotificacionesComponent {
  snackBarRef = inject(MatSnackBarRef);
  constructor(public snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ){}

  close(){
    this.snackBar.dismiss();
  }
}
