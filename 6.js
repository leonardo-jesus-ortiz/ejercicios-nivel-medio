//Realizar un programa que compruebe si una palabra es palíndroma, es decir, si se lee igual de izquierda a derecha que de derecha a izquierda. Por ejemplo: RADAR, ANILINA....
function esPalindromo(palabra) {
    // Convertir la palabra a minúsculas y eliminar espacios
    palabra = palabra.toLowerCase().replace(/\s+/g, '');
    
    // Invertir la palabra
    let palabraInvertida = palabra.split('').reverse().join('');
    
    // Comparar la palabra original con la invertida
    return palabra === palabraInvertida;
}
