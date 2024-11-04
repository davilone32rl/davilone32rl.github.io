(function() {
    const sprayArray = [];
    const spraySize = 0xA00000; // 10MB por objeto
    const sprayCount = 50;       // Número de objetos para llenar la memoria

    // Crear el heap spraying
    console.log("Iniciando heap spraying...");
    for (let i = 0; i < sprayCount; i++) {
        let sprayStr = "A".repeat(spraySize); // Crear una cadena de 10MB
        sprayArray.push(sprayStr);
    }

    console.log("Heap spraying completado. Se han colocado objetos grandes en memoria.");
})();