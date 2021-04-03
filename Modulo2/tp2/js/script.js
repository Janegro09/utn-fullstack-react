var totalCompra=0;
var nombreProductos=productos.map(v=>{return v.nombre});
var productosCompra = [];
var ul = document.createElement('ul');
var ul2 = document.createElement('ul');
let total=document.querySelector(".total");
ul.setAttribute('class','productos');
ul2.setAttribute('class','productosCompra');
document.querySelector(".productosDisponibles").appendChild(ul);
document.querySelector(".productosDelCarrito").appendChild(ul2);

anexarProductoEnLista = (e,i,array) => {
    var li = document.createElement('li');
    li.setAttribute('class','producto');
    li.onclick = seleccionar;
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + e;
}

anexarProductoEnCarrito = (e,i,array) => {
    var li = document.createElement('li');
    li.setAttribute('class','productoCarrito');
    li.onclick = quitar;
    ul2.appendChild(li);
    li.innerHTML = li.innerHTML + e;
}

seleccionar=(e) => {
    var producto = e.target.innerHTML;
    productosCompra.push(producto);

    nombreProductos=nombreProductos.filter(e => e!=producto);
    ul.innerHTML=" ";
    ul2.innerHTML=" ";
    nombreProductos.forEach(anexarProductoEnLista);
    productosCompra.forEach(anexarProductoEnCarrito);
}

quitar = (e) => {
    var producto = e.target.innerHTML;
    nombreProductos.push(producto);

    productosCompra=productosCompra.filter(e => e!=producto);
    ul.innerHTML=" ";
    ul2.innerHTML=" ";
    total.innerHTML="Total: "
    nombreProductos.forEach(anexarProductoEnLista);
    productosCompra.forEach(anexarProductoEnCarrito);
}

vaciar = () => {
    nombreProductos=productos.map(v=>{return v.nombre});
    productosCompra = [];
    ul2.innerHTML=" ";
    ul.innerHTML=" ";
    total.innerHTML="Total: "
    productosCompra.forEach(anexarProductoEnCarrito);
    nombreProductos.forEach(anexarProductoEnLista);
    totalCompra=0;
}

comprar = () => {
    totalCompra=0;
    for (let i = 0; i < productosCompra.length; i++) {
        const element = productosCompra[i];
        productos.forEach(e => {
            if(e.nombre==element){
                totalCompra+=e.precio
            }
        });
    }

    if(totalCompra==0){
        alert('No seleccionaste ningun producto aun');
        return;
    }

    
    total.innerHTML="Total: $" + totalCompra;

}

productosCompra.forEach(anexarProductoEnCarrito);
nombreProductos.forEach(anexarProductoEnLista);