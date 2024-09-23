function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero === 5) {
            resolve("El número es 5");
        } else {
            reject("El número no es 5");
        }
    });
}

// Ejemplo de uso
verificarNumero(4)
    .then(console.log)
    .catch(console.error);
