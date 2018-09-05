import { Component, OnInit } from '@angular/core';
import { TablaCatalogos } from '../tabla-catalogos'; 
import { ServcatalogosService } from '../servcatalogos.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {
  navcat:string[] = ['curso','destino','ubicacion','telemento','eaprendizaje','filtro']

  tablaCatalogos:TablaCatalogos [] = [];
  constructor(private ServcatalogosService:ServcatalogosService){}

  ngOnInit() {
    // this.getCatalogos();
  }

}
