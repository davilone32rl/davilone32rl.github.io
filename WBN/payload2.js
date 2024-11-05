(function() {
    const sprayArray = [];
    const reducedObjectSize = 0x666666; // Tamaño reducido (aprox. 6 MB)
    const maxIterations = 400;

    for (let i = 0; i < maxIterations; i++) {
        let reducedObject = "A".repeat(reducedObjectSize);
        sprayArray.push(reducedObject);

        if (i % 100 === 0) {
            console.log(`Iteración ${i + 1} con tamaño reducido completada.`);
        }
    }

    console.log("Heap spraying con tamaños reducidos completado.");
    alert("Prueba completada con tamaños de objeto reducidos.");
})();
