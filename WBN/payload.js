(function() {
    const sprayArray = [];
    const largeObjectSize = 0xA00000;  // 10 MB
    
    for (let i = 0; i < 200; i++) {
        // Crear objetos grandes con referencias cruzadas
        let obj1 = { data: "A".repeat(largeObjectSize) };
        let obj2 = { data: "B".repeat(largeObjectSize), ref: obj1 };
        obj1.ref = obj2;  // Referencia cruzada

        sprayArray.push(obj1, obj2);

        console.log(`[+] Iteración ${i + 1}: Objetos grandes y cruzados añadidos.`);
    }
    console.log("[+] Heap spraying con referencias cruzadas completado.");
    alert("Heap spraying intensivo con referencias cruzadas completado.");
})();
