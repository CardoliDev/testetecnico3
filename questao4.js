
const faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};


function calcularPercentuais(faturamento) {

    const totalFaturamento = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);


    const percentuais = {};


    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2) + '%';
    }

    return {
        totalFaturamento,
        percentuais
    };
}


const resultado = calcularPercentuais(faturamentoMensal);

console.log("Faturamento Total: R$", resultado.totalFaturamento.toFixed(2));
console.log("Percentuais de Faturamento por Estado:");
for (const estado in resultado.percentuais) {
    console.log(`${estado}: ${resultado.percentuais[estado]}`);
}
