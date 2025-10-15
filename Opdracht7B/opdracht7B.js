        async function pokemon() {
    try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
        let name = await response.json();
        console.log(name.name);
    } catch (error) {
        console.log("Er ging iets mis", error);
    }
}

pokemon();