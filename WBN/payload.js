(function() {
    const sprayArray = [];
    const spraySize = 0xA00000; // 10MB por objeto
    const sprayCount = 50;       // Número de objetos para llenar la memoria

    // Definir el payload (puede ser cualquier código JS)
    const payload = `
    (function() {
        if (!("Notification" in window)) {
            console.error("Este navegador no soporta las notificaciones.");
            return;
        }

        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                const notification = new Notification("Notificación del Sistema", {
                    body: "¡Payload ejecutado correctamente!",
                    icon: "https://example.com/icon.png"
                });

                notification.onclick = function() {
                    console.log("Notificación clicada");
                };
            } else {
                console.error("Permiso para mostrar notificaciones denegado.");
            }
        });
    })();
`;

    // Crear el heap spraying
    console.log("Iniciando heap spraying agresivo...");
    for (let i = 0; i < sprayCount; i++) {
        let sprayStr = "A".repeat(spraySize); // Crear una cadena de 10MB
        sprayArray.push(sprayStr);
    }

    console.log("Heap spraying completado. Se han colocado objetos grandes en memoria.");

    // Intentar inyectar el payload en la memoria
    try {
        // Ejecutar el payload
        eval(payload); // En un ataque real, esta sería la parte crítica
    } catch (error) {
        console.error('Error al ejecutar el payload:', error);
    }
})();
