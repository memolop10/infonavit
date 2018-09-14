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

    function setActive(element){
      console.log(element)
      $(".fred-buttons").removeClass("active")
      $(element).addClass("active")
  }
   }


  }