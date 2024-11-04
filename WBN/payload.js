(function() {
    const sprayArray = [];             // Array para almacenar los objetos en memoria
    const largeObjectSize = 0xA00000;  // Tamaño de objetos grandes (10MB)
    const smallObjectSize = 0x100000;  // Tamaño de objetos pequeños (1MB)
    const totalIterations = 50;        // Número de objetos para llenar la memoria
    const throttleTime = 100;          // Pausa entre cada asignación (ms)
    let iterationCount = 0;            // Contador de iteraciones

    console.log("[+] Iniciando heap spraying avanzado...");

    async function performHeapSpray() {
        for (let i = 0; i < totalIterations; i++) {
            // Crear objetos grandes y pequeños para causar fragmentación
            let largeObject = "A".repeat(largeObjectSize);
            let smallObject = "B".repeat(smallObjectSize);
            
            // Añadir objetos al array para mantenerlos en memoria
            sprayArray.push(largeObject, smallObject);
            iterationCount += 2; // Dos objetos por iteración

            console.log(`[+] Iteración ${iterationCount / 2}: Se añadieron objetos grandes y pequeños al heap.`);

            // Espera antes de la siguiente iteración para no congelar instantáneamente el sistema
            await new Promise(resolve => setTimeout(resolve, throttleTime));
        }
        console.log("[+] Heap spraying completado. La memoria está llena de objetos de prueba.");
        alert("Heap spraying completado. Observar comportamiento del sistema.");
    }

    // Iniciar el proceso de heap spraying
    performHeapSpray();

    // Monitor de estado para depuración adicional
    setInterval(() => {
        console.log(`[INFO] Spray Array Length: ${sprayArray.length}, Iteraciones completadas: ${iterationCount / 2}`);
    }, 2000); // Log cada 2 segundos para observar el estado en tiempo real

})();
