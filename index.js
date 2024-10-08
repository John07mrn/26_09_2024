console.log("Hello world!");

// variabila declarata si apoi atribuita valoare
let userName;
userName = "Monica";
console.log(userName);
userName = "_monica_";
console.log(userName);

// variabila declarata si initiata cu o valoare intr-o linie
let email = "user@test.com";
console.log(email);

// constanta declarata cu valoare
const pi = 3.14;
// pi = 3.12; - interzisa re-atribuirea de valori unei constante
console.log(pi);


// Operatii aritmetice
// suma
const sumResult = 12 + 32;
console.log("sumResult: ", sumResult);

// scadere
const differenceResult = 33 - 71;
console.log("diferenta: ", differenceResult);

// inmultire
const a = 13;
const b = 44;
const multiplyResult = a * b;
console.log(`rezultat inmultire dintre ${a} si ${b} este ${multiplyResult} `);

// impartire
const divisionResult = 12 / 4;
console.log("division result: ", divisionResult);

// rest impartire (modulo)
const rest = 12 % 5;
console.log("rest impartire: ", rest);


// Tipuri de date
// Number
let myNumber = 123;
myNumber = myNumber + 1;
console.log("number: ", myNumber);
console.log("Max safe integer is: ", Number.MAX_SAFE_INTEGER);
console.log("Max number: ", Number.MAX_VALUE);

// BigInt
let bigNumber = 1848554883253859796n;
console.log("big number: ", bigNumber);

// String
let password = "secret";
console.log("password: ", password);

// accesarea unui caracter dintr-un string
let secondLetterOfPassword = password[1];
console.log("a doua litera: ", secondLetterOfPassword);

// concatenare stringuri:
let firstName = "Ion";
let lastName = "Craiu";

let fullName = firstName + " " + lastName;
console.log("full name: ", fullName);

// lungimea stringului
let myString = "hello people";
let myStringLenght = myString.length;

console.log("myString: ", myString);
console.log("lenght: ", myStringLenght);

// metode string
let baseString = "Base";
let upper = baseString.toUpperCase();
let lower = baseString.toLowerCase();
console.log("base: ", baseString);
console.log("uppercase: ", upper);
console.log("lowercase: ", lower);

let substringOfBase = baseString.substring(0, 2);
console.log("substringOfBase: ", substringOfBase);
console.log("substringOfBase.charAt(0): ", substringOfBase.charAt(0));

// boolean
let isAuthenticated = true;
let isAuthorized = false;
console.log("isAuthenticated: ", isAuthenticated);
console.log("isAuthorized: ", isAuthorized);

// operatori de atribuire
let x = 12;  // declarare si atribuire valoare 12;
console.log("x: ", x);
x += 1;  // atribuire plus adunare
console.log("x: ", x);

x -= 2;  // atribuire cu scadere
console.log("x: ", x);

x *= 2;  // atribuire cu inmultire
console.log("x: ", x);

x /= 3;  // atribuire cu impartire
console.log("x: ", x);

// verificarea egalitatii
let nameA = "Ana";
let nameB = "Ana";
let nameC = "ana";
console.log("nameA === nameB: ", nameA === nameB);
console.log("nameA === nameC: ", nameA === nameC);

let numberA = 12;
let numberB = 12;
let numberC = 13;
console.log("numberA === numberB: ", numberA === numberB);
console.log("numberA === numberC: ", numberA === numberC);

// verificarea inegalitatii

console.log("nameA !== nameB: ", nameA !== nameB);
console.log("nameA !== nameC: ", nameA !== nameC);


console.log("numberA !== numberB: ", numberA !== numberB);
console.log("numberA !== numberC: ", numberA !== numberC);






