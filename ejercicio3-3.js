let presupuesto = +prompt(`Ingrese su presupuesto`);

if (presupuesto <= 10){
    console.log(`Con este presupuesto puedes compar una tarjeta.`);
} else if ((presupuesto >= 11) && (presupuesto <= 100)){
    console.log(`Con este presupuesto puedes compar unos chocolates.`);
}else if ((presupuesto >= 101) && (presupuesto <= 250)){
    console.log(`Con este presupuesto puedes compar unas flores.`);
}else if (presupuesto > 250){
    console.log(`Con este presupuesto puedes compar un anillo.`);
}
