function wachtEnVoerUit(tijd, callback) {
    setTimeout(callback, tijd);
}



wachtEnVoerUit(2000, function() {
    console.log("Klaar met wachten!");
});