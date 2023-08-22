const prompt = require('prompt-sync')();
tipoDePan = {
    "enrollado": 0.20,
    "gusanito": 0.15,
    "de queso": 0.25,
    "rosca": 0.10
} 
tipo = prompt('Que tipo de pan desea? "enrollado", "gusanito", "de queso", "rosca": ')
cantidad = parseInt(prompt("Cuantos desea?: "))
let total
let vuelto
billete = parseFloat(prompt('Valor del billete con el que va a pagar: '))

for (const x in tipoDePan) {
    if(tipo == x){
        total = cantidad * tipoDePan[x]
    }
}
console.log(`El total de su compra es $ ${total}`);
if(billete >= total){
    console.log(`Su vuelto es $ ${billete - total}`);
}else{
    console.log("No le alcanza para esa cantidad");
}