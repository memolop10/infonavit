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


     $(document).ready(function(){
      //alert("<div style='color:red;'></div>");
     
     // $('#tcurso').html('<button style="color:red;"  class="icono-estatus" type="button" onclick="alert()">Click Me!</button>');
        
      $.getJSON("http://qa.visionariagames.com/adminws/curso/lista",function(data){
              var sample_data = '';
              $.each(data,function(key, value){
                  sample_data += '<tr>';
                  sample_data += '<td>'+ value.nombre +'</td>';
                  sample_data += '<td>'+ value.fechaCreacion +'</td>';
                  if(value.estatus === 1){

                    

                  sample_data += '<td><span class="icono-estatus">true</span></td>';}
                 // sample_data += '<td>true</td>';}
                   else{
                    sample_data += '<td><span class="icono-estatus2">false</span></td>';
                   // sample_data += '<td>falso</td>';
                  }
                  sample_data += '<td><span class="icono-edit catalogocur" data-toggle="modal" data-target="#mymodal"></span><span class="icono-exit"></span><td>';
                   sample_data += '</tr>';
              });
              $('#tcurso').append(sample_data);

      });
  });
  

    
  }

}
