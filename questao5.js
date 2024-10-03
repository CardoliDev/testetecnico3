function inverterString(str) {
    let strInvertida = '';


    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }

    return strInvertida;
}


const entrada = "Exemplo de string";


const resultado = inverterString(entrada);
console.log("String original: ", entrada);
console.log("String invertida: ", resultado);
