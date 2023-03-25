// perguntar nome e sobrenome

const name = prompt("Qual o seu nome e o sobrenome?")

// pegar a primeira letra

const firstInitial = name.slice(0,1);

// pegar a posição da primeira letra do sobrenome

const lastNamePosition = name.indexOf(" ") + 1;

const lastName = name.slice(lastNamePosition, lastNamePosition + 1);

document.write(`Suas Iniciais são: ${firstInitial} ${lastName}`);

