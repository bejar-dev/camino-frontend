// Destructurar objeto
const auto = {
    marca: "Toyota",
    modelo: "Control X",
    año: 2019
};

const { marca, modelo } = auto;

console.log(`El auto ${marca} es del modelo ${modelo}.`);

// Destructurar array
const frutas = ["manzana", "plátano", "pera", "uva"];

const [ primera, , tercera ] = frutas;

console.log(`Se extrajo ${primera} y ${tercera} de las frutas`);

// Destructurar objeto propuesto y cambiar valor de las claves
const usuario = {
    username: "coder123",
    correo: "coder@gmail.com"
};

const { username: user, correo: email } = usuario;

console.log(`Usuario: ${user} | Correo: ${email}`);