(function() {
    const sprayArray = [];
    const objectSize = 0x555555; // Tamaño de cada objeto (aprox. 5.5 MB)
    const maxIterations = 400;

    for (let i = 0; i < maxIterations; i++) {
        let largeObject = "A".repeat(objectSize);
        sprayArray.push(largeObject);

        // Liberar memoria cada 100 iteraciones para evitar bloqueo completo
        if (i % 100 === 0) {
            console.log(`Liberando memoria en iteración ${i}`);
            sprayArray.length = 0;
        }

        // Log de cada iteración significativa para monitoreo
        if (i % 50 === 0) {
            console.log(`Iteración ${i + 1} completada.`);
        }
    }

    console.log("Heap spraying completado con liberación periódica.");
    alert("Heap spraying finalizado con éxito sin bloqueos.");
})();
