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