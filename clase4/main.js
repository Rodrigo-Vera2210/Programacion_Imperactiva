const prompt = require('prompt-sync')();

const temperatura = parseFloat(prompt('Ingrese la temperatura actual: '))
const estaLloviendo = (prompt('Esta lloviendo (true/false): ') === "true")
const numeroPiso = parseInt(prompt('Ingrese el piso en el que vive (0 si vive en una casa): '))
const hora = parseInt(prompt('Ingrese la hora actual sin minutos: '))
const horaApertura = parseInt(prompt('Ingrese la hora a la que abre la fiambrería sin minutos: '))
const horaCierre = parseInt(prompt('Ingrese la hora a la que cierra la fiambrería sin minutos: '))

const cantidad =  parseInt(prompt('Ingrese la cantidad de queso: '))
let deuda =  parseFloat(prompt('Cual es la deuda actual que mantiene?: '))

function irFiambreria(){
    if (temperatura <= 20.00) {
        console.log("Lleva abrigo");
    } else {
        console.log("No lleves abrigo");
    }

    if (estaLloviendo == true) {
        console.log("Lleva paragua");
    } else {
        console.log("No lleves paragua");
    }

    if(numeroPiso != 0){
        console.log(`Debes cojer el ascensor al piso ${numeroPiso}`);
    }else{
        console.log("Vive en una residencia");
    }

    if (hora <= horaCierre && hora >= horaApertura) {
        console.log("La fiambrería esta abrierta");
    } else {
        console.log("La fiambrería esta cerrada");
    }

    console.log(`Llevo ${cantidad} de queso`);

    if (deuda > 0) {
        console.log(`Pagale a Monica ${deuda}`);
    }
}

irFiambreria()