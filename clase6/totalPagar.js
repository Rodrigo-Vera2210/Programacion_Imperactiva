const prompt = require('prompt-sync')();

const vehiculo = prompt("Ingrese el tipo de vehiculo que tiene: ")
const litros = parseInt(prompt("Ingrese los litros consumidos: "))

function totalAPagar(vehiculoA, litrosConsumidos){
    if(vehiculoA == "coche"){
        total = litrosConsumidos * 86
    }else if(vehiculoA == "moto"){
        total = litrosConsumidos * 70
    }else if(vehiculoA == "autobus"){
        total = litrosConsumidos * 55
    }
    if(litrosConsumidos > 0 && litrosConsumidos < 25){
        total += 50
    }else if(litrosConsumidos >= 25){
        total += 25
    }else if(litrosConsumidos < 0){
        console.log("Error, ingrese un valor valido");
    }
    return total
}

console.log(`Su total a pagar es ${totalAPagar(vehiculo, litros)}`)