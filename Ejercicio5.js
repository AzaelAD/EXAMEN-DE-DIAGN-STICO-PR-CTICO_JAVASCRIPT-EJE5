// 5. Suma de elementos de un arreglo
function sumarElementos(arreglo) {
    return arreglo.reduce((suma, numero) => suma + numero, 0);
}

const numerosParaSumar = [1, 4, 1, 10, 4];
console.log("Suma de elementos:", sumarElementos(numerosParaSumar));