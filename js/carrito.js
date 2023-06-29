let productosEnCArrito =  localStorage.getItem("productos-en-carrito");
productosEnCArrito = JSON.parse(productosEnCArrito)

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")
let botonesEliminar = document.querySelectorAll(".carrito_product_delete");
const botonVaciar = document.querySelector("#carrito_vaciar")
const botonComprar = document.querySelector(".carrito_total");

function cargarProdCarr() {
    if (productosEnCArrito && productosEnCArrito.length>0) {


        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML='';
    
        productosEnCArrito.forEach(producto => {
            
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito_product_img" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito_product_name">
                    <small>Titulo</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito_product_amount">
                    <small>Cantidad:</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito_product_price">
                    <small>Price</small>
                    <p>${producto.precio}</p>
                </div>
                <div class="carrito_product_price">
                    <small>Subtotal</small>
                    <p>${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito_product_delete" id=${producto.id}><i class="bi bi-trash"></i></button>`;
                contenedorCarritoProductos.append(div);
            });
        
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    
    actualizarBtnEliminar();
    actualizarTotal();
}
cargarProdCarr();



function actualizarBtnEliminar() {
    btnAgregar = document.querySelectorAll(".carrito_product_delete");

    btnAgregar.forEach(boton=>{
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e) {
    let idButton = e.currentTarget.id;
        
    const index = productosEnCArrito.findIndex(prod=> prod.id === idButton)

    productosEnCArrito.splice(index, 1);

    cargarProdCarr();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCArrito))
}

botonVaciar.addEventListener("click", vaciarCarrito)

function vaciarCarrito() {
    productosEnCArrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCArrito));
    cargarProdCarr()
}

function actualizarTotal() {
    const precioTotal = productosEnCArrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    botonComprar.innerText = `$${precioTotal}`;
}