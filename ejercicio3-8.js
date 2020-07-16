let antiguedad = +prompt(`Ingrese los años de antiguedad`);
let sueldo = +prompt(`Ingrese el monto de sueldo mensual`);
let bonoAntiguedad = 0;
let bonoSueldo = 0;

if (antiguedad >= 2 && antiguedad < 5) {
  bonoAntiguedad = sueldo * 0.2;
} else if (antiguedad > 5) {
  bonoAntiguedad = sueldo * 0.3;
}

if (sueldo <= 1000) {
  bonoSueldo = sueldo * 0.25;
} else if (sueldo > 1000 && sueldo <= 3500) {
  bonoSueldo = sueldo * 0.15;
} else if (sueldo > 3500) {
  bonoSueldo = sueldo * 0.1;
}

if (bonoAntiguedad > bonoSueldo){
    console.log(`El bono asignado asciende a $${bonoAntiguedad}`);
}else{
    console.log(`El bono asignado asciende a $${bonoSueldo}`);
}

