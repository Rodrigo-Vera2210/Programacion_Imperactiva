const prompt = require('prompt-sync')();

stringUno = prompt("Ingrese su valoracion de la pelicula (muy mala, mala, mediocre, buena, muy buena): ")

function valoracion(valor){
    switch (valor.toLowerCase()) {
        case "muy mala":
            return `Calificaste la pelicula como ${valor}. Lo lamentamos mucho`
        case "mala":
            return `Calificaste la pelicula como ${valor}. Lo lamentamos mucho`
        case "mediocre":
            return `Calificaste la pelicula como ${valor}. Lo lamentamos mucho`
        case "buena":
            return `Calificaste la pelicula como ${valor}. Nos alegramos mucho`
        case "muy buena":
            return `Calificaste la pelicula como ${valor}. Nos alegramos mucho`
    }
}

console.log(valoracion(stringUno));