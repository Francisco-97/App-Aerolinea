import { Component, Inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { NotificacionesService } from '../servios/notificaciones.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SeleccionarAsientosComponent } from "../seleccionar-asientos/seleccionar-asientos.component";

interface Flight {
  id: number;
  //airline: string;
  from: string;
  to: string;
  departure: Date;
  arrival: Date;
  price: number;
}

interface Vuelos {
  id: number;
  numeroVuelo: string;
  asientosLibres: number;
  clase: string;
  piloto: string;
  origen: string;
  destino: string;
  fechaSalida: Date;
  fechaRegreso: Date;
}

@Component({
  selector: 'app-lista-vuelos',
  imports: [MatTableModule, MatCardModule, MatButtonModule, CommonModule, MatButtonModule,
    MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle, SeleccionarAsientosComponent],
  templateUrl: './lista-vuelos.component.html',
  styleUrl: './lista-vuelos.component.scss'
})
export class ListaVuelosComponent {
   displayedColumns: string[] = [/*'airline',*/ 'from', 'to', 'departure', 'arrival', 'price', 'action'];
   displayedColumnsVuelos: string[] = ['numeroVuelo', 'asientosLibres', 'clase', 'piloto', 'origen', 'destino', 'fechaSalida', 'fechaRegreso', 'action']
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

  /*vuelos: Vuelos[] = [
  {
    id: 1,
    numeroVuelo: "RD1001",
    asientosLibres: 35,
    clase: "Económica",
    piloto: "Carlos Martínez",
    origen: "Santo Domingo",
    destino: "Madrid",
    fechaSalida: new Date("2025-06-01"),
    fechaRegreso: new Date("2025-06-15")
  },
  {
    id: 2,
    numeroVuelo: "RD1002",
    asientosLibres: 12,
    clase: "Primera",
    piloto: "Ana Rodríguez",
    origen: "Punta Cana",
    destino: "Nueva York",
    fechaSalida: new Date("2025-06-02"),
    fechaRegreso: new Date("2025-06-12")
  },
  {
    id: 3,
    numeroVuelo: "RD1003",
    asientosLibres: 22,
    clase: "Ejecutiva",
    piloto: "Luis Gómez",
    origen: "Santiago",
    destino: "Toronto",
    fechaSalida: new Date("2025-06-03"),
    fechaRegreso: new Date("2025-06-13")
  },
  {
    id: 4,
    numeroVuelo: "RD1004",
    asientosLibres: 40,
    clase: "Económica",
    piloto: "María Jiménez",
    origen: "La Romana",
    destino: "París",
    fechaSalida: new Date("2025-06-05"),
    fechaRegreso: new Date("2025-06-20")
  },
  {
    id: 5,
    numeroVuelo: "RD1005",
    asientosLibres: 8,
    clase: "Primera",
    piloto: "Pedro Fernández",
    origen: "Santo Domingo",
    destino: "Londres",
    fechaSalida: new Date("2025-06-06"),
    fechaRegreso: new Date("2025-06-18")
  },
  {
    id: 6,
    numeroVuelo: "RD1006",
    asientosLibres: 18,
    clase: "Ejecutiva",
    piloto: "Julia Herrera",
    origen: "Punta Cana",
    destino: "Miami",
    fechaSalida: new Date("2025-06-07"),
    fechaRegreso: new Date("2025-06-14")
  },
  {
    id: 7,
    numeroVuelo: "RD1007",
    asientosLibres: 25,
    clase: "Económica",
    piloto: "David Pérez",
    origen: "Santiago",
    destino: "Buenos Aires",
    fechaSalida: new Date("2025-06-10"),
    fechaRegreso: new Date("2025-06-25")
  },
  {
    id: 8,
    numeroVuelo: "RD1008",
    asientosLibres: 14,
    clase: "Ejecutiva",
    piloto: "Luisa Mejía",
    origen: "Santo Domingo",
    destino: "Tokio",
    fechaSalida: new Date("2025-06-12"),
    fechaRegreso: new Date("2025-06-30")
  },
  {
    id: 9,
    numeroVuelo: "RD1009",
    asientosLibres: 30,
    clase: "Económica",
    piloto: "José Ramírez",
    origen: "Punta Cana",
    destino: "Los Ángeles",
    fechaSalida: new Date("2025-06-15"),
    fechaRegreso: new Date("2025-06-28")
  },
  {
    id: 10,
    numeroVuelo: "RD1010",
    asientosLibres: 5,
    clase: "Primera",
    piloto: "Andrea Vargas",
    origen: "La Romana",
    destino: "Dubái",
    fechaSalida: new Date("2025-06-17"),
    fechaRegreso: new Date("2025-07-01")
  },
  {
    id: 11,
    numeroVuelo: "RD1011",
    asientosLibres: 20,
    clase: "Económica",
    piloto: "Carlos Torres",
    origen: "Santo Domingo",
    destino: "Berlín",
    fechaSalida: new Date("2025-06-18"),
    fechaRegreso: new Date("2025-07-03")
  },
  {
    id: 12,
    numeroVuelo: "RD1012",
    asientosLibres: 16,
    clase: "Ejecutiva",
    piloto: "Sofía Batista",
    origen: "Punta Cana",
    destino: "Roma",
    fechaSalida: new Date("2025-06-20"),
    fechaRegreso: new Date("2025-07-05")
  },
  {
    id: 13,
    numeroVuelo: "RD1013",
    asientosLibres: 10,
    clase: "Primera",
    piloto: "Miguel Castillo",
    origen: "Santo Domingo",
    destino: "Ámsterdam",
    fechaSalida: new Date("2025-06-22"),
    fechaRegreso: new Date("2025-07-06")
  },
  {
    id: 14,
    numeroVuelo: "RD1014",
    asientosLibres: 32,
    clase: "Económica",
    piloto: "Daniela Reyes",
    origen: "La Romana",
    destino: "Seúl",
    fechaSalida: new Date("2025-06-24"),
    fechaRegreso: new Date("2025-07-10")
  },
  {
    id: 15,
    numeroVuelo: "RD1015",
    asientosLibres: 6,
    clase: "Primera",
    piloto: "Juan Álvarez",
    origen: "Santiago",
    destino: "Ciudad de México",
    fechaSalida: new Date("2025-06-25"),
    fechaRegreso: new Date("2025-07-08")
  },
  {
    id: 16,
    numeroVuelo: "RD1016",
    asientosLibres: 27,
    clase: "Ejecutiva",
    piloto: "Natalia Peña",
    origen: "Santo Domingo",
    destino: "San Juan",
    fechaSalida: new Date("2025-06-27"),
    fechaRegreso: new Date("2025-07-04")
  },
  {
    id: 17,
    numeroVuelo: "RD1017",
    asientosLibres: 11,
    clase: "Ejecutiva",
    piloto: "Raúl Soto",
    origen: "Punta Cana",
    destino: "Lima",
    fechaSalida: new Date("2025-06-28"),
    fechaRegreso: new Date("2025-07-12")
  },
  {
    id: 18,
    numeroVuelo: "RD1018",
    asientosLibres: 40,
    clase: "Económica",
    piloto: "Lorena Cruz",
    origen: "Santo Domingo",
    destino: "Chicago",
    fechaSalida: new Date("2025-07-01"),
    fechaRegreso: new Date("2025-07-15")
  },
  {
    id: 19,
    numeroVuelo: "RD1019",
    asientosLibres: 9,
    clase: "Primera",
    piloto: "Esteban Ruiz",
    origen: "Santiago",
    destino: "Barcelona",
    fechaSalida: new Date("2025-07-03"),
    fechaRegreso: new Date("2025-07-20")
  },
  {
    id: 20,
    numeroVuelo: "RD1020",
    asientosLibres: 29,
    clase: "Económica",
    piloto: "Gloria Sánchez",
    origen: "Punta Cana",
    destino: "Estambul",
    fechaSalida: new Date("2025-07-05"),
    fechaRegreso: new Date("2025-07-22")
  }
];*/

vuelos = [
  {
    id: 1,
    numeroVuelo: "RD1001",
    asientosLibres: 35,
    clase: "Económica",
    piloto: "Carlos Martínez",
    origen: "Santo Domingo",
    destino: "Madrid",
    fechaSalida: new Date("2025-06-01"),
    fechaRegreso: new Date("2025-06-15")
  },
  {
    id: 2,
    numeroVuelo: "RD1002",
    asientosLibres: 12,
    clase: "Primera",
    piloto: "Ana Rodríguez",
    origen: "Punta Cana",
    destino: "Nueva York",
    fechaSalida: new Date("2025-06-02"),
    fechaRegreso: new Date("2025-06-12")
  },
  {
    id: 3,
    numeroVuelo: "RD1003",
    asientosLibres: 22,
    clase: "Ejecutiva",
    piloto: "Luis Gómez",
    origen: "Santiago",
    destino: "Toronto",
    fechaSalida: new Date("2025-06-03"),
    fechaRegreso: new Date("2025-06-13")
  },
  {
    id: 4,
    numeroVuelo: "RD1004",
    asientosLibres: 40,
    clase: "Económica",
    piloto: "María Jiménez",
    origen: "La Romana",
    destino: "París",
    fechaSalida: new Date("2025-06-05"),
    fechaRegreso: new Date("2025-06-20")
  },
  {
    id: 5,
    numeroVuelo: "RD1005",
    asientosLibres: 8,
    clase: "Primera",
    piloto: "Pedro Fernández",
    origen: "Santo Domingo",
    destino: "Londres",
    fechaSalida: new Date("2025-06-06"),
    fechaRegreso: new Date("2025-06-18")
  },
  {
    id: 6,
    numeroVuelo: "RD1006",
    asientosLibres: 18,
    clase: "Ejecutiva",
    piloto: "Julia Herrera",
    origen: "Punta Cana",
    destino: "Miami",
    fechaSalida: new Date("2025-06-07"),
    fechaRegreso: new Date("2025-06-14")
  },
  {
    id: 7,
    numeroVuelo: "RD1007",
    asientosLibres: 25,
    clase: "Económica",
    piloto: "David Pérez",
    origen: "Santiago",
    destino: "Buenos Aires",
    fechaSalida: new Date("2025-06-10"),
    fechaRegreso: new Date("2025-06-25")
  },
  {
    id: 8,
    numeroVuelo: "RD1008",
    asientosLibres: 14,
    clase: "Ejecutiva",
    piloto: "Luisa Mejía",
    origen: "Santo Domingo",
    destino: "Tokio",
    fechaSalida: new Date("2025-06-12"),
    fechaRegreso: new Date("2025-06-30")
  },
  {
    id: 9,
    numeroVuelo: "RD1009",
    asientosLibres: 30,
    clase: "Económica",
    piloto: "José Ramírez",
    origen: "Punta Cana",
    destino: "Los Ángeles",
    fechaSalida: new Date("2025-06-15"),
    fechaRegreso: new Date("2025-06-28")
  },
  {
    id: 10,
    numeroVuelo: "RD1010",
    asientosLibres: 5,
    clase: "Primera",
    piloto: "Andrea Vargas",
    origen: "La Romana",
    destino: "Dubái",
    fechaSalida: new Date("2025-06-17"),
    fechaRegreso: new Date("2025-07-01")
  },
  {
    id: 11,
    numeroVuelo: "RD1011",
    asientosLibres: 20,
    clase: "Económica",
    piloto: "Carlos Torres",
    origen: "Santo Domingo",
    destino: "Berlín",
    fechaSalida: new Date("2025-06-18"),
    fechaRegreso: new Date("2025-07-03")
  },
  {
    id: 12,
    numeroVuelo: "RD1012",
    asientosLibres: 16,
    clase: "Ejecutiva",
    piloto: "Sofía Batista",
    origen: "Punta Cana",
    destino: "Roma",
    fechaSalida: new Date("2025-06-20"),
    fechaRegreso: new Date("2025-07-05")
  },
  {
    id: 13,
    numeroVuelo: "RD1013",
    asientosLibres: 10,
    clase: "Primera",
    piloto: "Miguel Castillo",
    origen: "Santo Domingo",
    destino: "Ámsterdam",
    fechaSalida: new Date("2025-06-22"),
    fechaRegreso: new Date("2025-07-06")
  },
  {
    id: 14,
    numeroVuelo: "RD1014",
    asientosLibres: 32,
    clase: "Económica",
    piloto: "Daniela Reyes",
    origen: "La Romana",
    destino: "Seúl",
    fechaSalida: new Date("2025-06-24"),
    fechaRegreso: new Date("2025-07-10")
  },
  {
    id: 15,
    numeroVuelo: "RD1015",
    asientosLibres: 6,
    clase: "Primera",
    piloto: "Juan Álvarez",
    origen: "Santiago",
    destino: "Ciudad de México",
    fechaSalida: new Date("2025-06-25"),
    fechaRegreso: new Date("2025-07-08")
  },
  {
    id: 16,
    numeroVuelo: "RD1016",
    asientosLibres: 27,
    clase: "Ejecutiva",
    piloto: "Natalia Peña",
    origen: "Santo Domingo",
    destino: "San Juan",
    fechaSalida: new Date("2025-06-27"),
    fechaRegreso: new Date("2025-07-04")
  },
  {
    id: 17,
    numeroVuelo: "RD1017",
    asientosLibres: 11,
    clase: "Ejecutiva",
    piloto: "Raúl Soto",
    origen: "Punta Cana",
    destino: "Lima",
    fechaSalida: new Date("2025-06-28"),
    fechaRegreso: new Date("2025-07-12")
  },
  {
    id: 18,
    numeroVuelo: "RD1018",
    asientosLibres: 40,
    clase: "Económica",
    piloto: "Lorena Cruz",
    origen: "Santo Domingo",
    destino: "Chicago",
    fechaSalida: new Date("2025-07-01"),
    fechaRegreso: new Date("2025-07-15")
  },
  {
    id: 19,
    numeroVuelo: "RD1019",
    asientosLibres: 9,
    clase: "Primera",
    piloto: "Esteban Ruiz",
    origen: "Santiago",
    destino: "Barcelona",
    fechaSalida: new Date("2025-07-03"),
    fechaRegreso: new Date("2025-07-20")
  },
  {
    id: 20,
    numeroVuelo: "RD1020",
    asientosLibres: 29,
    clase: "Económica",
    piloto: "Gloria Sánchez",
    origen: "Punta Cana",
    destino: "Estambul",
    fechaSalida: new Date("2025-07-05"),
    fechaRegreso: new Date("2025-07-22")
  }
];

datasource = new MatTableDataSource(this.vuelos);

  constructor(
    private router: Router,
    private _notifacion: NotificacionesService,
    //private dialogreff = MatDialogRef<ListaVuelosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(){
    console.log(this.data.filtro)
    this.datasource.filterPredicate = (data, filter: string) =>
        data.destino.toLocaleLowerCase().includes(filter) ||
        data.origen.toLocaleLowerCase().includes(filter);
    if(this.data.filtro){
      //const filtro = (this.data.filtro.target as HTMLInputElement).value;
      this.datasource.filter = this.data.filtro.trim().toLowerCase();
      //this.applyFilter(this.data.filtro)
    }
  }

  reservar(): void {
    this.router.navigateByUrl('/asientos')
    // this._notifacion.vueloReservado();
  }

  applyFilter(evento: Event){
    console.log(evento)
    //evento.key = this.data.filtro
    const filtro = (evento.target as HTMLInputElement).value;
      this.datasource.filter = filtro.trim().toLowerCase();
  }
}
