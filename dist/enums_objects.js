"use strict";
//Objetos enumerables o enums
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
    Roles["SuperAdmin"] = "SUPER_ADMIN";
})(Roles || (Roles = {}));
;
var Rolesr;
(function (Rolesr) {
    Rolesr[Rolesr["User"] = 0] = "User";
    Rolesr[Rolesr["Admin"] = 1] = "Admin";
    Rolesr[Rolesr["SuperAdmin"] = 2] = "SuperAdmin";
})(Rolesr || (Rolesr = {}));
;
// se les asigna un indice como en un array, el primero es el 0, luego 1, ... cuando no se le pone un valor.
console.log(Roles.SuperAdmin);
//Objects
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.Admin);
// Tipe assetion
let channel = "fran";
let channelStr = channel;
let channelStr1 = channel;
let chanel12 = channel;
console.log(chanel12);
const myCanvas = document.getElementById("main");
const myCanvass = document.getElementById("main");
