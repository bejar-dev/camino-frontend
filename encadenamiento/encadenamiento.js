// primer ejercicio
const usuario = {
    nombre: "Brayan",
    contacto: {
        telefono: "987654321"
    }
};

const userEmpresa = usuario.contacto?.empresa;

const validar = userEmpresa === undefined ? `El usuario no pertenece a ninguna empresa` : `El usuario pertenece a la empresa ${userEmpresa}`;

console.log(validar);

// segundo ejercicio
const nickname = null;

console.log(`Mi nombre es ${nickname ?? "desconocido"}.`)

// Tercer ejercicio
const input = 0;

console.log(`Número: ${input ?? 1}`);