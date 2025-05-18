//Ingresar dos cadenas y mostrar primero la cadena mayor y luego la cadena menor.
const cadena1 = prompt("Ingrese la primera cadena:");
const cadena2 = prompt("Ingrese la segunda cadena:");
if (cadena1.length > cadena2.length) {
  console.log("Cadena mayor:", cadena1);
  console.log("Cadena menor:", cadena2);
} else if (cadena1.length < cadena2.length) {
  console.log("Cadena mayor:", cadena2);
  console.log("Cadena menor:", cadena1);
}