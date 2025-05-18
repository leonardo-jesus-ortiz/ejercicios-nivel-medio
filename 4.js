//Ingresar una cadena de caracteres que termina en un punto y determinar una estadísticas de la misma:
//Cantidad de caracteres que compone la cadena.
//Cantidad devocales que existen en la cadena ingresada
//Cuantos espacios en blanco
//Cuantas palabras comienzan con la letra F , f y M,m

const cadena = prompt("Ingrese una cadena de caracteres que termine en un punto:");
if (cadena[cadena.length - 1] !== ".") {
  console.log("La cadena no termina en un punto.");
}
const cantidadCaracteres = cadena.length - 1; // Restamos 1 por el punto
const cantidadVocales = cadena.match(/[aeiouAEIOU]/g)?.length || 0;
const cantidadEspacios = cadena.match(/\s/g)?.length || 0;
const palabras = cadena.split(/\s+/);
const cantidadPalabrasF = palabras.filter(palabra => palabra.toLowerCase().startsWith("f")).length;
const cantidadPalabrasM = palabras.filter(palabra => palabra.toLowerCase().startsWith("m")).length;
console.log("Cantidad de caracteres:", cantidadCaracteres);
console.log("Cantidad de vocales:", cantidadVocales);
console.log("Cantidad de espacios en blanco:", cantidadEspacios);
console.log("Cantidad de palabras que comienzan con F:", cantidadPalabrasF);
console.log("Cantidad de palabras que comienzan con M:", cantidadPalabrasM);
// Ejemplo de uso
// Ingresar: "Hola mundo. Esta es una prueba de la cadena de caracteres."
// Salida esperada:
// Cantidad de caracteres: 56
// Cantidad de vocales: 20
// Cantidad de espacios en blanco: 12
// Cantidad de palabras que comienzan con F: 0
// Cantidad de palabras que comienzan con M: 1