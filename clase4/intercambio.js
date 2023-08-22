cajonPantalones = ['remera1','remera2','remera3']
cajonRemeras = ['Pantalon1','Pantalon2','Pantalon3']

console.log(`En tu cajon de Remeras hay ${cajonRemeras}`);
console.log(`En tu cajon de Pantalones hay ${cajonPantalones}`);

let temp = cajonRemeras
cajonRemeras = cajonPantalones
cajonPantalones = temp


console.log(`En tu cajon de Remeras hay ${cajonRemeras}`);
console.log(`En tu cajon de Pantalones hay ${cajonPantalones}`);
