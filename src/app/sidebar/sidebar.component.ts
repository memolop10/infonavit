import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  title = 'Look jQuery Animation working in action!';

  constructor() { }

 
  ngOnInit() {

  //   $("li").click(function(event){
  //       alert('hola');
  //      $(this).addclass("fred-li");

  //   });
   }


  }