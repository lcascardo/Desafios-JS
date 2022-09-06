/* Clase constructora de productos */
class Producto {
    constructor(id, nombre, categoria, marca, precio, img) {
        this.id = parseInt(id);
        this.nombre = nombre.toLowerCase();
        this.categoria = categoria.toLowerCase();
        this.marca = marca.toLowerCase();
        this.precio = parseFloat(precio);
        this.img = img;
    }
}
/* Instanciamos productos */
const producto1 = new Producto(1, "Procesador Intel Core i9 12900KF 5.2GHz Turbo Socket 1700", "Procesador", "Intel", 134850, "producto1.png");
const producto2 = new Producto(2, "Procesador Intel Core i7 12700K 5.0GHz Turbo Socket 1700", "Procesador", "Intel", 109500, "producto2.png");
const producto3 = new Producto(3, "Procesador AMD Ryzen 9 5950X 4.9GHz Turbo AM4", "Procesador", "AMD", 157750, "producto3.png");
const producto4 = new Producto(4, "Procesador AMD Ryzen 9 5900X 4.8GHz Turbo AM4", "Procesador", "AMD", 115250, "producto4.png");
const producto5 = new Producto(5, "Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X ROG STRIX GAMING White OC", "Placa de Video", "Asus", 391150, "producto5.png");
const producto6 = new Producto(6, "Placa de Video MSI GeForce RTX 3090 24GB GDDR6X GAMING X TRIO", "Placa de Video", "MSI", 359900, "producto6.png");
const producto7 = new Producto(7, "Mother Gigabyte Z590 Aorus Ultra Socket 1200 10th Gen", "Motherboard", "Gigabyte", 75850, "producto7.png");
const producto8 = new Producto(8, "Mother ASUS ROG STRIX Z590-I GAMING WIFI", "Motherboard", "Asus", 66070, "producto8.png");
const producto9 = new Producto(9, "Gabinete Cooler Master COSMOS C700M ARGB E-ATX", "Gabinete", "Cooler Master", 110590, "producto9.png");
const producto10 = new Producto(10, "Gabinete Thermaltake V200 Tempered Glass Ryzen Edition", "Gabinete", "Thermaltake", 8290, "producto10.png");









// ARRAYS

/* Productos */
const stockProductos = [];

cargarObjeto(stockProductos, producto2);
cargarObjeto(stockProductos, producto1);
cargarObjeto(stockProductos, producto3);
cargarObjeto(stockProductos, producto4);
cargarObjeto(stockProductos, producto5);
cargarObjeto(stockProductos, producto6);
cargarObjeto(stockProductos, producto7);
cargarObjeto(stockProductos, producto8);
cargarObjeto(stockProductos, producto9);
cargarObjeto(stockProductos, producto10);





/* Productos con IVA agregado */
const productosConIva = agregarIva(stockProductos);
// console.log(productosConIva);

/* Filtro por categoria */
/* Procesador */
const productosProcesadores = filtrarCategoria(stockProductos, "procesador");
/* Placa de Video */
const productosPlacas = filtrarCategoria(stockProductos, "placa de video");
/* Motherboard */
const productosMothers = filtrarCategoria(stockProductos, "motherboard");
/* Gabinete */
const productosGabinetes = filtrarCategoria(stockProductos, "gabinete");

let categoria = parseInt(prompt("Ingresar una categoria:\n1)procesador\n2)placa de video\n3)motherboard\n4)gabinete"));
 switch (categoria) {
     case 1:
         console.log(productosProcesadores);
         break;
     case 2:
         console.log(productosPlacas);
         break;
     case 3:
         console.log(productosMothers);
         break;
     case 4:
         console.log(productosGabinetes);
         break;
     default:
         console.log(productos);
 }

/* Filtro por marca */
/* Intel */
const productosIntel = filtrarMarca(stockProductos, "intel");
/* Amd */
const productosAmd = filtrarMarca(stockProductos, "amd");
/* Asus */
const productosAsus = filtrarMarca(stockProductos, "asus");
/* Gigabyte */
const productosGigabyte = filtrarMarca(stockProductos, "gigabyte");
/* Cooler Master */
const productosCoolerMaster = filtrarMarca(stockProductos, "cooler master");
/* Thermaltake */
const productosThermaltake = filtrarMarca(stockProductos, "thermaltake");

 let marca = parseInt(prompt("Ingresar una marca:\n1)Intel\n2)AMD\n3)ASUS\n4)Gigabyte\n5)Cooler Master\n6)Thermaltake"));
 switch (marca) {
     case 1:
         console.log(productosIntel);
         break;
     case 2:
         console.log(productosAmd);
         break;
     case 3:
         console.log(productosAsus);
         break;
     case 4:
         console.log(productosGigabyte);
         break;
     case 5:
         console.log(productosCoolerMaster);
         break;
     case 6:
         console.log(productosThermaltake);
         break;
     default:
         console.log(productos);
 }

/* Filtro por precio minimo y maximo */
 let precioMin = parseFloat(prompt("Ingresar precio minimo"));
 let precioMax = parseFloat(prompt("Ingresar precio maximo"));
 const productosMinMax = filtrarPrecio(stockProductos, precioMin, precioMax);
 console.log(productosMinMax);


/* Busqueda */
 let busqueda = prompt("Ingrese el nombre de lo que quiere buscar");
 const resultadoBusqueda = filtrarNombre(stockProductos, busqueda.toLocaleLowerCase());
 console.log(resultadoBusqueda);

/* Carrito */
const carrito = [];
/* Agrego productos al carrito */
let ingreso = parseInt(prompt("Que producto quiere agregar al carrito:\n1)Procesador Intel Core i9 12900KF 5.2GHz Turbo Socket 1700\n2)Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X ROG STRIX GAMING White OC\n3)Gabinete Thermaltake V200 Tempered Glass Ryzen Edition\n4)Quitar ultimo producto del carrito\nPARA TERMINAR INGRESAR 0"));
while (ingreso != 0) {
    switch (ingreso) {
        case 1:
            agregarCarrito(producto1);
            break;
        case 2:
            agregarCarrito(producto5);
            break;
        case 3:
            agregarCarrito(producto10);
            break;
        case 4:
            quitarCarrito();
            break;
        default:
    }
    ingreso = parseInt(prompt("Que producto quiere agregar al carrito:\n1)Procesador Intel Core i9 12900KF 5.2GHz Turbo Socket 1700\n2)Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X ROG STRIX GAMING White OC\n3)Gabinete Thermaltake V200 Tempered Glass Ryzen Edition\n4)Quitar ultimo producto del carrito\nPARA TERMINAR INGRESAR 0"));
}
console.log(carrito);
/* Calculo el total de lo que hay en el carrito */
let carritoPrecios = carrito.map(function (el) {
    return el.precio
});
const acumular = (acumulador, el) => acumulador + el;
let carritoTotal = carritoPrecios.reduce(acumular, 0);
console.log(carritoTotal);










// FUNCIONES 

/* Cargar objetos a array */
function cargarObjeto(arr, obj) {
    arr.push(obj);
}

/* Agregar IVA a precio */

function agregarIva(arr) {
    const precioConIva = arr.map((el) => {
        return {
            ...el,
            precio: el.precio * 1.21,
        }
    });
    return precioConIva;
}

/* Filtrar array por propiedad categoria */
function filtrarCategoria(arr, filtro) {
    const filtrado = arr.filter(el => el.categoria === filtro.toLowerCase())
    return filtrado;
}

/* Filtrar array por propiedad marca */
function filtrarMarca(arr, filtro) {
    const filtrado = arr.filter(el => el.marca === filtro.toLowerCase())
    return filtrado;
}

/* Filtrar array por precio minimo y maximo */
function filtrarPrecio(arr, min, max) {
    const filtrado = arr.filter((el) => {
        return el.precio > min && el.precio < max
    })
    return filtrado;
}

/* Filtrar busqueda */
function filtrarNombre(arr, filtro) {
    const filtrado = arr.filter((el) => {
        return el.nombre.includes(filtro);
    });
    return filtrado;
}

/* Agregar al carrito */

function agregarCarrito(el) {
    carrito.push(el);
}

/* Quitar del carrito */
function quitarCarrito() {
    carrito.pop();
}







// AGREGAR STOCK DE PRODUCTOS AL DOM

const contenedorProductos = document.getElementById("contenedor-productos");
stockProductos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("card")
    div.innerHTML = `
    <h3 class="card__nombre">${producto.nombre}</h3>
    <div class="card__contenedor-img">
    <img class="card__img" src="./img/productos/${producto.img}" alt="">
    </div>
    <div class="card__contenedor">
        <button class="btn card__btn">Agregar</button>
        <p class="card__precio">$${producto.precio}</p>
    </div>
     `
    contenedorProductos.appendChild(div); 
});












