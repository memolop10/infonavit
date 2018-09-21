import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('icono-edit catalogogusuarios').click(function (){
        $('#mymodalgusuarios').modal('show');
       });
  }

}
