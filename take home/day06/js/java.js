fetch("https://cat-fact.herokuapp.com")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("done");
    console.log(getFact);
    return fetch(getFact);
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(getFact);
    data.forEach((user) => {
      const img = document.createElement("img");
      img.src = user.avatar_url;
      img.style.width = "100px";
      document.body.appendChild(img);
    });
  });



  function getFact() {
    $scope.promise = ApiService.getFact($state.params.factId)
        .then(function(response) {
            console.log(response.data);

            $scope.fact = response.data;
        });
    getFact();

    function catFacts() {
        const catFact = prompt("Random Cat Fact:");
        
        alert(catFact);
      }
      catFacts();