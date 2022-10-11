1- codear TS

2- se transpila el codigo TS con la consola:* tsc index.ts * -> eso crea el codigo transpilado a Js.

3- ejecutar ese codigo Js con el comando * node index.js * -> eso ejecuta al fin nuestro archivo

o... podemos hacer estoq ue es todo eso anterior pero mas cortito:
 * tsc index.ts && node index.js *

 lo normal es transpilar el codigo TS A Js poniendo el resultado en otra carpeta. ¿como lo hago?
 * tsc --outDir dist index.ts && node dist/index.js*  -> el resultado es que se crea una carpeta y dentro de esta se va a estar el archivo .js que fue creado a partir de la transpilacion del codigo TS, luego se ejecuta mediante node este mismo archivo.js que esta dentro de la carpeta.

 otra opcion es usar un watcher que se quede viendo y transpilando nuestro codigo para no correr estos comandos manualmente:
  * tsc --outDir dist index.ts --watch * -> esto lo que hace es mirar los cambios de lo que vamos codeando y lo va transpilando al archivo .js de la carpeta 
  