fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data.value))

    .catch((fout) => {
        console.log("er is iets mis gegaan",fout);

    });
