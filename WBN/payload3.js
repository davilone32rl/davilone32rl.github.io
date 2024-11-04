(function() {
    try {
        const buffer = new ArrayBuffer(16); // Buffer pequeño
        const view = new Uint8Array(buffer);

        // Escritura fuera del límite intencionada
        for (let i = 0; i < 32; i++) {  // Más allá del tamaño real
            view[i] = 0xFF;
        }

        console.log("Prueba de buffer overflow ejecutada en PS4.");
    } catch (error) {
        alert("Error de overflow detectado:", error.message);
    }
})();