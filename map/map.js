/*
 * Initialize our map via Leaflet.
 * These coordinates center it on the University of Michigan-Flint.
 * Go Blue!
 */

var map = L.map('map', {
  center: [43.01903661271984, -83.68866637835121],
  zoom: 15
});

// Retrieve tiles from OpenStreetMap API + add Attribution per licensing requirements.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: "© OpenStreetMap Contributors"
}).addTo(map);

// Create a layer for our markers to be placed on.
var allMarkers = L.layerGroup().addTo(map);


/*
 * Set up our Leaflet icons.
 */

/*
 * PLEASE NOTE:
 * All icons in this project are licensed under BSD-2.
 * Please see their original license here: https://github.com/Vectorial1024/leaflet-color-markers/blob/master/LICENSE
 * Please see their original project here: https://github.com/Vectorial1024/leaflet-color-markers
 */

var activeIcon = L.icon({
  iconUrl: '../assets/icons/marker-icon-green.svg',
  shadowUrl: '../assets/icons/marker-shadow.svg',
  iconSize: [25,41],
  iconAnchor: [12,41],
  popupAnchor: [1,-34],
  shadowSize: [41,41]
});

var closedIcon = L.icon({
  iconUrl: '../assets/icons/marker-icon-red.svg',
  shadowUrl: '../assets/icons/marker-shadow.svg',
  iconSize: [25,41],
  iconAnchor: [12,41],
  popupAnchor: [1,-34],
  shadowSize: [41,41]
});

var movedIcon = L.icon({
  iconUrl: '../assets/icons/marker-icon-yellow.svg',
  shadowUrl: '../assets/icons/marker-shadow.svg',
  iconSize: [25,41],
  iconAnchor: [12,41],
  popupAnchor: [1,-34],
  shadowSize: [41,41]
});

var activeProposalIcon = L.icon({
  iconUrl: '../assets/icons/marker-icon-violet.svg',
  shadowUrl: '../assets/icons/marker-shadow.svg',
  iconSize: [25,41],
  iconAnchor: [12,41],
  popupAnchor: [1,-34],
  shadowSize: [41,41]
});

var previousProposalIcon = L.icon({
  iconUrl: '../assets/icons/marker-icon-pink.svg',
  shadowUrl: '../assets/icons/marker-shadow.svg',
  iconSize: [25,41],
  iconAnchor: [12,41],
  popupAnchor: [1,-34],
  shadowSize: [41,41]
});

/*
 * Map written status -> icon objects.
 */

const statusIcons = {
  active: activeIcon,
  closed: closedIcon,
  moved: movedIcon,
  activeProposal: activeProposalIcon,
  previousProposal: previousProposalIcon
};

/*
 * Parse the CSV data file using Papa Parse library.
 * It won't be immediately loaded, so use a promise to execute code once loaded.
 */

let data = null;

fetch('../assets/data.csv')
   .then(res => res.text())
   .then(csv => {
       data = Papa.parse(csv, {
           header: true,
           comments: true,
           skipEmptyLines: true
           }).data;

       updateMap();
   }
);

/*
 * Find each HTML element we want to control..
 */

const slider = document.getElementById("yearSelector");
const output = document.getElementById("selectedYear");

const active = document.getElementById("activeCheckbox");
const closed = document.getElementById("closedCheckbox");
const moved = document.getElementById("movedCheckbox");
const proposed = document.getElementById("activelyProposedCheckbox");
const exProposed = document.getElementById("previouslyProposedCheckbox");

/*
 * Display the slider's initial year on the active year display.
 */

output.innerHTML = slider.value;

/*
 * Handle updating map on data changes.
 */

function updateMap() {
    if (data == null) return;

    // Fixes misc issues with tile loading.
    map.invalidateSize();

    // Retrieve data from our HTML elements.
    const year = Number(slider.value);
    const showActive = active.checked;
    const showClosed = closed.checked;
    const showMoved = moved.checked;
    const showProposed = proposed.checked;
    const showExProposed = exProposed.checked;

    // Remove all current markers from the map.
    allMarkers.clearLayers();

    data.forEach(d => {
        if (year >= d.YearStart && year < d.YearEnd) {
            if (
                (d.Status === "active" && showActive) ||
                (d.Status === "closed" && showClosed) ||
                (d.Status === "moved" && showMoved) ||
                (d.Status === "activeProposal" && showProposed) ||
                (d.Status === "previousProposal" && showExProposed)
            ) {
                // Create a basic description using the current name and final name.
                var description = d.Name + "<br>See " + (d.CustomSeeName != "" ? d.CustomSeeName : d.FinalName);

                //
                if (d.PriorUse != "") {
                    description = description + "<br>For prior uses of this site, please see " + d.PriorUse;
                }

                if (d.Comment != "") {
                    description = description + "<br>" + d.Comment;
                }

                // Build the marker that will be added to the map.
                const marker = L.marker(
                    [d.Latitude, d.Longitude],
                    { icon: statusIcons[d.Status] }
                ).bindPopup(description);

                // And finally add the marker!
                allMarkers.addLayer(marker);
            }
        }
    });
}


/*
 * Trigger a map market update whenever a checkbox / slider is updated.
 */

slider.addEventListener("input", () => {
  output.innerHTML = slider.value;
  updateMap();
});
active.addEventListener("change", updateMap);
closed.addEventListener("change", updateMap);
moved.addEventListener("change", updateMap);
proposed.addEventListener("change", updateMap);
exProposed.addEventListener("change", updateMap);