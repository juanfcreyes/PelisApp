import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { DecripcionPeliculaComponent } from './components/decripcion-pelicula/decripcion-pelicula.component';

import { APP_ROUTING } from './app.routes' 
import { PeliculasService } from './services/peliculas.service'
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusquedaComponent,
    PeliculaComponent,
    DecripcionPeliculaComponent,
    DomSeguroPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
