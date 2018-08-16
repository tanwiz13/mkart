import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }
  item;
  tab=document.getElementById("tab");
  fruit = [
    {
        "name":"Apple",
        "category":"Fruit",
        "price":100,
        "quantity":0,

    },
    {
        "name":"Mango",
        "category":"Fruit",
        "price":50,
        "quantity":0,

    },
    {
        "name":"Banana",
        "category":"Fruit",
        "price":30,
        "quantity":0,

    },
    {
        "name":"Papaya",
        "category":"Fruit",
        "price":35,
        "quantity":0,

    },
    {
        "name":"Grapes",
        "category":"Fruit",
        "price":45,
        "quantity":0,

    },
    {
        "name":"Pomegranate",
        "category":"Fruit",
        "price":50,
        "quantity":0,

    },
    {
        "name":"Plum",
        "category":"Fruit",
        "price":30,
        "quantity":0,

    },
    {
        "name":"Cherry",
        "category":"Fruit",
        "price":35,
        "quantity":0,

    },
    {
        "name":"Guava",
        "category":"Fruit",
        "price":40,
        "quantity":0,

    },
    {
        "name":"Melon",
        "category":"Fruit",
        "price":50,
        "quantity":0,

    },
];

  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


  ngOnInit() {
  }
}
