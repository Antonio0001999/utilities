const analizador = require("./analizador")

// Ejemplo de Objeto
let json = JSON.stringify({
    cadena: "cadena",
    numero: 2,
    boolean: true,
    funcion: "function() { console.log('Funcion') }",
    anonima: "() => { console.log('Anonima') }",
    objeto: { funcion: "() => { console.log('Funcion en objeto') }" },
    array: ["array", 4, "() => { console.log('Funcion en array') }", {} ]
})

let interpretado = analizador(JSON.parse(json))

console.log({interpretado})

let obj = eval(`(${interpretado})`)

console.log({
    cadena: obj.cadena,
    numero: obj.numero,
    funcion: obj.funcion,
    anonima: obj.anonima,
    objeto: obj.objeto,
    array: obj.array,
    objetoEnArray: obj.array[3]
})

obj.funcion()
obj.anonima()
obj.array[2]()