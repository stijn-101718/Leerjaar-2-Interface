async function controleerGebruiker() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (response.ok) {
      let data = await response.json();
      console.log("Gebruiker gevonden: " + data.name);
    } else {
      console.log("Gebruiker niet gevonden");
    }
  } catch (error) {
    console.log("Er is iets mis gegaan", error);
  }
}


controleerGebruiker();