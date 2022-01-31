const arreglo2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];
  
console.log("EJERCICIO 2: FIESTA DE RAMIRO \n \n")
let p_aceptadas = [];

console.log("¿Qué personas pueden entrar a la fiesta, por ser mayor de edad'")
arreglo2.forEach(function(Persona, array) {
    if (Persona.esFamiliar && (Persona.edad >= 18)){
        p_aceptadas.push(Persona.nombre);
    }
})
console.log(p_aceptadas)