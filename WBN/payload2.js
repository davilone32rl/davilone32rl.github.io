(function() {
    const buffer = new ArrayBuffer(8); // Buffer pequeño
    const view = new Uint8Array(buffer);

    try {
        for (let i = 0; i < 16; i++) { // Intentar escribir más allá del límite
            view[i] = 0xFF;
        }
    } catch (error) {
        console.error("Error de desbordamiento detectado:", error.message);
    }
})();
