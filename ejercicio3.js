console.log("EJERCICIO 3: SERIE DE FIBONACCI \n \n")
let n=50; a=0; b=1;
let serie = [b];
for (i=2; i<=n; i++){
    c = a+b;
    serie.push(c)
    a = b; b = c;
}
console.log("Primeros 50 números: \n",serie)