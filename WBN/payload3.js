(function() {
    const buffer = new ArrayBuffer(64);
    const view = new DataView(buffer);

    for (let i = 0; i < view.byteLength; i += 4) {
        view.setUint32(i, 0x41414141 + i);
        console.log(`Escrito en posición ${i}: ${view.getUint32(i).toString(16)}`);
    }
})();
