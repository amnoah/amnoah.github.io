// --- MAP SETUP ---

var map = L.map('map', {
  center: [43.01903661271984, -83.68866637835121],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: "© OpenStreetMap Contributors"
}).addTo(map);

// --- GET DOM CONTROLS ---

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

const active = document.getElementById("activeC");
const closed = document.getElementById("closedC");
const moved = document.getElementById("movedC");
const proposed = document.getElementById("proposedC");


// --- DISPLAY INITIAL YEAR ---

output.innerHTML = slider.value;


// --- MARKER GROUP ---

var allMarkers = L.layerGroup().addTo(map);


// --- MAIN FILTER FUNCTION ---

function updateFilters() {

  const year = Number(slider.value);

  const showActive = active.checked;
  const showClosed = closed.checked;
  const showMoved = moved.checked;
  const showProposed = proposed.checked;

  allMarkers.clearLayers();

  facilities.forEach(f => {

    if (year >= f.start && year < f.end) {

      if (
        (f.status === "active" && showActive) ||
        (f.status === "closed" && showClosed) ||
        (f.status === "moved" && showMoved) ||
        (f.status === "proposed" && showProposed)
      ) {

        const marker = L.marker(
          [f.lat, f.lng],
          { icon: f.icon }
        ).bindPopup(f.popup);

        allMarkers.addLayer(marker);

      }

    }

  });

}


// --- EVENTS ---

slider.addEventListener("input", () => {
  output.innerHTML = slider.value;
  updateFilters();
});

active.addEventListener("change", updateFilters);
closed.addEventListener("change", updateFilters);
moved.addEventListener("change", updateFilters);
proposed.addEventListener("change", updateFilters);


// --- INITIAL LOAD ---

updateFilters();