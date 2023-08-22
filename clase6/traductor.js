const prompt = require('prompt-sync')();

stringUno = prompt("Ingrese una palabra a traducir (casa, perro, arbol, pelota, genio): ")

function traductor(palabra) {
    switch (palabra) {
        case "casa":
            return "home"
        case "perro":
            return "dog"
        case "arbol":
            return "tree"
        case "pelota":
            return "ball"
        case "genio":
            return "genius"    
        default:
            return "Ingrese una palabra valida";
    }
}

console.log(traductor(stringUno));