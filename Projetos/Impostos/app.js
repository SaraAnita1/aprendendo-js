//perguntar entradas, saidas e Impostos

const inCome = prompt("Qual é o valor da entrada?");

const out = prompt("Qual é o valor da Saida?");

const taxPorcent = prompt("Qual a porcentagem dos Impostos");

//calcular renda Bruta

const grossProfit = inCome - out;

//obtendo o valor dos impostos

const tax = grossProfit * taxPorcent /100;

//renda liquida 

const netIncome = grossProfit - tax; 

document.write("Sua renda liquida é de $" + netIncome)

