import { Injectable } from '@angular/core';
import { TablaCatalogos } from "./tabla-catalogos";
import { ListadoCatalogos } from './listado-catalogos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServcatalogosService {

  constructor(  ) { }

  getCatalogos(): Observable<TablaCatalogos[]> {
    return of(ListadoCatalogos);
  }
  getCatalogo(curso:string): Observable<TablaCatalogos> {
    return of(ListadoCatalogos.find(centro => centro.curso === curso));
  }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class ServcatalogosService {

//   constructor() { }
// }
