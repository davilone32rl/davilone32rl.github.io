(function() {
    const sprayArray = [];
    const spraySize = 0x80000;  // 512 KB por bloque
    const sprayCount = 1024;     // Número de bloques para evitar saturación total

    for (let i = 0; i < sprayCount; i++) {
        let sprayStr = "A".repeat(spraySize);
        sprayArray.push(sprayStr);
    }
    console.log("Heap spraying para PS4 completado.");
})();