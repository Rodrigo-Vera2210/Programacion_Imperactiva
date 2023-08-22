const prompt = require('prompt-sync')();

edad =  parseInt(prompt("Ingrese su edad: "))

if (edad < 0) {
    console.log("Error, edad invalida. Por favor ingrese un número válido");
} else if(edad == 21){
    console.log("Bienvenido, Felicidades por su mayoría de edad!");
} else if(edad % 2 == 1){
    console.log("Bienvenido, ¿Sabías que tu edad es impar?");
}