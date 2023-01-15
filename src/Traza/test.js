const traza = require("./traza")

const DATO1 = { a: 2207, b: null }
const DATO2 = true
const DATO3 = "Non vides me"

// Uso básico.
traza(DATO1)

// Uso alterando el caracter del separador.
traza({ DATO2 }, "-")

// Uso en entorno de producción (no mostrará nada en consola)
traza(DATO3, "#", 1)