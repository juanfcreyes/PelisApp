import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  
  peliculas:Array<any> = [];
  urlImage:string = 'https://image.tmdb.org/t/p/w300/';
  texto:string = '';
  
  
  constructor(private activatedRoute: ActivatedRoute,
              private _ps:PeliculasService,
              private router:Router) { }
   ngOnInit() {
    this.activatedRoute.params.map(params =>params['texto']).subscribe((texto) => {
      if(texto !== ''){
        this.texto = texto;
        this.buscarPeliculas();
      }
    });
  }

  buscarPeliculas() {
    this._ps.search(this.texto).subscribe((peliculas:any) => {
      this.peliculas = peliculas.results;
    });
  }
  
  goToDetalle(idPelicula){

    this.router.navigate(['descripcion', idPelicula], { queryParams: { returnUrl: `${this.router.url}${this.texto}` }});
  }
}
