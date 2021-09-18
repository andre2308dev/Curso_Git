setTimeout(() => {
    console.log("Hola soy un desarrollador")
}, 3000)

const microondas = (comida, milisegundos) => {
    const segundos = milisegundos / 1000;
    setTimeout(() => {
        console.log(`Ha tardado unos ${segundos} segundos en estar su ${comida} `)
    }, milisegundos)
}

microondas("Pizza", 3000);

// Suma Dinamica

const numero1 = parseInt(prompt("Ingrese cualquier número"));
const numero2 = parseInt(prompt("Ingrese otro número"));

const suma = (numero1, numero2) => {
    setTimeout(() => {
        if(typeof numero1 === "number" && typeof numero2 === "number") {
            return alert(`La suma de los números que acaba de ingresar es: ${numero1 + numero2}`);
        } else {
            alert("Ambos deben ser números")
        }        
    }, 2000)
}

suma(numero1, numero2);
