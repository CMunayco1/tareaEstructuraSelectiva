let antiguedad = +prompt(`Ingrese la antiguedad del empleado`);
let bono = 0;

switch (antiguedad) {
  case 0:
    bono = 0;
  case 1:
    bono = 100;
    break;
  case 3:
    bono = 300;
    break;
  case 4:
    bono = 400;
    break;
  case 5:
    bono = 500;
    break;
  default:
    break;
}
if (antiguedad > 5) {
  bono = 1000;
}

console.log(`El bono por antguedad es de $${bono}`);
