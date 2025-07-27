// primer ejercicio
const validarConducir = (nombre = "Usuario", edad = 0) => {
    return `Bienvenido, ${nombre}, ${edad >= 18 ? "puede conducir." : "no puede conducir."}`;
};

console.log(validarConducir("Brayan", 20));
console.log(validarConducir(undefined, 16));

// segundo ejercicio
const multiploTres = (numero = 0) => numero % 3 === 0 ? `El número ${numero} es múltiplo de 3.` : `El número ${numero} no es múltiplo de 3.`;

console.log(multiploTres(27));
console.log(multiploTres(20));

// tercer ejercicio
const nameUser = (name) => {
    return `Hola, ${name || "Invitado"}.`;
};

console.log(nameUser("Brayan"));
console.log(nameUser());