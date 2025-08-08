const productos = [
    {nombre: "Laptop", precio: 1200},
    {nombre: "Mouse", precio: 25},
    {nombre: "Teclado", precio: 45}
];

const productosConIGV = productos.map((producto) => ({
    nombre: producto.nombre,
    precioConIGV: producto.precio + (producto.precio * 0.18)})
);

productosConIGV.forEach((producto) => {
    console.log(`${producto.nombre}: S/${producto.precioConIGV.toFixed(2)}`);
});