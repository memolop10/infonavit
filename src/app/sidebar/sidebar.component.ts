import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  title = 'Look jQuery Animation working in action!';

  constructor() { }

 
  ngOnInit() {

  $(document).ready(function(){

    

    $('.fred-li').click(function(){

      if($(this).hasClass('active')){

      }else{
        $('.fred-li').removeClass('active')
        $(this).addClass('active')
        
      }
    })

    

  })

  var obj = $.parseJSON( '{ "name": "John" }' );
        console.log( obj.name === "John" );

  }


  }