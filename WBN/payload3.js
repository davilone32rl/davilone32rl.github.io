(function() {
    const bufferSize = 0x100000; // Tamaño de 1 MB para el buffer
    let buffer = new ArrayBuffer(bufferSize);
    let view = new DataView(buffer);

    // Rellenar el buffer con valores específicos
    for (let i = 0; i < bufferSize; i += 4) {
        view.setUint32(i, 0x41414141); // Colocamos el valor 0x41414141 en cada posición de 4 bytes
    }

    console.log("ArrayBuffer preparado con datos específicos.");

    // Intento de manipulación de memoria en búsqueda de errores de interpretación de datos
    try {
        let newView = new DataView(buffer, 0, bufferSize * 2); // Intento de vista más grande que el buffer
        console.log("Vista extendida creada sin error.");
    } catch (e) {
        console.error("Error al crear vista extendida:", e);
    }

    // Probar si el navegador permite acceder a direcciones de memoria incorrectas
    console.log("Pruebas de acceso a memoria completadas.");
})();
