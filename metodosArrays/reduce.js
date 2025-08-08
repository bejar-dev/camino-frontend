const productos = [
    { nombre: "Camiseta", precio: 59 },
    { nombre: "Pantalón", precio: 109 },
    { nombre: "Gorra", precio: 29 },
    { nombre: "Cafarena", precio: 69 },
    { nombre: "Medias", precio: 12 }
]

const IGV = 0.18;

const total = productos.reduce((acc, producto) => {
    return acc + (producto.precio * (1 + IGV));
}, 0);

console.log(`Total a pagar: S/${total.toFixed(2)}`);