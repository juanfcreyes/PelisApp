import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { DecripcionPeliculaComponent } from './components/decripcion-pelicula/decripcion-pelicula.component'

const APP_ROUTES:Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'busqueda/:texto', component: BusquedaComponent  },
  { path: 'descripcion/:id', component: DecripcionPeliculaComponent  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}    
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });