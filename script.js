// Criar mapa centralizado em Maringá
var map = L.map('map').setView([-23.4205, -51.9331], 13);

// Mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Ecopontos (você pode adicionar mais depois)
var ecopontos = [
  {
    nome: "Ecoponto Zona 7",
    coords: [-23.417, -51.937],
    endereco: "Zona 7, Maringá",
    tipo: "Eletrônicos pequenos"
  },
  {
    nome: "Ecoponto Parque Industrial",
    coords: [-23.430, -51.910],
    endereco: "Parque Industrial",
    tipo: "Eletrônicos gerais"
  },
  {
    nome: "Ecoponto Centro",
    coords: [-23.420, -51.933],
    endereco: "Centro de Maringá",
    tipo: "Pilhas e baterias"
  }
];

// Lista HTML
var lista = document.getElementById("lista-ecopontos");

// Adicionar no mapa e lista
ecopontos.forEach(ponto => {
  // Marker no mapa
  var marker = L.marker(ponto.coords).addTo(map)
    .bindPopup(`<b>${ponto.nome}</b><br>${ponto.endereco}<br>${ponto.tipo}`);

  // Item na lista
  var item = document.createElement("li");
  item.innerHTML = `
    <strong>${ponto.nome}</strong><br>
    ${ponto.endereco}<br>
    ${ponto.tipo}
  `;

  // Quando clicar na lista → ir pro mapa
  item.addEventListener("click", () => {
    map.setView(ponto.coords, 15);
    marker.openPopup();
  });

  lista.appendChild(item);
});