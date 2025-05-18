//Leer una serie de números enteros cuyo último valorsea un numeronegativo y no debe ser procesado,indicar cuántos de estos números son pares.
function contarPares() {
    let contadorPares = 0;
    let numero;

    do {
        numero = parseInt(prompt("Ingrese un número entero (número negativo para terminar):"));

        if (numero >= 0 && numero % 2 === 0) {
            contadorPares++;
        }
    } while (numero >= 0);

    return contadorPares;
}