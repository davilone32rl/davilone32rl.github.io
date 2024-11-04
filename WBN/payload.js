(function() {
    const sprayArray = [];
    const spraySize = 0x100000; // 1MB por objeto
    const sprayCount = 200;      // Intentar llenar la memoria rápidamente

    console.log("Iniciando heap spraying agresivo...");

    for (let i = 0; i < sprayCount; i++) {
        let sprayStr = "A".repeat(spraySize); // Crear una cadena de 1MB
        sprayArray.push(sprayStr);
        if (i % 10 === 0) {
            console.log(`Spray ${i + 1} creado, tamaño total en memoria: ${(sprayArray.length * spraySize) / (1024 * 1024)} MB`);
        }
    }

    console.log("Heap spraying completado. Se han colocado objetos grandes en memoria.");
    alert("Carga completa, ¡el sistema está bajo presión!");
})();
