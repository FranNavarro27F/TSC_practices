// Basic types-
let myTypeString: string= "Hello word!!!";

let myTypeNumber: number= 27;

let myTypeBoolean: boolean= true;

let any: any= "esto es una string";
let any2: any= 1;
let any3: any= true;
let any4: any={ name:"francisco", lastName:"Navarro", age:27, elQueLeeEsto_seLaCome: true };
let any5: any=["una string", 2, true, [], {}];


// Array-
let arrNumber: number[]= [1,2,3];
let arrNumber2: Array<number>= [1,2,3];


let arrString: string[]= ["uno", "dos", "tres"];
let arrString2: Array<string>= ["uno","dos","tres"];


let arrAny: any[] =["holis", 27, true];


// Tuple-
let tuplePlaters: [string, number, boolean]= ["holis", 27, true];


// Tuple Array
let players: [number, string][];

players: [
    [1, "guiño"],
    [2, "holis"],
    [3, "Tu_vieja"]
]

// Inferencia de tipos en Ts-
let myVariable;
// como no le asigne un tipo, es de tipo  any

let myVariavle1: string;
// a esta si le asigne un tipo

let myVariable2= "Hola mundo!";
// aca no le asigne un tipo, pero el valor asignado es string, por lo tanto Ts "infiere" que el tipo es sting

let myVariable3= 3;
// en este caso tampoco le asigne un tipo pero si un valor de tipo number, Ts "infiere" que la variable es de tipo number
 


// composicion de tipos en Ts-

// uNions
// con los unions podemos declarar una variable que puede ser de 2 o mas tipos

let myVariable33: string | number | null ;

myVariable33= "string";
myVariable33= 27;
myVariable33= null;







