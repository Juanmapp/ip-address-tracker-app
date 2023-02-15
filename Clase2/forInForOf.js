let persona = {
    nombre:"Juan Manuel",
    apellido : "Licini",
    edad : 28,
    hijos: true    
}
//FOR IN
//Accediendo a las propiedades 

for ( let datos in persona) {
    console.log(datos)
}

//Acediendo a los datos de las propiedades

for ( let datos in persona) {
    console.log(persona[datos])
}

//FOR OF

let arrayDeSeries = ["Breaking bad", "The Office", "Flash"]

for (let serie of arrayDeSeries) {
    console.log(serie)
}