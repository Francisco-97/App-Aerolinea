import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-reservaciones',
  imports: [MatDialogModule, MatButtonModule, NgFor],
  templateUrl: './lista-reservaciones.component.html',
  styleUrl: './lista-reservaciones.component.scss'
})
export class ListaReservacionesComponent {
  vuelos = [
    {
      numero: "RD101",
      asientos: "23 / 5",
      piloto: "Carlos Peña",
      origen: "Santo Domingo",
      destino: "Madrid",
      salida: "2025-06-20",
      regreso: "2025-07-05",
      solicitud: "2025-05-10"
    },
    {
      numero: "RD234",
      asientos: "8 / 2",
      piloto: "María Torres",
      origen: "Punta Cana",
      destino: "Nueva York",
      salida: "2025-06-25",
      regreso: "2025-07-02",
      solicitud: "2025-05-12"
    },
    {
      numero: "RD300",
      asientos: "0 / 0",
      piloto: "Juan Rodríguez",
      origen: "Santiago",
      destino: "Toronto",
      salida: "2024-12-18",
      regreso: "2025-01-03",
      solicitud: "2024-11-10"
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<ListaReservacionesComponent>,
    //public DialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){}

}
