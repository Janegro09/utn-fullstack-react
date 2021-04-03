//defino variables globales
var totalCompra=0;
var nombreProductos=productos.map(v=>{return v.nombre});
var productosCompra = [];
var ul = document.createElement('ul');
var ul2 = document.createElement('ul');
let total=document.querySelector(".total");
var cantidad = document.querySelector(".cantidad");
ul.setAttribute('class','productos');
ul2.setAttribute('class','productosCompra');
document.querySelector(".productosDisponibles").appendChild(ul);
document.querySelector(".productosDelCarrito").appendChild(ul2);

//imprime en el dom los nombres de los productos
anexarProductoEnLista = (e) => {
    var li = document.createElement('li');
    li.setAttribute('class','producto');
    li.onclick = seleccionar;
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + e;
}
//imprime los productos que tengo en el carrito
anexarProductoEnCarrito = (e) => {
    var li = document.createElement('li');
    li.setAttribute('class','productoCarrito');
    li.onclick = quitar;
    ul2.appendChild(li);
    li.innerHTML = li.innerHTML + e;
}


//Selecciona un producto disponible y lo coloca en el array del carrito
seleccionar=(e) => {
    totalCompra=0;
    var producto = e.target.innerHTML;
    productosCompra.push(producto);
    cantidad.innerHTML=productosCompra.length;

    nombreProductos=nombreProductos.filter(e => e!=producto);
    ul.innerHTML=" ";
    total.innerHTML="Total: ";
    document.querySelector("title").innerHTML="Unidad 2 - TP2 ("+cantidad.innerHTML+")";

    nombreProductos.forEach(anexarProductoEnLista);
}
//Quita del carrito un producto y lo coloca en el listado de productos
quitar = (e) => {
    if(totalCompra==0){
        alert("Parece que tenes nuevos productos en el carrito, primero debés calcular antes de quitar productos");
        return;
    }
    var producto = e.target.innerHTML;
    nombreProductos.push(producto);

    productosCompra=productosCompra.filter(e => e!=producto);
    ul.innerHTML=" ";
    ul2.innerHTML=" ";
    total.innerHTML="Total: "
    nombreProductos.forEach(anexarProductoEnLista);
    productosCompra.forEach(anexarProductoEnCarrito);
    cantidad.innerHTML=productosCompra.length;
    document.querySelector("title").innerHTML="Unidad 2 - TP2 ("+cantidad.innerHTML+")";
}
//Limpia el carrito
vaciar = () => {
    document.querySelector("title").innerHTML="Unidad 2 - TP2"
    nombreProductos=productos.map(v=>{return v.nombre});
    productosCompra = [];
    ul2.innerHTML=" ";
    ul.innerHTML=" ";
    cantidad.innerHTML="0"
    total.innerHTML="Total: "
    productosCompra.forEach(anexarProductoEnCarrito);
    nombreProductos.forEach(anexarProductoEnLista);
    totalCompra=0;
}
//Calcula el total del carrito
comprar = () => {
    ul2.innerHTML=" ";    
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
    productosCompra.forEach(anexarProductoEnCarrito);
    total.innerHTML="Total: $" + totalCompra;

}

productosCompra.forEach(anexarProductoEnCarrito);
nombreProductos.forEach(anexarProductoEnLista);
