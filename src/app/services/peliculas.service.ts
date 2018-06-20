import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apikey:string = 'c858b29918c183c64ca74631116da63c';
  private urlApp:string = 'https://api.themoviedb.org/3'
  

  constructor(private http:HttpClient) { }
  
  getPopulares(pagina) {
    const url = `${this.urlApp}/discover/movie?api_key=${this.apikey}&sort_by=popularity.desc&page=${pagina}`;
    return this.http.get(url);
  }
  
  getPopularesKids(pagina) {
    const url = `${this.urlApp}/discover/movie?api_key=${this.apikey}&&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=${pagina}`;
    return this.http.get(url);
  }
  
   getInTheatres(pagina) {     
     const url = `${this.urlApp}/discover/movie?api_key=${this.apikey}&primary_release_date.gte=${this.componerFechaTrientaAntes()}&primary_release_date.lte=${this.componerFechaHoy()}&page=${pagina}&sort_by=popularity.desc`;
     return this.http.get(url);
  }
  
  search(texto){
    const url = `${this.urlApp}/search/movie?api_key=${this.apikey}&query=${texto}&sort_by=popularity.desc`;
    return this.http.get(url);
  }
  
  
  getMovieById(movieId){
    const url =`${this.urlApp}/movie/${movieId}?api_key=${this.apikey}&append_to_response=videos`;
    return this.http.get(url);
  }
  
  componerFechaHoy(){
    const fecha = (new Date().toLocaleDateString()).split('/');
    fecha[1] = fecha[1].length > 1 ? fecha[1] : `0${fecha[1]}`
    return `${fecha[2]}-${fecha[1]}-${fecha[0]}`
  }
  
  componerFechaTrientaAntes(){
    const hoy = new Date();
    const fecha = new Date(hoy.setDate(hoy.getDate()-30)).toLocaleDateString().split('/');
    fecha[1] = fecha[1].length > 1 ? fecha[1] : `0${fecha[1]}`
    return `${fecha[2]}-${fecha[1]}-${fecha[0]}`
  }
  
  

}
