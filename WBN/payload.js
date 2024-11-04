(function() {
    const sprayArray = [];
    const sprayCount = 100; 
    const objectTemplate = { data: new Array(256).fill(0) }; // Objeto con un array de 256 elementos

    for (let i = 0; i < sprayCount; i++) {
        sprayArray.push({ ...objectTemplate, id: i }); // Clonando el objeto y añadiendo un ID
    }

    console.log("Heap spraying con objetos complejos realizado.");
})();
