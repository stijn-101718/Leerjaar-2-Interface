function voerTaakUit(taak, callback) {
    setTimeout(callback, 2000, taak);
}

voerTaakUit("Data verwerken", (D) => {
    console.log(`Taak '${D}' is afgerond.`);
});
