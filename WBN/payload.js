(function() {
    const sprayArray = [];
    const spraySize = 0x100000; // Tamaño de cada spray
    const sprayCount = 100;     // Número de objetos para llenar la memoria

    // Crear múltiples cadenas largas y colocarlas en el heap
    for (let i = 0; i < sprayCount; i++) {
        let sprayStr = "A".repeat(spraySize);
        sprayArray.push(sprayStr);
    }

    console.log("Heap spraying completado. Se han colocado objetos grandes en memoria.");
    alert("exitos");
})();