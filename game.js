async function populate() {
  const requestURL =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5U9DAd6aBCpR2Ki3cv7X/scores/";
  const request = new Request(requestURL);

  const response = await fetch(request);

  const superHeroesText = await response.text();
  const superHeroes = JSON.parse(superHeroesText);

  populateHeroes(superHeroes);
}

async function newScore() {
  const requestURL =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5U9DAd6aBCpR2Ki3cv7X/scores/";

  const method = {
        method: 'POST',
        body: JSON.stringify({
          user: 'New user', score: 100,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };
  const request = new Request(requestURL);

  const response = await fetch(request, method);

  const superHeroesText = await response.text();
  const superHeroes = JSON.parse(superHeroesText);
}

function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj["result"];

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");

    myH2.textContent = hero.user;
    myPara1.textContent = `Score: ${hero.score}`;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);

    section.appendChild(myArticle);
  }
}

populate();
newScore();


// ******************************************************
// code for get starting API

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'mandarina-mar',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//   //{result: 'Game with ID: 5U9DAd6aBCpR2Ki3cv7X added.'}

  // fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //   "item_id": "52874",
  //   "username": "Mar y sol",
  //   "comment": "Testing"
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

//     //{result: 'Leaderboard score created correctly.'}

//     fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5U9DAd6aBCpR2Ki3cv7X/scores/')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

