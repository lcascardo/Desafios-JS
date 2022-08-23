// DECLARO VARIABLES
let producto = 0;
let carrito = 0;

// FUNCIONES:
// FUNCION PARA SELECCIONAR PRODUCTOS
function seleccionar() {
    producto = parseInt(prompt("Ingrese un numero dependiendo del producto a seleccionar:\n 1-Procesador Intel $5.000\n 2-Procesador AMD $3.500\n 3-Placa de video Nvidia $40.000\n 4-Placa de video AMD $30.000\n 5-Gabinete $10.000\n INGRESAR NUMERO 0 PARA TERMINAR DE SELECCIONAR"));
    return producto;
};
// FUNCION PARA SUMAR PRODUCTOS
function sumar() {
    switch (producto) {
        case 1:
            carrito += 5000;
            break;
        case 2:
            carrito += 3500;
            break;
        case 3:
            carrito += 40000;
            break;
        case 4:
            carrito += 30000;
            break;
        case 5:
            carrito += 10000;
            break;
        default:
            alert("Producto inexistente, vuelva a ingresar un producto");
            break;
    }
    return carrito;
}
// FUNCION PARA REALIZAR DESCUENTO DE 20% SI LA COMPRA ES MAYOR O IGUAL A $50.000
function descuento20() {
    if (carrito >= 50000) {
        carrito = carrito - (carrito * 0.2);
        return carrito;
    }
};

// PROCESO
seleccionar();
while (producto != 0) {
    sumar();
    seleccionar();
}
descuento20();
alert("El costo total a pagar es de: " + "$" + carrito);

