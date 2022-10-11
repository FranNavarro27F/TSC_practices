"use strict";
// Basic types-
let myTypeString = "Hello word!!!";
let myTypeNumber = 27;
let myTypeBoolean = true;
let any = "esto es una string";
let any2 = 1;
let any3 = true;
let any4 = { name: "francisco", lastName: "Navarro", age: 27, elQueLeeEsto_seLaCome: true };
let any5 = ["una string", 2, true, [], {}];
// Array-
let arrNumber = [1, 2, 3];
let arrNumber2 = [1, 2, 3];
let arrString = ["uno", "dos", "tres"];
let arrString2 = ["uno", "dos", "tres"];
let arrAny = ["holis", 27, true];
// Tuple-
let tuplePlaters = ["holis", 27, true];
// Tuple Array
let players;
players: [
    [1, "guiño"],
    [2, "holis"],
    [3, "Tu_vieja"]
];
// Inferencia de tipos en Ts-
let myVariable;
// como no le asigne un tipo, es de tipo  any
let myVariavle1;
// a esta si le asigne un tipo
let myVariable2 = "Hola mundo!";
// aca no le asigne un tipo, pero el valor asignado es string, por lo tanto Ts "infiere" que el tipo es sting
let myVariable3 = 3;
// en este caso tampoco le asigne un tipo pero si un valor de tipo number, Ts "infiere" que la variable es de tipo number
// composicion de tipos en Ts-
// uNions
// con los unions podemos declarar una variable que puede ser de 2 o mas tipos
let myVariable33;
myVariable33 = "string";
myVariable33 = 27;
myVariable33 = null;
