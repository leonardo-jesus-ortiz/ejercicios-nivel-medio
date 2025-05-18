//Escribir un programa que lea varias cadenas de caracteres y visualice todas las palabras que contengan al menos tres vocales distintas.
const cadenas = [];
let cadena;
do {
  cadena = prompt("Ingrese una cadena (o 'salir' para terminar):");
  if (cadena !== "salir") {
    cadenas.push(cadena);
  }
}while (cadena !== "salir");
const palabrasConTresVocales = [];
for (const cadena of cadenas) {
  const palabras = cadena.split(" ");
  for (const palabra of palabras) {
    const vocales = new Set();
    for (const letra of palabra) {
      if ("aeiouAEIOU".includes(letra)) {
        vocales.add(letra.toLowerCase());
      }
    }
    if (vocales.size >= 3) {
      palabrasConTresVocales.push(palabra);
    }
  }
}
console.log("Palabras con al menos tres vocales distintas:", palabrasConTresVocales);
