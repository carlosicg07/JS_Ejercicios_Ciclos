console.log("-----PERSONAS EN LA FILA-----");
console.log("PARTE 1");
let names=["Sofia", "David", "Juan"]; //fila original.
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

console.log("-----PERSONAS EN LA FILA LISTA (EXTRA)-----");
let personas=0;
for (personas=0; personas<names.length; personas++){
    console.log(names[personas]);
}

//--------------------------------------------------------------------

console.log("-----PATERN EJ.2-----");
var x, y, sign
for (x=1; x<=6; x++){
    for(y=1; y<x; y++){
        sign=sign+("*");
    }
    console.log(sign);
    sign='';
}

/*
//--------------------------------------------------------------------
console.log("-----LOOPS EJ.3-----");
let xv = 10;
while (xv < xValue.value){
    console.log()
}

*/