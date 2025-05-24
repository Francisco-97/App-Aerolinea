import { Component } from '@angular/core';

@Component({
  selector: 'app-seleccionar-asientos',
  imports: [],
  templateUrl: './seleccionar-asientos.component.html',
  styleUrl: './seleccionar-asientos.component.scss'
})

export class SeleccionarAsientosComponent {

}

const airplane = document.getElementById("airplane");
const rows = 10;
    const seatsPerRow = ['A', 'B', '', 'C', 'D']; // '' es pasillo

    for (let i = 1; i <= rows; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      seatsPerRow.forEach(letter => {
        if (letter === '') {
          const aisle = document.createElement("div");
          aisle.classList.add("aisle");
          row.appendChild(aisle);
        } else {
          const seat = document.createElement("button");
          seat.classList.add("seat");
          seat.textContent = `${i}${letter}`;
          seat.dataset['seat'] = `${i}${letter}`;

          // Evento al hacer clic
          seat.addEventListener("click", () => {
            if (!seat.classList.contains("occupied")) {
              seat.classList.toggle("selected");
            }
          });

          row.appendChild(seat);
        }
      });

      airplane.appendChild(row);
    }