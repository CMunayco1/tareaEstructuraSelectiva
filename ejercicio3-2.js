let horasTrabajadas = 0;
let pagoHora = 0;
let horasExtra = 0;
let totalSueldo = 0;

horasTrabajadas = +prompt(`Ingrese las horas trabajadas:`);
pagoHora = +prompt(`Ingrese el pago por hora: `);

if (horasTrabajadas > 40){
    horasExtra = horasTrabajadas - 40;
    totalSueldo = pagoHora*(40 + 2*horasExtra);
    
}else{
    totalSueldo = horasTrabajadas*pagoHora;
}

console.log(`El empleado trabajó ${horasTrabajadas} horas en total esta semana`);
console.log(`El empleado trabajó ${horasExtra} horas extra esta semana`);
console.log(`El sueldo total de la semana es ${totalSueldo}`);

