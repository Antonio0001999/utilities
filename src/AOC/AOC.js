/**
 * Clase para trabajar con la Anotación Orientada a Columnas.
 */
class AOC {
    /**
     * Método para interpretar el formato compatible con AOC y convertirlo en un objeto de Javascript. Los datos introducidos en cada celda de las columnas serán interpretados por la expresión eval(), por lo que para interpretar objetos literales se requieren que estos estén rodeados por paréntesis.
     * @param {string} texto El texto en formato AOC con los atributos y valores especificados.
     * @returns Un array de objetos literales con los objetos correspondientes a la cadena interpretada.
     */
    static interpretar(texto) {
        let objeto = [];

        let lineas = texto.replaceAll("\r", "").replaceAll("\t", "").split(";x\n");
        if (lineas.length < 1) { throw new Error("No se puede interpretar una cadena vacía."); }

        let atributos = lineas[0].split(";");

        if (!lineas[1]) { return objeto; }

        for (let i = 1; i < lineas.length; i++) {
            const datos = lineas[i].split(";");
            let elemento = {};

            for (let i = 0; i < atributos.length; i++) {
                try { elemento[atributos[i]] = eval(datos[i]); }
                catch(ex) { elemento[atributos[i]] = datos[i]; }
            }

            objeto.push(elemento);
        }

        return objeto;
    }

    /**
     * Método para convertir un objeto literal en una cadena con formato AOC.
     * @param {object} objeto El objeto literal a convertir.
     * @returns Una cadena con el formato AOC.
     */
    static convertir(objeto) {
        let texto = "";
        if (objeto.length < 1) { throw new Error("No se puede convertir un objeto vacío."); }

        if (!objeto[0]) { objeto = [ objeto ] }
        let atributos = Object.keys(objeto[0]);

        for (let i = 0; i < objeto.length; i++) {
            if (JSON.stringify(atributos) != JSON.stringify(Object.keys(objeto[i]))) {
                throw new Error("No se pueden convertir objetos con diferentes atributos.");
            }
        }

        for (let i = 0; i < atributos.length; i++) {
            const atributo = atributos[i];
            if (i < atributos.length - 1) { texto += atributo + ";"; }
            if (i == atributos.length - 1) { texto += atributo + ";x\n"; }
        }

        for (let i = 0; i < objeto.length; i++) {
            const elemento = objeto[i];

            for (let i = 0; i < atributos.length; i++) {
                const atributo = atributos[i];
                if (i < atributos.length - 1) { texto += elemento[atributo] + ";"; }
                if (i == atributos.length - 1) { texto += elemento[atributo] + ";x\n"; }
            }
        }

        return texto;
    }
}

module.exports = AOC;