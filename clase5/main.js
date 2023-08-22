const prompt = require('prompt-sync')();

function inToCm(numberIn) {
    return numberCm = numberIn * 2.54
}

function url(params) {
    return `www.${params}.com` 
}

function admiration(frase) {
    return `${frase}!`
}

function edadDog(edad) {
    return edad * 7
}

function valorHora(sueldo) {
    return sueldo / 40
}

function calculadorIMC(altura,peso) {
    return peso / (altura**2)
}

console.log(inToCm(5));
console.log(url("pepito"));
console.log(admiration("Hola"));
console.log(edadDog(4));
console.log(valorHora(500));
console.log(calculadorIMC(1.73,70));

const inToCm2 = (numberIn) => numberCm = numberIn * 2.54
const url2 = (params) => `www.${params}.com` 
const admiration2 = (frase) => `${frase}!`
const edadDog2 = (edad) => edad * 7
const valorHora2 = (sueldo) => sueldo / 40
const calculadorIMC2 = (altura,peso) => peso / (altura**2)

console.log(inToCm2(5));
console.log(url2("pepito"));
console.log(admiration2("Hola"));
console.log(edadDog2(4));
console.log(valorHora2(500));
console.log(calculadorIMC2(1.73,70));

const upperCase = (frase) => frase.toUpperCase()
const type = (param) => typeof(param)
const circuferencia = (radio) => 2 * Math.PI * radio

console.log(upperCase("hola amigos"));
console.log(type(5));
console.log(type(true));
console.log(circuferencia(5));