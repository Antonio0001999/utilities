/**
 * Método para destacar una traza de elementos en la consola, rodeados por dos líneas y con una marca de tiempo.
 * @param {string | object} log El elemento o conjunto de elementos que se quieran destacar.
 * @param {string} separador El caracter que se utilizará para generar las barras de separación.
 * @param {number} produccion El valor 1 si se trata del entorno de producción para que no haga nada, cualquier otro valor para realizar su función habitual.
 * @returns Un booleano, true si se ha realizado el LOG, false en caso contrario.
 */
const traza = (log, separador = "#", produccion = 0) => {
    if (produccion == 1) { return false; }
    let linea = "";
    for (let i = 0; i < 100; i++) { linea += separador; }

    console.log(linea);
    console.log(`LOG: ${new Date().toJSON()}`);
    console.log(log);
    console.log(linea);
    return true;
}

module.exports = traza