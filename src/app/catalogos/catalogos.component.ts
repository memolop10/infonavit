import { Component, OnInit } from '@angular/core';
import { TablaCatalogos } from '../tabla-catalogos'; 
import { ServcatalogosService } from '../servcatalogos.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {
 


  tablaCatalogos:TablaCatalogos [] = [];
  constructor(private ServcatalogosService:ServcatalogosService){}

  ngOnInit() {
    // $('icono-edit catalogocur').click(function (){
    //   $('#mymodal').modal('show');
    //  });

    //  $('icono-edit catalogodes').click(function (){
    //   $('#mymodaldes').modal('show');
    //  });

    //  $('icono-edit catalogoubi').click(function (){
    //   $('#mymodalubi').modal('show');
    //  });

     doClick('icono-edit catalogocur', '#mymodal');
     doClick('icono-edit catalogodes', '#mymodaldes');
     doClick('icono-edit catalogoubi', '#mymodalubi');
     doClick('icono-edit catalogotelemento' , '#mymodaltelemento');
     doClick('icono-edit catalogoeaprendizaje' , '#mymodaleaprendizaje');
     doClick('icono-edit catalogofiltro' , '#mymodalfiltro');
     

     

     function doClick(a, b){
      $(a).click(function (){
        $(b).modal('show');
       });
     }
  

    
  }

}
