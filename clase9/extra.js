let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]

function propiedadUnica(arrayIn, propiedad){
    nuevoArreglo = []
    for (const index in arrayIn) {
        for (const key in arrayIn[index]) {
            if(key == propiedad){
                nuevoArreglo[index] = {[key] : arrayIn[index][key]}
            }
        }
    }
    return nuevoArreglo
}

console.log( propiedadUnica(array,"nombre"));