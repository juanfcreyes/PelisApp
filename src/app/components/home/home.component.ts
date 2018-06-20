import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  pagina:number = 1;
  paginas:Array<number> = [1,2,3,4,5];
  peliculas = []; 
  categoria:string = 'Cartelera';
  urlImage:string = 'https://image.tmdb.org/t/p/w300/';
 
  
  constructor(private _ps:PeliculasService,
              private router:Router) {
    this.buscarPeliculas(this.pagina);
  }

  ngOnInit() {
  }
  
  buscarPeliculas(pagina) {
    if(this.categoria === 'Cartelera') {
      this._ps.getInTheatres(pagina).subscribe((populares) => {
        this.peliculas = populares.results; 
      });
    }
    
    if(this.categoria === 'Populares') {
      this._ps.getPopulares(pagina).subscribe((populares) => {
        this.peliculas = populares.results; 
      });
    }
    
    if(this.categoria === 'Ninos') {
      this._ps.getPopularesKids(pagina).subscribe((populares) => {
        this.peliculas = populares.results; 
      });
    }
   
    this.actualizarPaginas(pagina);
  }
  
  actualizarPaginas(pagina) {
    const diferencia = this.calcularDiferencia(pagina);
    this.pagina = pagina;
    this.paginas = this.paginas.map(pagina => {
      return pagina + diferencia;
    });
  }
  
  calcularDiferencia(pagina){
    let diferencia = 0;
    if (pagina === this.paginas[this.paginas.length - 1]){
       diferencia = 2;
    }    
    if (pagina === this.paginas[0] && pagina > 2) {
       diferencia = -2;
    }
    return diferencia;
  }
  
  
  goToDetalle(idPelicula){
    this.router.navigate(['descripcion', idPelicula], { queryParams: { returnUrl: this.router.url }});
  }
}
