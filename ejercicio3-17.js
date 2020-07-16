let montoRecibido = +prompt(`Ingrese el monto que recibió en diciembre`);

if (montoRecibido < 10000) {
  console.log(`Puede comprar el paquete D que contiene:
    un par de zapatos, dos camisas y dos pantalones`);
} else if (montoRecibido >= 10000 && montoRecibido < 20000) {
  console.log(`Puede comprar el paquete C que contiene:
    dos pares de zapatos, tres camisas y tres pantalones.`);
} else if (montoRecibido >= 20000 && montoRecibido < 50000) {
  console.log(`Puede comprar el paquete B que contiene:
    una grabadora, tres pares de zapatos, cinco camisas y cinco pantalones.`);
} else if (montoRecibido >= 50000){
    console.log(`Puede comprar el paquete A que contiene:
    una televisión, un modular, tres pares de zapatos, cinco camisas y cinco pantalones.`);
}
