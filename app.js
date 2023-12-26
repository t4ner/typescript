var firstName = "Taner";
var lastName = "Dökmetaş";
var isLight = true;
var age = 22;
// console.log(firstName)
// console.log(lastName)
// console.log(isLight)
// console.log(age)
//Array
var firstNames = ["Tner", "Furkan", "Atilla"];
var firstNames1 = ["Tner", "Furkan", "Atilla"];
var fruitsNums = [1, "banana", 2, "apple", 3, "orange"];
var fruitsNums1 = [
    1,
    "banana",
    2,
    "apple",
    3,
    "orange",
];
//Tuple
var Id = 1;
var instructorName = "Taner";
var instructor = [1, "Can"];
var user;
user = [1, "Taner", true, 22, "Admin"];
var employe;
employe = [
    [1, "Taner"],
    [2, "Furkan"],
    [3, "Haziran"],
];
var instructor2;
instructor2 = {
    firstName: "Taner",
    lastName: "Dökmetaş",
    age: 22,
    jobTitle: "Software Developer",
};
//Enum
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 0] = "Newspaper";
    Media[Media["Newsletter"] = 1] = "Newsletter";
    Media[Media["Magazine"] = 2] = "Magazine";
    Media[Media["Book"] = 3] = "Book";
})(Media || (Media = {}));
console.log(Media.Magazine); //2
console.log(Media[3]); //Book
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZ\u0130NE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Newsletter); //NEWSLETTER
console.log(PrintMedia["Newspaper"]); //NEWSPAPER
//Union
var code = 22;
//Any
var someThing = "Taner";
someThing = 22;
someThing = false;
someThing = [];
someThing = {};
var arr = ["Taner", 22, true];
//Void
function sayHello() {
    console.log("Hello!");
}
//   Bu fonksiyon bir değer döndürmez, sadece "Hello!" mesajını konsola yazdırır. void dönüş türü, bu fonksiyonun dönüş değeri olmadığını açıkça belirtir.
//Never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // ...
    }
}
// never, TypeScript'te bir veri türüdür ve bir fonksiyonun asla tamamlanmayacağını veya herhangi bir değer döndürmeyeceğini ifade eder.
//Type Assertion
var value = "Hello, TypeScript!";
var length1 = value.length;
var employee = {}; //bunu yapmasaydık name atayamazdık
employee.name = "Taner";
console.log(employee);
//Function
function add(a, b) {
    return a + b;
}
var toplam = add(30, 20);
console.log(toplam);
function bastir() {
    console.log("Taner Dökmetaş");
}
bastir();
function carpim(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
var degisken = carpim(5, 4);
console.log(degisken);
var carpim1 = function (a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
};
function add1(a, b) {
    return a + b;
}
var addValue = add1("taner", " dökmetaş");
console.log(addValue);
//Rest Parametres
function toplam1() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return (total += num); });
    return total;
}
console.log(toplam1(20, 25));
//Classes
var Person1 = /** @class */ (function () {
    function Person1(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.getFullName = function () {
        return "".concat(firstName, " ").concat(lastName);
    };
    return Person1;
}());
var personInfo = new Person1(58, "Taner", "Dökmetaş");
console.log(personInfo, personInfo.getFullName());
// Interface
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Taner",
    lastName: "Dökmetaş",
};
console.log(getFullName(person));
function getFullName2(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person2 = {
    firstName: "Akin",
    lastName: "Dökmetaş",
    middleName: "Gizem",
};
console.log(getFullName2(person2));
