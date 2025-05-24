import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NotificacionesService } from '../servios/notificaciones.service';

@Component({
  selector: 'app-seleccionar-asientos',
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './seleccionar-asientos.component.html',
  styleUrl: './seleccionar-asientos.component.scss'
})

export class SeleccionarAsientosComponent implements OnInit {

  constructor(
    private router: Router,
    private notificacionesService: NotificacionesService
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  rows: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  seatsPerRow: string[] = ['A', 'B', '', 'C', 'D'];
  selectedSeats: Set<string> = new Set();

  toggleSeat(seat: string): void {
    if (this.selectedSeats.has(seat)) {
      this.selectedSeats.delete(seat);
    } else {
      this.selectedSeats.add(seat);
    }
  }

  isSelected(seat: string): boolean {
    return this.selectedSeats.has(seat);
  }

  isOccupied(seat: string): boolean {
    // Aquí puedes agregar la lógica real de ocupación si la tienes
    return false;
  }

  onSubmit(): void {
    if(!this.selectedSeats.size) {
      this.notificacionesService.error('Debe seleccionar un asiento', '', 2000)

      console.log('No ha selecionado asietos')
      return;
    }

    this.notificacionesService.success('Accediendo a pagos', '', 2000)
    this.router.navigateByUrl('/pagos')

  }

}