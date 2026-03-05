class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
    getDetails(){
      console.log(`Book: ${this.title} by ${this.author} published in ${this.year}`);
  }
}

let book1 = new Book("Success in Habits", "Daraksha", 2024);
book1.getDetails();
let book2 = new Book("Peace in Meditation", "Maria", 2018);
book2.getDetails();

//Book: Success in Habits by Daraksha published in 2024
//Book: Peace in Meditation by Maria published in 2018

class Car{
  constructor(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getCarInfo(){
    console.log(`Car: ${this.brand} ${this.model} manufactured in ${2020}`);
  }
}

let car1 = new Car("Toyota", "Corollo", 2020);
car1.getCarInfo();
let car2 = new Car("BMW", "X5", 2022);
car2.getCarInfo();

//Car: Toyota Corollo manufactured in 2020
//Car: BMW X5 manufactured in 2020

class BankAccount{
  constructor(accountHolder, balance){
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(add){
    this.balance = add + this.balance;
    console.log(`Balance: ${this.balance}`);
  }

  withdraw(subtract){
   this.balance = this.balance - subtract;
   console.log(`Balance: ${this.balance}`);
  }
}

let acc1 = new BankAccount("Muskaan", 10000);
acc1.deposit(60000);
acc1.withdraw(2000);

//Balance: 70000
//Balance: 68000

class Rectangle{
  constructor(width, height){
    this.height = height;
    this.width = width;
  }
  getArea(){
     let Area = this.width * this.height;
     console.log(`Area: ${Area}`);
  }
  getPerimeter(){
     let Perimeter = 2 * (this.width + this.height);
     console.log(`Perimeter: ${Perimeter}`);
  }
}

let rec1 = new Rectangle(20, 10);
rec1.getArea();
rec1.getPerimeter();

//Area: 200
//Perimeter: 60