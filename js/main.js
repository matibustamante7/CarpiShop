// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];


const contenedorProductos = document.querySelector('#container_products');
const botonesCategorias = document.querySelectorAll(".btn-categoria");
const tituloPrincipa = document.querySelector('#title');
const botonesAgregar = document.querySelectorAll(".product_add");
const numero = document.querySelector(".numero");


function cargarProductos(productosElegidos) {
    
    contenedorProductos.innerHTML = '';

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
        <div class="product">
            <img class="product_img" src="${producto.imagen}" alt=${producto.titulo}>
                <div class="product_detail">
                    <h3 class="product_title">${producto.titulo}</h3>
                    <p class="product_price">$${producto.precio}</p>
                    <button class="product_add" id=${producto.id}>Agregar</button>
                </div>
        </div>`

        contenedorProductos.append(div);
    })
    actualizarBtnAdd()
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e)=>{
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !== 'todos') {

            const productoCategoria = productos.find(producto =>  producto.categoria.id === e.currentTarget.id)

            let productosMostrar = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipa.innerHTML = productoCategoria.categoria.nombre;
            cargarProductos(productosMostrar);
        } else {
            tituloPrincipa.innerHTML = "Todos los productos";
            cargarProductos(productos)
        }
   
    })
})


function actualizarBtnAdd() {
    btnAgregar = document.querySelectorAll(".product_add");

    btnAgregar.forEach(boton=>{
        boton.addEventListener("click", agregaAlCarrito)
    })
}

let productCarrito;
let productosEnCArritoLs = localStorage.getItem("productos-en-carrito");
if (productosEnCArritoLs) {
    productCarrito = JSON.parse(productosEnCArritoLs)
    actualizarCantProd();

} else{
    productCarrito =[];
}

function agregaAlCarrito(e) {
    const idButton = e.currentTarget.id;
    const prodAgregado = productos.find(producto => producto.id === idButton)

    if (productCarrito.some(producto => producto.id === idButton)) {
        const index = productCarrito.findIndex(producto => producto.id === idButton);
        productCarrito[index].cantidad++;
    }else{
        prodAgregado.cantidad = 1;
        productCarrito.push(prodAgregado);
    }
    actualizarCantProd();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productCarrito));
    console.log(productCarrito);
}

function actualizarCantProd() {
    let nuevoNumero = productCarrito.reduce((acc, producto)=>acc + producto.cantidad,0);
    numero.innerText = nuevoNumero;
}