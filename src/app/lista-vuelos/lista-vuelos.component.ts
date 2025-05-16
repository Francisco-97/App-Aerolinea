import { Component, Inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { NotificacionesService } from '../servios/notificaciones.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Flight {
  id: number;
  //airline: string;
  from: string;
  to: string;
  departure: Date;
  arrival: Date;
  price: number;
}

@Component({
  selector: 'app-lista-vuelos',
  imports: [MatTableModule, MatCardModule, MatButtonModule, CommonModule, MatButtonModule,
    MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle],
  templateUrl: './lista-vuelos.component.html',
  styleUrl: './lista-vuelos.component.scss'
})
export class ListaVuelosComponent {
   displayedColumns: string[] = [/*'airline',*/ 'from', 'to', 'departure', 'arrival', 'price', 'action'];
   readonly dialogref = Inject(MatDialogRef<ListaVuelosComponent>)
   private readonly confi = Inject(MatSnackBar)
  flights: Flight[] = [
    {
      id: 1,
      //airline: 'FlyWorld',
      from: 'Santo Domingo',
      to: 'Nueva York',
      departure: new Date('2025-06-10T09:00'),
      arrival: new Date('2025-09-10T15:30'),
      price: 450
    },
    {
      id: 2,
      //airline: 'SkyJet',
      from: 'Santo Domingo',
      to: 'Buenos Aires',
      departure: new Date('2025-06-11T13:00'),
      arrival: new Date('2025-09-11T17:20'),
      price: 220
    },
    {
      id: 3,
      //airline: 'AeroPlus',
      from: 'Santo Domingo',
      to: 'Roma',
      departure: new Date('2025-06-12T08:30'),
      arrival: new Date('2025-09-12T10:15'),
      price: 180 
    }
  ];

  constructor(private _notifacion: NotificacionesService,
    //private dialogreff = MatDialogRef<ListaVuelosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  reservar(){
    this._notifacion.vueloReservado();
  }
}
