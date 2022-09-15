/**
 * Recoge un objeto en formato JSON y devuelve una cadena con el objeto literal correspondiente.
 * @param json El texto en formato JSON que se va a analizar.
 * @return El objeto literal correspondiente.
 */
 const analizador = (json) => {
    let claves = Object.keys(json);
    let cadena = "{ ";
    claves.forEach(clave => {
        let valor = json[clave];
        if (valor == undefined || valor == null) { valor = "null"; }
        else if(typeof valor == "string") {
            if(valor.indexOf("=>") > -1 || valor.indexOf("function") > -1) { valor = valor; }
            else { valor = `"${valor}"`; }
        }
        else if(Array.isArray(valor)) {
            let cadena = "[ ";
            valor.forEach(elemento => {
                if(typeof elemento == 'object') { cadena += analizador(elemento) + ", "; }
                else if (typeof elemento == "string") {
                    if(elemento.indexOf("=>") > -1 || elemento.indexOf("function") > -1) { cadena += elemento + ", "; }
                    else { cadena += "\"" + elemento + "\", "; }
                }
                else { cadena += elemento + ", "; }
            });
            cadena += "]";
            valor = cadena.replace(/,([^,]*)$/, "" + '$1');
        }
        else if(typeof valor == 'object') { valor = analizador(valor); }
        cadena += `${clave}: ${valor}, `;
    })
    cadena += "}";
    return cadena.replace(/,([^,]*)$/, "" + '$1');
}

module.exports = analizador;