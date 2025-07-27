// Parámetro por defecto
const potencia = (base, exponente=2) => {
    let resultado = base**exponente;
    return `El resultado es: ${resultado}`;
};

console.log(potencia(4));
console.log(potencia(2, 5));

// Rest parameter
const promedio = (...numeros) => {
    let resultado = numeros.reduce((numero, sumando) => numero + sumando, 0);
    return `El promedio es: ${resultado / numeros.length}`;
};

console.log(promedio(2, 3, 4, 5, 6));

// Spread en arrays
const a = [1, 2, 3];
const b = [4, 5];

const combinado = [...a, ...b, 6];

console.log(`Combinación: ${combinado}`);

// Spread en objetos
const config = { darkMode: true, lang: "es" };

const newConfig = { ...config, lang: "en", version: "1.0.0" };

console.log(newConfig);

// Destructuración con rest
const numeros = [100, 200, 300, 400, 500];

const [ primer, ...resto ] = numeros;

console.log(primer);
console.log(resto);

// Diferencia entre rest y spread
// Pienso que son lo mismo pero que se llama de diferente manera en relación a su uso. Si estoy mal, explícame.