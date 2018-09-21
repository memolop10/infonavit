import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reporteador',
  templateUrl: './reporteador.component.html',
  styleUrls: ['./reporteador.component.css']
})
export class ReporteadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".botton").click(function(){
          $("#tablap").toggle();
      });
  });

  $(document).ready(function(){
    $(".botton2").click(function(){
        $("#tablaele").toggle();
    });
});
  }

}
