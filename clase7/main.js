const prompt = require('prompt-sync')();
console.log("---------- Los siguentes 10 numeros ------------");
const numero = parseInt(prompt("Ingrese un numero: "))

const siguentesDiez = (number) => {
    for (let index = 1; index <= 10; index++) {
        console.log(number++)};
    }

siguentesDiez(numero)


console.log("---------- numeros 5 al 20 de 3 en 3 ------------");

for (let index = 5; index <= 20; index = index + 3) {
    console.log(index);
}


console.log("---------- Sumatoria de los 100 primeros numeros ------------");

function sumatoria(){
    let aux = 0
    for (let index = 0; index <= 100; index++) {
        aux += index
    }
    return aux
}

console.log(sumatoria()); 

console.log("---------- Factorial ------------");

const numeroFact = parseInt(prompt("Ingrese un numero positivo: "))

function factorial(number) {
    let aux = 1
    for (let index = 1; index <= number; index++) {
        aux *= index
    }
    return aux
}

console.log(factorial(numeroFact));

console.log("---------- Fibonnaci ------------");

const numeroFibo = parseInt(prompt("Ingrese cuantos numero de la secuencia de Fibonacci: "))

function fibonacci(numero) {
    let a = 1
    let b = 0
    let c = 0
    for (let index = 0; index < numero; index++) {
        console.log(c);
        c = b + a
        b = a
        a = c
    }
}

fibonacci(numeroFibo)