const prompt = require('prompt-sync')();

velocidad = parseInt(prompt("Ingrese la velocidad en km/h: "))
altura = parseInt(prompt("Ingrese la altura en m: "))

function abrirParacaidas(velocidadIn,alturaIn){
    if(velocidadIn < 1000 && (alturaIn >= 2000 && alturaIn < 3000)){
        return "Se abrio el paracaidas"
    }else{
        return "No se puede abrir el paracaidas"
    }
}

console.log(abrirParacaidas(velocidad,altura));