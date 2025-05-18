//Escribir un programa que lea una palabra de hasta 20 caracteres y la escriba como se ve en la figura: Entrada: HOLA Salida: H O L A L O A L O H
function escribirPalabra(palabra) {
    // Limitar la palabra a 20 caracteres
    palabra = palabra.substring(0, 20);
    
    // Convertir la palabra a un array de caracteres
    let caracteres = palabra.split('');
    
    // Crear una cadena para almacenar el resultado
    let resultado = '';
    
    // Escribir la palabra en el formato deseado
    for (let i = 0; i < caracteres.length; i++) {
        resultado += caracteres[i] + ' ';
    }
    
    // Añadir la parte invertida
    for (let i = caracteres.length - 1; i >= 0; i--) {
        resultado += caracteres[i] + ' ';
    }
    
    return resultado.trim();
}