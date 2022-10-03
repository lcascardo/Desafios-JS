let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productosDiv = document.getElementById("productos");
const carritoDiv = document.getElementById("carrito");

const btnResetFiltro = document.getElementById("btn-reset-filtro");





// --------------------------FUNCIONES--------------------------

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




// ------------------AJAX Y FETCH--------------------------



async function fetchAPI() {
    const response = await fetch("./data/data.json");
    const stockProductos = await response.json();
    console.log(stockProductos);

    /* Crear Cards */
    function crearCards(array) {
        productosDiv.innerHTML = ``;
        array.forEach(producto => {
            productosDiv.innerHTML += `<div class="card">
        <h3>${producto.nombre}</h3>
        <img src="./img/productos/${producto.img}">
        <p>$${producto.precio}</p>
        <button id="btnAgregarCarrito${producto.id}">Agregar</button>
        </div>`;
        })
        funcionBotonAgregar(array);
    }

    /* Seleccionar Boton Agregar al Carrito */
    function funcionBotonAgregar(array) {
        array.forEach(producto => {
            document.getElementById(`btnAgregarCarrito${producto.id}`).addEventListener("click", () => {
                agregarAlCarrito(producto);
                Toastify({
                    text: "AGREGASTE AL CARRITO: " + producto.nombre,
                    duration: 4000
                }).showToast();
            })
        })
    }

    /* Funcion Agregar al Carrito */
    function agregarAlCarrito(producto) {
        let existe = carrito.some(prod => prod.id === producto.id);
        if (existe === false) {
            producto.cantidad = 1;
            carrito.push(producto);
        }
        else {
            let prodFind = carrito.find(prod => prod.id === producto.id);
            prodFind.cantidad++;
        }
        renderizarCarrito();
    }


    /* Funcion Renderizar Carrito */
    function renderizarCarrito() {
        carritoDiv.innerHTML = ``;
        carrito.forEach(prod => {
            carritoDiv.innerHTML += `<div class="carritoCard">
        <h3>${prod.nombre}</h3>
        <p>Cantidad: ${prod.cantidad}</p>
        <p>Precio: $${prod.precio}</p>
        <button id="btnBorrarCarrito${prod.id}">Borrar</button>
        <button id="btnBorrarUnoCarrito${prod.id}">-</button>
        </div>`;
        })




        localStorage.setItem("carrito", JSON.stringify(carrito));
        borrarDelCarrito();
        borrarUnoDelCarrito();
    }

    /* Funcion Borrar Elemento Completo del Carrito */
    function borrarDelCarrito() {
        carrito.forEach((producto => {
            document.getElementById(`btnBorrarCarrito${producto.id}`).addEventListener("click", () => {
                let indice = carrito.findIndex(el => el.id === producto.id);
                carrito.splice(indice, 1);
                renderizarCarrito();
                Toastify({
                    text: "PRODUCTO ELIMINADO",
                    style: {
                        background: "linear-gradient(to right, #E84242, #D80A0A)",
                    },
                    duration: 4000
                }).showToast();
            })
        }))
    }

    /* Funcion Borrar un Elemento del Carrito */
    function borrarUnoDelCarrito() {
        carrito.forEach((producto => {
            document.getElementById(`btnBorrarUnoCarrito${producto.id}`).addEventListener("click", () => {
                if (producto.cantidad === 1) {
                    let indice = carrito.findIndex(el => el.id === producto.id);
                    carrito.splice(indice, 1);
                }
                else {
                    producto.cantidad--;
                }
                Toastify({
                    text: "ELIMINASTE UN PRODUCTO",
                    style: {
                        background: "linear-gradient(to right, #E84242, #D80A0A)",
                    },
                    duration: 4000
                }).showToast();
                renderizarCarrito();
            })
        }))
    }

    /* Filtrar busqueda */
    function filtrarNombre(arr, filtro) {
        const filtrado = arr.filter((el) => {
            return el.nombre.toLowerCase().includes(filtro);
        });
        return filtrado;
    }

    /* Evento Busqueda */
    function eventoBusqueda() {
        const btnBuscador = document.getElementById("btnBuscadorProductos");
        const buscador = document.getElementById("buscadorProductos");
        btnBuscador.addEventListener("click", (e) => {
            e.preventDefault();
            let resultadoBusqueda = filtrarNombre(stockProductos, buscador.value.toLowerCase());
            crearCards(resultadoBusqueda);
        })
    }

    /* Filtrar array por propiedad categoria */
    function filtrarCategoria(arr, filtro) {
        const filtrado = arr.filter(el => el.categoria.toLowerCase() === filtro.toLowerCase())
        return filtrado;
    }

    /* Evento de filtro por categoria */
    function eventoCategoria() {
        const btnCategoria = document.getElementById("btn-categoria"),
            radioProcesador = document.getElementById("filtro-procesador"),
            radioPlaca = document.getElementById("filtro-placa"),
            radioMother = document.getElementById("filtro-mother"),
            radioGabinete = document.getElementById("filtro-gabinete");

        btnCategoria.addEventListener("click", (e) => {
            e.preventDefault();
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
            crearCards(resultado);
        })
    }

    /* Filtrar array por propiedad marca */
    function filtrarMarca(arr, filtro) {
        const filtrado = arr.filter(el => el.marca.toLowerCase() === filtro.toLowerCase())
        return filtrado;
    }

    /* Evento de filtro por marcas */
    function eventoMarca() {
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
            crearCards(resultado);
        })
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

    /* Evento de filtro por precio */
    function eventoPrecioMinMax() {
        const btnPrecio = document.getElementById("btn-precio"),
            precioMinimo = document.getElementById("precioMinimo"),
            precioMaximo = document.getElementById("precioMaximo");

        btnPrecio.addEventListener("click", (e) => {
            e.preventDefault();
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
            crearCards(resultado);
        })
    }

    /* Evento Boton Restear Filtro */
    function eventoResetearFiltro() {
        btnResetFiltro.addEventListener("click", () => {
            crearCards(stockProductos);
        })
    }


    // ---------------LLAMADA DE FUNCIONES--------------------

    crearCards(stockProductos);
    renderizarCarrito();
    eventoBusqueda();
    eventoCategoria();
    eventoMarca();
    eventoPrecioMinMax();
    eventoResetearFiltro();



}

fetchAPI();











