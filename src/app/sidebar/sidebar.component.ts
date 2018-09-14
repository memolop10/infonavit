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

 
    public ngOnInit()
  {

    
     function setActive(element){
      
      console.log(element)
      $(".fred-li").removeClass("active")
      $(element).addClass("active")
 
  }
  
  
  }
}
