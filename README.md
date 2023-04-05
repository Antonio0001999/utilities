# Auxiliari-Situalis

 Conjunto de diferentes clases y métodos de uso ocasional en situaciones concretas.

## Analizador
 Este método parecido al método [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) permite introducir un objeto en formato JSON a un objeto de JavaScript, incluyéndose una condición para la interpretación de funciones.
 Este método produce una estructura no reversible, por lo que convertirlo directamente a JSON eliminaría las funciones.

## Anotación Orientada a Columnas (AOC)
 La clase AOC permite la interpretación de ficheros que contengan cadenas en una distribución organizada en columnas, separando las columnas a través de punto y coma (;) y las filas a través de la combinación de punto y coma y el caracter "x" (;x).
 Cada fila añadida generará un objeto que contendrá tantos atributos como columnas se hayan especificado en la primera fila.
 La clase AOC incluye un método para convertir objetos de JavaScript a este formato de filas y columnas.

## Callback a Promesa
 Una función que encapsula los métodos de la librería nativa de node `http` para devolver el resultado en forma de promesa.

## Creación de Elementos
 La función `crea()` encapsula métodos de manipulación del DOM de forma que resulte más sencillo crear referencias a elementos en código sin necesidad de utilizar librerías más pesadas como JQuery.

## Cuentagotas
 La función `verDatos()` permite obtener información del color y las coordenadas en las que se ha realizado un evento de pulsación (Click) sobre un elemento imagen de HTML. Otras funciones útiles incluidas en **Cuentagotas.js** son `verCoordenadas()` y `verPosicion()` para obtener datos relativos a la ubicación del elemento en la ventana.

## Status Codes
 Un Objeto Literal documentado con una estructura organizada para todos los códigos de respuesta HTTP.

## Transponedor de Tablas
 Una función para cambiar las posiciones de filas y columnas en una tabla de HTML. No abarca casos en los que se unen celdas a través de `rowspan` o `colspan`.

## Traza
 Un método simple para el trazado de datos durante la depuración. Destaca el dato introducido entre dos filas en la consola y añade una marca de tiempo de cuándo se produjo el LOG.
