(function() {
    const bufferSize = 20 * 1024 * 1024; // 20 MB en bytes
    const largeBuffer = new ArrayBuffer(bufferSize);
    
    console.log(`ArrayBuffer de ${bufferSize} bytes (${bufferSize / (1024 * 1024)} MB) creado.`);
    
    // Puedes llenar el buffer con datos si es necesario
    const view = new Uint8Array(largeBuffer); // Vista para manipular el buffer
    for (let i = 0; i < view.length; i++) {
        view[i] = i % 256; // Rellenando el buffer con valores cíclicos
    }

    alert("Buffer lleno con datos.");
})();
