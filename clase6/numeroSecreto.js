const prompt = require('prompt-sync')();

numero = parseInt(prompt("Ingrese un numero del 1 al 10: "))
numeroSecreto = Math.round(Math.random()*10);

const acierto = (numeroIn,numeroSecretoIn) => numeroIn == numeroSecretoIn ? "Acertaste" : `Te equivocastes, ingresaste ${numeroIn}, pero era ${numeroSecretoIn}` 

console.log(acierto(numero,numeroSecreto));