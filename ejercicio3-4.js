let horasParqueo = +prompt(`Ingrese las horas de uso de estacionamiento`);
let total = 0;

if (horasParqueo <= 2){
    total = horasParqueo*5;
}else if ((horasParqueo >2) && (horasParqueo <=5)){
    total = 10 + (horasParqueo-2)*4;
}else if ((horasParqueo >5) && (horasParqueo <=10)){
    total = 10 + 12 + (horasParqueo-5)*3 ;
}else if (horasParqueo > 10){
    total = horasParqueo*2 ;
}

console.log(`El total a pagar es $${total}`);