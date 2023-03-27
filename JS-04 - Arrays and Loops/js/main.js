console.log("-----PERSONAS EN LA FILA-----");
let names=["Sofia", "David", "Juan"]; //fila original
names[3]="Sara";
names[4]="Agustín";  // se añaden 2 personas nuevas
names.shift(); // Atienden a la persona al frente de la linea
names.splice(2, 0, 'Renata'); //Renata toma el lugar después de David
names.push("Elena"); //Llega otra persona

let personas=0;
for (personas=0; personas<names.length; personas++){
    console.log(names[personas]);
}

console.log("-----PATERN EJ.2-----");
