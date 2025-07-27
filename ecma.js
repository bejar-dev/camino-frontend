const nombre = (name) => `Hola, soy ${name}`;

const multiplicacion = (a, b) => a * b;

const parOimpar = (numero) => {
    // Validamos
    const mensaje = numero % 2 === 0 ? "par" : "impar";

    return `El número ${numero} es: ${mensaje}`;
};

// Imprimir
console.log(nombre("brayan"));
console.log(multiplicacion(5, 4));
console.log(parOimpar(11));