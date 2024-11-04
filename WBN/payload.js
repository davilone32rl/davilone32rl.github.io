(function() {
    const sprayArray = [];
    const spraySize = 0xA00000; // 10MB por objeto
    const sprayCount = 50;       // Número de objetos para llenar la memoria

    // Crear el heap spraying
    console.log("Iniciando heap spraying agresivo...");
    for (let i = 0; i < sprayCount; i++) {
        let sprayStr = "A".repeat(spraySize); // Crear una cadena de 10MB
        sprayArray.push(sprayStr);
    }

    console.log("Heap spraying completado. Se han colocado objetos grandes en memoria.");

    // Aquí cargarías el código binario
    fetch('ftp.bin')
        .then(response => response.arrayBuffer())
        .then(buffer => {

            alert("Código binario cargado en memoria.");
        })
        .catch(error => {
            alert('Error al cargar el archivo binario:', error);
        });
})();