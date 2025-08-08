const usuarios = [
    { nombre: "Brayan", edad: 22 },
    { nombre: "Lucía", edad: 19 },
    { nombre: "Carlos", edad: 17 },
    { nombre: "Andrea", edad: 20 }
];

const verificarEdad = usuarios.every((usuario) =>
    usuario.edad >= 18
);

if(verificarEdad){
    console.log("Todos son mayores de edad");
} else {
    console.log("Hay menores de edad");
}

