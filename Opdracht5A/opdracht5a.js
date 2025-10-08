function rekenuit(getal1, getal2, callback){
    const resultaat = getal1 + getal2;
    callback(resultaat);
}

function verdubbelEnToon(uitkomst) {
    console.log(uitkomst * 2);
}

rekenuit(6, 7, verdubbelEnToon);