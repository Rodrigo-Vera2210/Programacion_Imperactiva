const prompt = require('prompt-sync')();

console.log("----------------- Estacion de gasolina ----------------");

dni = prompt("Ingrese el DNI: ")
tipoGasolina = {
    "extra": 2.50,
    "super": 4.50,
    "diesel": 1.15
}
tipo = prompt("Que tipo de gasonila desea 'extra', 'super', 'diesel'?: ")
valor = parseFloat(prompt("Cuanto desea recargar? "))
let cantidad
for(let x in tipoGasolina){
    if(tipo == x){
        cantidad = valor / tipoGasolina[x]
    }
}

console.log(`Se llenaron ${cantidad} galones`);
