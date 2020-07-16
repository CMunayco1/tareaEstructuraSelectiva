let planA = 1250;
let planB = 950;
let plan = prompt(`Escoja el plan A de $1250 o plan B de $950 (Ingrese A o B)`);
let planSeleccionado = 0;
let bebeAlcohol = prompt(`¿Usted bebe alcohol (Ingrese Si o No)?`);
let usaLentes = prompt(`¿Usted usa lentes? (Ingrese Si o No)`);
let padeceEnfermedad = prompt(
  `¿Tiene alguna enfermedad como deficiencia cardiaca o diabetes? (Ingrese Si o No)`
);
let edad40 = prompt(`¿Es mayor de 40 años? (Ingrese Si o No)`);
let totalPagar = 0;

switch (plan) {
  case `A`:
  case `a`:
    plan = planA;
    planSeleccionado  = `Plan A`;
    break;
  case `B`:
  case `b`:
    plan = planB;
    planSeleccionado  = `Plan B`;
    break;
  default:
    console.log(`Elección incorrecta`);
}

switch (bebeAlcohol) {
  case `Si`:
    bebeAlcohol = plan * 0.1;
    break;
  case `No`:
    bebeAlcohol = 0;
    break;
  default:
    console.log(`Elección incorrecta`);
}

switch (usaLentes) {
  case `Si`:
    usaLentes = plan * 0.05;
    break;
  case `No`:
    usaLentes = 0;
    break;
  default:
    console.log(`Elección incorrecta`);
}

switch (padeceEnfermedad) {
  case `Si`:
    padeceEnfermedad = plan * 0.05;
    break;
  case `No`:
    padeceEnfermedad = 0;
    break;
  default:
    console.log(`Elección incorrecta`);
}

switch (edad40) {
  case `Si`:
    edad40 = plan * 0.2;
    break;
  case `No`:
    edad40 = plan*0.1;
    break;
  default:
    console.log(`Elección incorrecta`);
}

totalPagar = plan + bebeAlcohol + usaLentes + padeceEnfermedad + edad40;

console.log(`El total a pagar por el ${planSeleccionado} es $${totalPagar}`);
