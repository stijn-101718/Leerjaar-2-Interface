fetch('https://pokeapi.co/api/v2/pokemon/25')
  .then(response => response.json())
  .then(data => console.log(data.name))



    .catch((fout) => {
        console.log("er is iets mis gegaan",fout);

    });



