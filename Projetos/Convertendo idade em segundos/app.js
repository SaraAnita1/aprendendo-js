//O prompt faz o balão aparecer

const age = prompt("Qual é a sua Idade?");

//Converter a idade em segundos

const ageInSeconds = age*365*24*60*60

// como mostrar no console o Resultado

console.log(ageInSeconds);

//-> Mostrar o resultado da sua Pagina web por meio do document.write()

document.write(`Em seus ${age} anos de Idade, se passaram ${ageInSeconds} segundos`)