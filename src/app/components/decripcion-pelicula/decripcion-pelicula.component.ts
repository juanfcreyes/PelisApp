import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-decripcion-pelicula',
  templateUrl: './decripcion-pelicula.component.html',
  styles: []
})
export class DecripcionPeliculaComponent implements OnInit {
  
  urlImage:string = 'https://image.tmdb.org/t/p/w300/';
  idTrailer = '';
  pelicula:any = {}; 
  retrunUrl:any ;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private _ps:PeliculasService) { 
  }
  
  ngOnInit() {
    this.activatedRoute.params.map(params =>params['id'] ).subscribe((id) => {
      this._ps.getMovieById(id).subscribe((pelicula:any) => {
        this.pelicula = pelicula;
        this.obtenerTrailer();
      });
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }
  
  obtenerTrailer() {
    if(this.pelicula.videos) {
      this.pelicula.videos.results.forEach((video)=> {
        if(video.type === 'Trailer' && video.site === 'YouTube'){
          this.idTrailer = video.key;
          return;
        }
      })
    }
  }
  
  regresar() {
    this.router.navigateByUrl(this.returnUrl);
  }

}
