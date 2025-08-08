const productos = [
    { nombre: "Smart TV", stock: 4 },
    { nombre: "Bocina Bluetooth", stock: 0 },
    { nombre: "PC Gamer", stock: 1 },
    { nombre: "Cámara Web", stock: 0 }
];

const productoAgotados = productos.some((producto) =>
    producto.stock === 0
);

if(productoAgotados) {
    console.log("Alerta: Hay productos agotados");
} else {
    console.log("Todo en Stock");
}