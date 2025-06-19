let dressData = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    dressData = data.dresses;
    renderDressCards(dressData);
  });

function renderDressCards(dresses) {
  const grid = document.getElementById("dress-grid");
  grid.innerHTML = "";

  dresses.forEach(dress => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => selectDress(dress.name);

    card.innerHTML = `
      <div class="icon" style="color: ${dress.color};">${dress.icon}</div>
      <h3>${dress.name}</h3>
      <p>${dress.description}</p>
      <div class="tags">${dress.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
    `;

    grid.appendChild(card);
  });
}

function selectDress(dressName) {
  const selected = dressData.find(d => d.name === dressName);
  if (!selected) return;

  document.getElementById("result").style.display = "block";
  document.getElementById("selected-dress").textContent = `You selected: ${selected.name}`;

  const container = document.getElementById("accessories-container");
  container.innerHTML = "";

  selected.accessories.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="icon">${item.icon}</div>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="match">${item.match}</div>
    `;
    container.appendChild(card);
  });

  window.scrollTo({ top: container.offsetTop - 100, behavior: 'smooth' });
}

// Navigation button functions
function showHome() {
  alert("Navigated to Home.");
}

function showTrends() {
  alert("Navigated to Trends.");
}

function showFavorites() {
  alert("Navigated to Favorites.");
}

function showAbout() {
  alert("Navigated to About.");
}

