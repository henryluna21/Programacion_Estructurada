function enviarCorreo(direccion) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (direccion) {
                resolve(`Correo enviado a ${direccion}`);
            } else {
                reject("Dirección de correo no proporcionada");
            }
        }, 2000); // Simula un tiempo de envío de 2 segundos
    });
}

// Ejemplo de uso
enviarCorreo("ejemplo@correo.com")
    .then(console.log)
    .catch(console.error);
