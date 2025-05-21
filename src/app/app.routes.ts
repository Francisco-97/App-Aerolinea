import { Routes } from '@angular/router';
import { ListaVuelosComponent } from './lista-vuelos/lista-vuelos.component';
import { HomeComponent } from './home/home.component';
import { PagosComponent } from './pagos/pagos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'listaVuelo', component:ListaVuelosComponent }, 
    { path: 'pagos', component:PagosComponent }
];
