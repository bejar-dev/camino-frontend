const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 900 },
    { nombre: "Cargador", precio: 20 }
];

const productosPrecioMayor = productos
    .filter((producto) => producto.precio > 100
);

productosPrecioMayor.forEach((producto) => {
    console.log(`${producto.nombre} : S/${producto.precio.toFixed(2)}`)
});