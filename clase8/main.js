const promt = require('prompt-sync')

peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

function upper(pel) {
    let newPeliculas = []    
    for (let index = 0; index < pel.length; index++) {
        newPeliculas[index] = pel[index].toUpperCase() 
    }
    return newPeliculas
}

console.log(peliculas);
let upperPeliculas = upper(peliculas)
console.log(upperPeliculas);

peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function union(peliculasIn,peliculasAnimadasIn) {
    for (let index = 0; index < peliculasAnimadasIn.length; index++) {
        peliculasIn.push(peliculasAnimadasIn[index]) 
    }
    return peliculasIn
}
let peliculas2 = union(upperPeliculas,upper(peliculasAnimadas))
console.log(peliculas2);
let peliculaEliminanda = peliculasAnimadas.pop()
let peliculas3 = union(upperPeliculas,upper(peliculasAnimadas))

console.log(peliculas3);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparar(array1, array2){
    let valoracion = []
    for (let index = 0; index < array1.length; index++) {
        if(array1[index] != array2[index]){
            valoracion.push(index + 1 )
        }
    }
    return valoracion
}

console.log(`Las peliculas ${comparar(asiaScores,euroScores)} tienen valoracion diferente`);