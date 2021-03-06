import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserveService {

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
 vegetables = [
  {
      "name":"Ladyfinger",
      "category":"Vegetable",
      "price":100,
      "quantity":0,

  },
  {
      "name":"Potato",
      "category":"Vegetable",
      "price":50,
      "quantity":0,

  },
  {
      "name":"Tomato",
      "category":"Vegetable",
      "price":30,
      "quantity":0,

  },
  {
      "name":"Onion",
      "category":"Vegetable",
      "price":35,
      "quantity":0,

  },
  {
      "name":"Garlic",
      "category":"Vegetable",
      "price":45,
      "quantity":0,

  },
  {
      "name":"Ginger",
      "category":"Vegetable",
      "price":50,
      "quantity":0,

  },
  {
      "name":"Cauliflower",
      "category":"Vegetable",
      "price":30,
      "quantity":0,

  },
  {
      "name":"Lettuce",
      "category":"Vegetable",
      "price":35,
      "quantity":0,

  },
  {
      "name":"Brocolli",
      "category":"Vegetable",
      "price":40,
      "quantity":0,

  },
  {
      "name":"Capsicum",
      "category":"Vegetable",
      "price":50,
      "quantity":0,

  },
  ];

 dairy = [
  {
      "name":"Tofu",
      "category": "dairy",
      "price": 80,
      "quantity":0,
  },
  {
      "name":"Cottage Cheeze",
      "category": "dairy",
      "price": 70,
      "quantity":0,

  },
  {
      "name":"Milk",
      "category": "dairy",
      "price": 30,
      "quantity":0,
  },
  {
      "name":"Egg",
      "category": "dairy",
      "price": 4,
      "quantity":0,
  },
  {
      "name":"Chicken",
      "category": "dairy",
      "price": 250,
      "quantity":0,
  },
  {
      "name":"Beef",
      "category": "dairy",
      "price": 230,
      "quantity":0,
  },
  {
      "name":"Butter",
      "category": "dairy",
      "price": 50,
      "quantity":0,
  },
  {
      "name":"Cheeze",
      "category": "dairy",
      "price": 60,
      "quantity":0,
  },
  {
      "name":"Curd",
      "category": "dairy",
      "price": 40,
      "quantity":0,
  },
  {
      "name":"Yogurt",
      "category": "dairy",
      "price": 30,
      "quantity":0,
  },
  
  ];

 dryfruit = [
  {
      "name":"Walnut",
      "category": "dryfruit",
      "price": 400,
      "quantity":0,
  },
  {
      "name":"Almond",
      "category": "dryfruit",
      "price": 300,
      "quantity":0,
  },
  {
      "name":"Fennel",
      "category": "dryfruit",
      "price": 50,
      "quantity":0,
  },
  {
      "name":"Flax Seed",
      "category": "dryfruit",
      "price": 200,
      "quantity":0,
  },
  {
      "name":"Cashew",
      "category": "dryfruit",
      "price": 250,
      "quantity":0,
  },
  {
      "name":"Coconut",
      "category": "dryfruit",
      "price": 100,
      "quantity":0,
  },
  {
      "name":"Raisin",
      "category": "dryfruit",
      "price": 250,
      "quantity":0,
  },
  {
      "name":"Dates",
      "category": "dryfruit",
      "price": 250,
      "quantity":0,
  },
  {
      "name":"Peanut",
      "category": "dryfruit",
      "price": 100,
      "quantity":0,
  },
  {
      "name":"Lotus Seed",
      "category": "dryfruit",
      "price": 50,
      "quantity":0,
  },
  {
      "name":"Pistachio",
      "category": "dryfruit",
      "price": 150,
      "quantity":0,
  }
  ];

selectOption(str){
  if(str=='fruits'){
    console.log(this.fruit);
  }
  else if(str=='vegetables'){
    console.log(this.vegetables);
  }
  else if(str=='dairy'){
    console.log(this.dairy);
  }
  else{
    console.log(this.dryfruit);
  }
}


  constructor() { }
}
