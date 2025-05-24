import { Routes } from '@angular/router';
import { ListaVuelosComponent } from './lista-vuelos/lista-vuelos.component';
import { HomeComponent } from './home/home.component';
import { PagosComponent } from './pagos/pagos.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ListaReservacionesComponent } from './lista-reservaciones/lista-reservaciones.component';
import { SeleccionarAsientosComponent } from './seleccionar-asientos/seleccionar-asientos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'listaVuelo', component:ListaVuelosComponent }, 
    { path: 'pagos', component:PagosComponent },
    {path: 'registro', component:RegistroComponent},
    {path: 'login', component:LoginComponent},
    {path: 'reservaciones', component:ListaReservacionesComponent},
    {path: 'asientos', component:SeleccionarAsientosComponent}
];
