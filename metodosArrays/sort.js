const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 900 },
    { nombre: "Cargador", precio: 20 }
];

productos.sort((a, b) => a.precio - b.precio);

productos.forEach((producto) => {
    console.log(`Producto: ${producto.nombre} | Precio: ${producto.precio}`)
});