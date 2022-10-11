 //Objetos enumerables o enums
 enum Roles{
    User= "USER",
    Admin= "ADMIN",
    SuperAdmin= "SUPER_ADMIN"
 };
 enum Rolesr{
    User,
    Admin,
    SuperAdmin
 };
// se les asigna un indice como en un array, el primero es el 0, luego 1, ... cuando no se le pone un valor.
 console.log(Roles.SuperAdmin);

//Objects
 const roles= {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
 };

 console.log(roles.Admin)


// Tipe assetion

let channel: any= "fran";

let channelStr= <string>channel;
let channelStr1= channel as string;
let chanel12= channel as number;
console.log(chanel12)

const myCanvas= document.getElementById("main") as HTMLCanvasElement;
const myCanvass= <HTMLCanvasElement>document.getElementById("main");

