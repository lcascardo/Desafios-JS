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
stockProductos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10);

/* Productos con IVA agregado */
const productosConIva = agregarIva(stockProductos);
// console.log(productosConIva);

/* Filtro por precio minimo y maximo */
//  let precioMin = parseFloat(prompt("Ingresar precio minimo"));
//  let precioMax = parseFloat(prompt("Ingresar precio maximo"));
//  const productosMinMax = filtrarPrecio(stockProductos, precioMin, precioMax);
//  console.log(productosMinMax);

/* Carrito */
const carrito = [];
/* Agrego productos al carrito */
// let ingreso = parseInt(prompt("Que producto quiere agregar al carrito:\n1)Procesador Intel Core i9 12900KF 5.2GHz Turbo Socket 1700\n2)Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X ROG STRIX GAMING White OC\n3)Gabinete Thermaltake V200 Tempered Glass Ryzen Edition\n4)Quitar ultimo producto del carrito\nPARA TERMINAR INGRESAR 0"));
// while (ingreso != 0) {
//     switch (ingreso) {
//         case 1:
//             agregarCarrito(producto1);
//             break;
//         case 2:
//             agregarCarrito(producto5);
//             break;
//         case 3:
//             agregarCarrito(producto10);
//             break;
//         case 4:
//             quitarCarrito();
//             break;
//         default:
//     }
//     ingreso = parseInt(prompt("Que producto quiere agregar al carrito:\n1)Procesador Intel Core i9 12900KF 5.2GHz Turbo Socket 1700\n2)Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X ROG STRIX GAMING White OC\n3)Gabinete Thermaltake V200 Tempered Glass Ryzen Edition\n4)Quitar ultimo producto del carrito\nPARA TERMINAR INGRESAR 0"));
// }
// console.log(carrito);
/* Calculo el total de lo que hay en el carrito */
// let carritoPrecios = carrito.map(function (el) {
//     return el.precio
// });
// const acumular = (acumulador, el) => acumulador + el;
// let carritoTotal = carritoPrecios.reduce(acumular, 0);
// console.log(carritoTotal);










// FUNCIONES 

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

/* Filtrar array por rango de precios */
function filtrarPrecio(arr, min, max) {
    const filtrado = arr.filter((el) => {
        return el.precio > min && el.precio < max
    })
    return filtrado;
}

/* Filtrar precio mayor que */
function filtrarMayorQue(arr, min) {
    const filtrado = arr.filter((el) => {
        return el.precio > min
    })
    return filtrado;
}

/* Filtrar precio menor que */
function filtrarMenorQue(arr, max) {
    const filtrado = arr.filter((el) => {
        return el.precio < max
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




// DOM

/* Agregar stock de productos al DOM */

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


// EVENTOS

/* Evento para buscador */

const btnBuscador = document.getElementById("btn-buscador-productos");
const buscador = document.getElementById("buscador-productos")
btnBuscador.addEventListener("click", (e) => {
    e.preventDefault();
    contenedorProductos.innerHTML = ``;
    let resultadoBusqueda = filtrarNombre(stockProductos, buscador.value.toLowerCase());
    resultadoBusqueda.forEach(producto => {
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
})

/* Evento de filtro por categoria */

const btnCategoria = document.getElementById("btn-categoria"),
    radioProcesador = document.getElementById("filtro-procesador"),
    radioPlaca = document.getElementById("filtro-placa"),
    radioMother = document.getElementById("filtro-mother"),
    radioGabinete = document.getElementById("filtro-gabinete");

btnCategoria.addEventListener("click", (e) => {
    e.preventDefault();
    contenedorProductos.innerHTML = ``;
    let resultado;
    if (radioProcesador.checked) {
        resultado = filtrarCategoria(stockProductos, "procesador");
    }
    else if (radioPlaca.checked) {
        resultado = filtrarCategoria(stockProductos, "placa de video");
    }
    else if (radioMother.checked) {
        resultado = filtrarCategoria(stockProductos, "motherboard");
    }
    else if (radioGabinete.checked) {
        resultado = filtrarCategoria(stockProductos, "gabinete");
    }
    else {
        resultado = stockProductos;
    }
    resultado.forEach(producto => {
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
})

/* Evento de filtro por marcas */

const btnMarca = document.getElementById("btn-marca"),
    radioIntel = document.getElementById("filtro-intel"),
    radioAmd = document.getElementById("filtro-amd"),
    radioAsus = document.getElementById("filtro-asus"),
    radioMsi = document.getElementById("filtro-msi"),
    radioGigabyte = document.getElementById("filtro-gigabyte"),
    radioCoolerMaster = document.getElementById("filtro-cooler_master"),
    radioThermaltake = document.getElementById("filtro-thermaltake");


btnMarca.addEventListener("click", (e) => {
    e.preventDefault();
    contenedorProductos.innerHTML = ``;
    if (radioIntel.checked) {
        resultado = filtrarMarca(stockProductos, "intel");
    }
    else if (radioAmd.checked) {
        resultado = filtrarMarca(stockProductos, "amd");
    }
    else if (radioAsus.checked) {
        resultado = filtrarMarca(stockProductos, "asus");
    }
    else if (radioMsi.checked) {
        resultado = filtrarMarca(stockProductos, "msi");
    }
    else if (radioGigabyte.checked) {
        resultado = filtrarMarca(stockProductos, "gigabyte");
    }
    else if (radioCoolerMaster.checked) {
        resultado = filtrarMarca(stockProductos, "cooler master");
    }
    else if (radioThermaltake.checked) {
        resultado = filtrarMarca(stockProductos, "thermaltake");
    }
    else {
        resultado = stockProductos;
    }
    resultado.forEach(producto => {
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
})

/* Evento de filtro por precio */

const btnPrecio = document.getElementById("btn-precio"),
    precioMinimo = document.getElementById("precioMinimo"),
    precioMaximo = document.getElementById("precioMaximo");


btnPrecio.addEventListener("click", (e) => {
    e.preventDefault();
    contenedorProductos.innerHTML = ``;
    let resultado;
    if (precioMaximo.value == "") {
        resultado = filtrarMayorQue(stockProductos, precioMinimo.value);
    }
    else if (precioMinimo.value == "") {
        resultado = filtrarMenorQue(stockProductos, precioMaximo.value);
    }
    else if (precioMinimo.value == "" && precioMaximo.value == "") {
        resultado = stockProductos;
    }
    else {
        resultado = filtrarPrecio(stockProductos, precioMinimo.value, precioMaximo.value);
    }
    resultado.forEach(producto => {
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
})










