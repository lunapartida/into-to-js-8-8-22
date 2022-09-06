for (let i = 0; i < 10; i++) {
  // this creates a loop
  const h1 = document.createElement("h1"); //this creates a element
  h1.innerHTML = "Hello World"; // this creates the text
  document.body.appendChild(h1); // this creates where it pushed to
  h1.addEventListener("click", () => {
    // this gives the action
    h1.style.color = "red"; // this is the action
  });
}

for (let i = 0; i < 10; i++) {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Hello World";
  document.body.appendChild(h1);
  h1.addEventListener("click", () => {
    h1.style.color = "red";
  });
}

for (let i = 0; i < 10; i++) {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Hello World";
  document.body.appendChild(h1);
}

for (let i = 0; i < 2; i++) {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Hello World";
  document.body.appendChild(h1);
  h1.addEventListener("click", () => {
    h1.style.color = "red";
  });
}

fetch("http://pokeapi.co/api/v2/pokemon/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.results.forEach((pokemon) => {
      const h1 = document.createElement("h1");
      h1.innerText = pokemon.name;
      document.body.appendChild(h1);
    });
  });
