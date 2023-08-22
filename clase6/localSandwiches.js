const prompt = require('prompt-sync')();

tipo = prompt("Seleccione el tipo de sandwich que desea 'pollo', 'carne', 'veggie': " )
pan = prompt("Seleccione el tipo de pan para su sandwich 'blanco', 'negro', 's/gluten': ")
adicionales = prompt("Ingrese un true en el adicional que desee se parado por comas (queso, tomate, lechuga, cebolla, mayonesa, mostaza): ").split(",")
for (const x in adicionales) {
    let aux = adicionales[x]==="true"
    adicionales[x] = aux 
}
function totalAPagar(tipoIn,panIn,adicionalesIn){
    let total = 0;
    if(tipoIn == "pollo"){
        total += 150
    }else if(tipoIn == "carne"){
        total += 200
    }else if(tipoIn == "veggie"){
        total += 100
    }
    if(panIn == "blanco"){
        total += 50
    }else if(panIn == "negro"){
        total += 60
    }else if(panIn == "s/gluten"){
        total += 70
    }
    for(let add in adicionalesIn){
        switch(add){
            case 0:
                console.log(aqui);
                if(adicionalesIn[add]==true){
                    total += 20
                }
                break;
            case 1:
                if(adicionalesIn[add]==true){
                total += 15}
                break;
            case 2:
                if(adicionalesIn[add]==true){
                total += 10}
                break;
            case 3:
                if(adicionalesIn[add]==true){
                total += 15}
                break;
            case 4:
                if(adicionalesIn[add]==true){
                total += 5}
                break;
            case 5:
                if(adicionalesIn[add]==true){
                total += 5}
                break;
        }
    }
    return(total)
}

console.log(totalAPagar(tipo,pan,adicionales));