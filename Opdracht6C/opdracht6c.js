fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Gebruiker niet gevonden");
      return;
    }
  })
  .then(data => {
    if (data) {
      console.log("Gebruiker gevonden: " + data.name);
    }
  })
  .catch((fout) => {
    console.log("Er is iets mis gegaan", fout);
  });