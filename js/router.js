// Fonction de navigation entre les vues
function navigateTo(view) {
  const menuScreen = document.getElementById("menu-screen");
  const rankingGame = document.getElementById("ranking-game");

  // Cacher toutes les vues
  menuScreen.style.display = "none";
  rankingGame.style.display = "none";

  // Afficher la vue demandée
  if (view === "menu") {
    menuScreen.style.display = "flex";
    document.body.classList.remove("final-view");
  }

  if (view === "jeu") {
    rankingGame.style.display = "flex";
    document.querySelector(".ranking-container").style.display = "block";
    document.getElementById("anime-container").style.display = "flex";
    startNewRanking(); // Appel à la fonction définie dans game.js
  }
}

// Initialisation de la vue par défaut
window.addEventListener("DOMContentLoaded", () => {
  navigateTo("menu");
});
