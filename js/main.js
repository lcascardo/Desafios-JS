// CLASE CONSTRUCTORA

class Producto {
    constructor(nombre, tipo, marca, precio) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.sumarIva = () => {
            return this.precio = this.precio * 1.21;
        }
    }
}

// INSTANCIAR OBJETOS

const producto1 = new Producto("Intel Core i9-7980XE", "Procesador", "Intel", 50000);
const producto2 = new Producto("Ryzen 3 1200", "Procesador", "AMD", 35000);
const producto3 = new Producto("MSI GeForce RTX 2070 SUPER", "Placa de Video", "MSI", 250000);
const producto4 = new Producto("Cooler Master MasterBox Q300L Rainbow", "Gabinete", "Cooler Master", 11000);

// RECORRER OBJETO CON FOR IN

for (const propiedades in producto1) {
    console.log(propiedades + ": " + producto1[propiedades])
}

// USAR METODO PERZONALIZADO

console.log(producto1.sumarIva());
/* El producto1 tiene un precio de $50000. Mas el iba tendria que dar $60500. */

// CREAR OBJETOS

function crearObjeto() {
    const producto = new Producto(prompt("Nombre"), prompt("Tipo"), prompt("Marca"), prompt("Precio"));
    return producto;
}

// INGRESAR OBJETOS EN UN ARRAY

const baseDeDatos = [];

function agregarBase() {
    baseDeDatos.push(crearObjeto());
    return baseDeDatos;
}

for (let index = 0; index < 3; index++) {
    agregarBase();
}

console.log(baseDeDatos);

// QUITAR ULTIMO OBJETO DEL ARRAY

let decision = prompt("Si desea eliminar el ultimo objeto ingresar si")
if(decision === "si") {
    baseDeDatos.pop();
}


// RECORRER ARRAY

for (const productos of baseDeDatos) {
    console.log(productos);
}
















