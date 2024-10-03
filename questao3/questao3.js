const fs = require('fs');
const path = require('path');


const jsonFilePath = path.join(__dirname, 'faturamentoMensal.json');


function calcularFaturamento(faturamentoMensal) {

    const faturamentosValidos = faturamentoMensal
        .filter(dia => dia.faturamento > 0)
        .map(dia => dia.faturamento);


    const menorFaturamento = Math.min(...faturamentosValidos);
    const maiorFaturamento = Math.max(...faturamentosValidos);


    const somaFaturamento = faturamentosValidos.reduce((acc, curr) => acc + curr, 0);
    const mediaFaturamento = somaFaturamento / faturamentosValidos.length;


    const diasAcimaDaMedia = faturamentosValidos.filter(fat => fat > mediaFaturamento).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}


fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao carregar o arquivo JSON:', err);
        return;
    }


    const faturamentoMensal = JSON.parse(data);


    const resultado = calcularFaturamento(faturamentoMensal);
    console.log("Menor faturamento: ", resultado.menorFaturamento);
    console.log("Maior faturamento: ", resultado.maiorFaturamento);
    console.log("Dias com faturamento acima da média: ", resultado.diasAcimaDaMedia);
});

