const AOC = require("./AOC")

// Esta información debería proceder de un fichero.
const plantillaAOC = `atributo1;atributo2;atributo3;x
Obj1 Atr1;Obj1 Atr2;Obj1 Atr3;x
Obj2 Atr1;Obj2 Atr2;Obj2 Atr3;x
Obj3 Atr1;Obj3 Atr2;Obj3 Atr3;x`;

let objetos = AOC.interpretar(plantillaAOC)

console.log({
    ejemplo1: objetos[0].atributo1,
    ejemplo2: objetos[1].atributo2,
    ejemplo3: objetos[2].atributo3
})

// Ejemplos de valores interpretados.
const interpretables = `cadena;numero;booleano;nulo;indefinido;array;objeto;fecha;funcion;x
Hola Mundo;1;true;null;undefined;[1, 2, 3];({ clave: "Valor" });new Date();() => {};x`;

let ejemplo = AOC.interpretar(interpretables)[0]

console.log({
    cadena: ejemplo.cadena,
    numero: ejemplo.numero,
    booleano: ejemplo.booleano,
    nulo: ejemplo.nulo,
    indefinido: ejemplo.indefinido,
    array: ejemplo.array,
    objeto: ejemplo.objeto,
    fecha: ejemplo.fecha,
    funcion: ejemplo.funcion
})

console.log(AOC.convertir(ejemplo))