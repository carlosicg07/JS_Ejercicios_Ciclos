let names=["Sofia", "David", "Juan"]; //fila original
names[3]="Sara";
names[4]="Agustín";  // se añaden 2 personas nuevas
console.log(names.shift()); // la personma que sigue fue llamada

let personas=0;
console.log("Lista de personas en la fila:");
for (personas=0; personas<names.length; personas++){
    console.log(names[personas]);
}