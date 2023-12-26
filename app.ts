let firstName: string = "Taner";
let lastName: string = "Dökmetaş";
let isLight: boolean = true;
let age: number = 22;
// console.log(firstName)
// console.log(lastName)
// console.log(isLight)
// console.log(age)

//Array

const firstNames: string[] = ["Tner", "Furkan", "Atilla"];
const firstNames1: Array<string> = ["Tner", "Furkan", "Atilla"];
const fruitsNums: (string | number)[] = [1, "banana", 2, "apple", 3, "orange"];
const fruitsNums1: Array<string | number> = [
  1,
  "banana",
  2,
  "apple",
  3,
  "orange",
];

//Tuple

let Id: number = 1;
let instructorName: string = "Taner";
let instructor: [number, string] = [1, "Can"];

let user: [number, string, boolean, number, string];
user = [1, "Taner", true, 22, "Admin"];

let employe: [number, string][];
employe = [
  [1, "Taner"],
  [2, "Furkan"],
  [3, "Haziran"],
];

// Object

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

let instructor2: Person;

instructor2 = {
  firstName: "Taner",
  lastName: "Dökmetaş",
  age: 22,
  jobTitle: "Software Developer",
};

//Enum

enum Media {
  Newspaper,
  Newsletter,
  Magazine,
  Book,
}
console.log(Media.Magazine); //2
console.log(Media[3]); //Book

enum PrintMedia {
  Newspaper = "NEWSPAPER",
  Newsletter = "NEWSLETTER",
  Magazine = "MAGAZİNE",
  Book = "BOOK",
}
console.log(PrintMedia.Newsletter); //NEWSLETTER
console.log(PrintMedia["Newspaper"]); //NEWSPAPER

//Union

let code: string | number = 22;

//Any

let someThing: any = "Taner";
someThing = 22;
someThing = false;
someThing = [];
someThing = {};

let arr: any[] = ["Taner", 22, true];

//Void

function sayHello(): void {
  console.log("Hello!");
}
//   Bu fonksiyon bir değer döndürmez, sadece "Hello!" mesajını konsola yazdırır. void dönüş türü, bu fonksiyonun dönüş değeri olmadığını açıkça belirtir.

//Never

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // ...
  }
}
// never, TypeScript'te bir veri türüdür ve bir fonksiyonun asla tamamlanmayacağını veya herhangi bir değer döndürmeyeceğini ifade eder.

//Type Assertion

let value: any = "Hello, TypeScript!";
let length1: number = (<string>value).length;

interface Employee {
  name: string;
  code: number;
}
let employee = <Employee>{}; //bunu yapmasaydık name atayamazdık
employee.name = "Taner";
console.log(employee);

//Function

function add(a: number, b: number) {
  return a + b;
}
let toplam = add(30, 20);
console.log(toplam);

function bastir(): void {
  console.log("Taner Dökmetaş");
}
bastir();

function carpim(a: number, b: number, c?: number) {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}
let degisken = carpim(5, 4);
console.log(degisken);

const carpim1 = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
};

function add1(a: string, b: string): string;
function add1(a: number, b: number): number;
function add1(a: any, b: any): any {
  return a + b;
}
let addValue = add1("taner", " dökmetaş");
console.log(addValue);

//Rest Parametres

function toplam1(...numbers: number[]) {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}
console.log(toplam1(20, 25));

//Classes

class Person1 {
  id: number;
  firstName: string;
  lastName: string;
  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${firstName} ${lastName}`;
  }
}
let personInfo = new Person1(58, "Taner", "Dökmetaş");
console.log(personInfo, personInfo.getFullName());

// Interface

function getFullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
}
let person = {
  firstName: "Taner",
  lastName: "Dökmetaş",
};
console.log(getFullName(person));

interface Person2 {
  firstName: string;
  lastName: string;
  middleName?: string;
}
function getFullName2(person: Person2) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}
let person2 = {
  firstName: "Akin",
  lastName: "Dökmetaş",
  middleName: "Gizem",
};
console.log(getFullName2(person2));

//Type Intersection (Kesişim)

interface Identity {
  name: string;
  id: number;
}
interface Contact {
  email: string;
  phone: number;
}
type Employeee = Identity & Contact;
let person4: Employeee = {
  name: "Taner",
  id: 58,
  email: "taner@gmail.com",
  phone: 12345678,
};
console.log(person4);

// Type Guard

type tip = string | number;
function add2(a: tip, b: tip) {
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}

//Generics

function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
let numbers = [2, 4, 21, 421, 312, 2, 5, 98];
let boolean = [true, false];
let names = ["Taner", "Furkan", "Gizem"];
console.log(getRandomElement(names));
console.log(getRandomElement(boolean));
console.log(getRandomElement(numbers));

// Generic Constraints

function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
let person3 = merge({ name: "Gizem" }, { age: 29 });
let person5 = merge({ name: "Gizem" }, 29); //Böyle hata almayız ama sadece Gizem ekrana yazılır hata mesajı için bunu yapmalıyız;

function merge1<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
//let person6 = merge1({ name: "Gizem" }, 29); Böylelikle hata alırız.

//Interfacelerde Generic Kullanımı

interface Months<U, V> {
  key: U;
  value: V;
}
let month: Months<number, string> = {
  key: 1,
  value: "January",
};

// ------------------------------------------------------------------------------------------------------------------------------------------
