function launchGame(gameId) {
  document.getElementById("menu-screen").style.display = "none";

  const allGames = ['ranking-game']; // ajouter d'autres IDs ici si besoin
  allGames.forEach(id => {
    const section = document.getElementById(id);
    if (section) section.style.display = "none";
  });

  const selectedGame = document.getElementById(gameId);
  if (selectedGame) selectedGame.style.display = "flex";

  if (gameId === 'ranking-game') {
    document.querySelector(".ranking-container").style.display = "block";
    document.getElementById("anime-container").style.display = "flex";
    startNewRanking(); // appel à une fonction définie dans game.js
  } else {
    document.querySelector(".ranking-container").style.display = "none";
  }
}

function backToMenu() {
  document.getElementById("ranking-game").style.display = "none";
  document.getElementById("menu-screen").style.display = "flex";
  document.querySelector(".ranking-container").style.display = "none";
  document.body.classList.remove("final-view");
}
