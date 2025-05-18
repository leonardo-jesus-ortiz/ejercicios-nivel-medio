//Ingresar una cadena de caracteres que termine en un punto e indicar la cantidad de caracteres que posee. Mostrando la misma en formato mayúscula a la salida del programa.
let cadena = prompt("Ingrese una cadena de caracteres que termine en un punto:");
while (cadena[cadena.length - 1] !== '.') {
    cadena = prompt("La cadena no termina en un punto. Ingrese nuevamente:");
}
let cantidadCaracteres = cadena.length;
let cadenaMayuscula = cadena.toUpperCase();
console.log("La cadena ingresada es: " + cadenaMayuscula);
console.log("La cantidad de caracteres es: " + cantidadCaracteres);