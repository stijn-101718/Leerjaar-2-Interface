        async function haalgrapop() {
    try {
        let response = await fetch("https://api.chucknorris.io/jokes/random");
        let value = await response.json();
        console.log(value.value);
    } catch (error) {
        console.log("Er ging iets mis", error);
    }
}

haalgrapop();