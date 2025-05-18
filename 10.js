//Un anagrama es una palabra o frase hecha al transponer las letras de otra palabra o frase; por ejemplo, "parliament" es un anagrama de "partial men," y "software" es un anagrama de "swearoft." Escriba un programa que determine si una cadena es un anagrama de otra cadena. El programa debería ignorar los espacios en blanco y la puntuación.
function sonAnagramas(cadena1, cadena2) {
    // Eliminar espacios y convertir a minúsculas
    cadena1 = cadena1.replace(/\s+/g, '').toLowerCase();
    cadena2 = cadena2.replace(/\s+/g, '').toLowerCase();
    
    // Ordenar las letras de ambas cadenas
    let ordenada1 = cadena1.split('').sort().join('');
    let ordenada2 = cadena2.split('').sort().join('');
    
    // Comparar las cadenas ordenadas
    return ordenada1 === ordenada2;
}