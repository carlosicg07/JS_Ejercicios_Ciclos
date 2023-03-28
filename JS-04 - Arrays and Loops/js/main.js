console.log("-----------------------PERSONAS EN LA FILA-----------------------");
console.log("PARTE 1");
let names = ["Sofia", "David", "Juan"]; //fila original.
console.log(names);
names.shift(); // Atienden a Sofia (se va).
names.push("Sara");
names.push("Agustín");  // se añaden 2 personas nuevas.
console.log("PARTE 2");
console.log(names);
names.splice(1, 0, 'Renata'); //Renata toma el lugar después de David.
names.push("Elena"); //Llega Elena al final de la fila.
console.log("PARTE 3");
console.log(names);

console.log("-------PERSONAS EN LA FILA LISTA (EXTRA)-------");
let personas = 0;
for (personas = 0; personas < names.length; personas++) {
    console.log(names[personas]);
}


//--------------------------------------------------------------------
console.log("-----------------------EJ.2 PATERN-----------------------");

var x, y, sign

for (x = 0; x <= 5; x++) {
    for (y = 0; y < x; y++) {
        sign = sign + ("*");
    }
    console.log(sign);
    sign = '';
}

console.log("-------ENTERNDER FOR-------");
for(let i = 0 ; i<9 ; i++){
    console.log(i);
}


//--------------------------------------------------------------------
console.log("-----------------------EJ.3 LOOPS-----------------------");
console.log("-------PARTE 1-------");
let xValue = 10;
while (xValue > 0) {
    xValue-=(0.5);
    console.log(xValue);
}

console.log("-------PARTE 2-------");
let number = 1
while(number+2 < 100){
    number+=(2);
    console.log(number);
}

console.log("-------PARTE 3-------");
let n = 10
let z=0;
while(z<n){
    z++;
    console.log([z])
}

console.log("-------PARTE 4-------");
let N = 5
let X = 0
while(X<N){
     
    X++;
    console.log(X);
} 
console.log("suma = "+ X)

funtion sum(N,X){
    if (X<N){

    }
    return 

}