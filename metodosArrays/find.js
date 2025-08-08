const productos = [
    { nombre: "Smartphone", stock: 10 },
    { nombre: "Tablet", stock: 0 },
    { nombre: "Audífonos", stock: 4 },
    { nombre: "Laptop", stock: 0 }
];

const productoSinStock = productos.find((producto) => 
    producto.stock === 0
);

console.log(`Producto agotado: ${productoSinStock.nombre}`);