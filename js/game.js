let animeList = [];
let currentIndex = 0;
let rankings = new Array(10).fill(null);
let selectedAnimes = [];

async function loadAnimes() {
  try {
    const response = await fetch('data/animes.json');
    if (!response.ok) throw new Error('Fichier introuvable');
    animeList = await response.json();
  } catch (error) {
    alert("Erreur lors du chargement du fichier JSON : " + error.message);
  }
}

function getRandomAnimes() {
  selectedAnimes = [];
  while (selectedAnimes.length < 10) {
    const randomIndex = Math.floor(Math.random() * animeList.length);
    const anime = animeList[randomIndex];
    if (!selectedAnimes.includes(anime)) {
      selectedAnimes.push(anime);
    }
  }
}

function displayAnime() {
  setTimeout(() => {
    if (currentIndex < selectedAnimes.length) {
      const anime = selectedAnimes[currentIndex];
      document.getElementById("anime-name").textContent = anime.title;
      document.getElementById("anime-img").src = anime.image;
    } else {
      document.getElementById("rank-section").style.display = "none";
      document.getElementById("anime-item").style.display = "none";
      document.getElementById("new-ranking-btn").style.display = "block";
      document.body.classList.add("final-view");
    }
  }, 150);
}

function assignRank(rank) {
  if (rankings[rank - 1] !== null) {
    alert("Ce rang a déjà été attribué !");
    return;
  }

  rankings[rank - 1] = selectedAnimes[currentIndex].title;
  document.getElementById(`rank-${rank}`).disabled = true;
  updateRankingList();
  currentIndex++;
  displayAnime();
}

function updateRankingList() {
  const rankingList = document.getElementById("ranking-list");
  rankingList.innerHTML = '';

  rankings.forEach((animeTitle, index) => {
    if (animeTitle) {
      const anime = selectedAnimes.find(a => a.title === animeTitle);
      rankingList.innerHTML += `
        <li>
          <img src="${anime.image}" alt="${anime.title}">
          <span>Rang ${index + 1}: ${anime.title}</span>
        </li>`;
    }
  });
}

function startNewRanking() {
  getRandomAnimes();
  currentIndex = 0;
  rankings = new Array(10).fill(null);
  document.body.classList.remove("final-view");

  for (let i = 1; i <= 10; i++) {
    document.getElementById(`rank-${i}`).disabled = false;
  }

  updateRankingList();
  document.getElementById("anime-item").style.display = "flex";
  document.getElementById("rank-section").style.display = "block";
  document.getElementById("new-ranking-btn").style.display = "none";
  document.getElementById("anime-name").textContent = "Nom de l'Anime";
  document.getElementById("anime-img").src = "";

  displayAnime();
}

// Charger les animes au démarrage
window.onload = async function () {
  await loadAnimes();
};
