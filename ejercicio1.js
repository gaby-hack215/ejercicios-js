console.log("EJERCICIO 1: NÚMEROS PRIMOS \n \n")
const arreglo1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 
    17, 29, 19, 88, 456, 13, 23, 24, ];
let N_primos = [];

console.log("Dado la siguiente lista de números: \n" + arreglo1 +
 "\n \n ¿Qué números son primos?");

arreglo1.forEach(function(N, p, array){
    let primo = true;
    for (let i=2; i<N; i++){
        if ((N % i) == 0){
            primo = false;
        }
    }
    if (primo == true){
        N_primos.push(N)
    }
})
console.log("Resultado: " + N_primos);