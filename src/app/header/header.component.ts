import { Component, OnInit } from '@angular/core';
import { DataserveService } from '../dataserve.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private serve:DataserveService,private route:Router) { }
  
  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

select(str){
    this.serve.selectOption(str);
    this.route.navigate(['/fruits']);
}

  ngOnInit() {
  }
}
