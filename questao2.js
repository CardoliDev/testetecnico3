
function pertenceFibonacci(numero) {

    let a = 0, b = 1, proximo;


    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }


    while (b < numero) {
        proximo = a + b;
        a = b;
        b = proximo;
    }


    if (b === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}


const numero = 21;
console.log(pertenceFibonacci(numero));

