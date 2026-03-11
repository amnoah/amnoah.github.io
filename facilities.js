// --- ICONS ---

var redIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25,41],
  iconAnchor: [12,41],
  popupAnchor: [1,-34],
  shadowSize: [41,41]
});

var greenIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25,41],
  iconAnchor: [12,41],
  popupAnchor: [1,-34],
  shadowSize: [41,41]
});

var yellowIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25,41],
  iconAnchor: [12,41],
  popupAnchor: [1,-34],
  shadowSize: [41,41]
});

var purpleIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25,41],
  iconAnchor: [12,41],
  popupAnchor: [1,-34],
  shadowSize: [41,41]
});

// --- FACILITIES ---

const facilities = [

//
// All of the Walter Winchester Unit of Genesee Memorial Hospital entries.
//

// Handle the old location.
  {
    name: "Genesee County House/Farm",
    lat: 42.98114030884651,
    lng: -83.6733507576661,
    start: 1847,
    end: 1928,
    status: "active",
    icon: greenIcon,
    popup: "Genesee County House/Farm<br>See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Genesee County Infirmary",
    lat: 42.98114030884651,
    lng: -83.6733507576661,
    start: 1903,
    end: 1928,
    status: "active",
    icon: greenIcon,
    popup: "Genesee County Infirmary<br>See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Genesee County Infirmary",
    lat: 42.98114030884651,
    lng: -83.6733507576661,
    start: 1928,
    end: 9999,
    status: "moved",
    icon: yellowIcon,
    popup: "Genesee County Infirmary<br>See Walter Winchester Unit of Genesee Memorial Hospital"
  },
// Handle the new location.
  {
    name: "Genesee County Infirmary",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1928,
    end: 1932,
    status: "active",
    icon: greenIcon,
    popup: "Genesee County Infirmary<br>See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Genesee County Hospital and Infirmary",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1932,
    end: 1955,
    status: "active",
    icon: greenIcon,
    popup: "Genesee County Hospital and Infirmary<br>See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Genesee County Hospital Facility",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1955,
    end: 1961,
    status: "active",
    icon: greenIcon,
    popup: "Genesee County Hospital Facility<br>See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Walter Winchester Hospital",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1961,
    end: 1969,
    status: "active",
    icon: greenIcon,
    popup: "Walter Winchester Hospital<br>See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Walter Winchester Unit of Genesee Memorial Hospital",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1969,
    end: 1970,
    status: "active",
    icon: greenIcon,
    popup: "Walter Winchester Unit of Genesee Memorial Hospital<br>See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Walter Winchester Unit of Genesee Memorial Hospital",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1970,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "Walter Winchester Unit of Genesee Memorial Hospital<br>See Walter Winchester Unit of Genesee Memorial Hospital"
  },

  //
  // All of the Michigan School of the Deaf locations.
  //

  {
    name: "Michigan Asylum for Educating the Deaf and Dumb and Blind",
    lat: 43.00768860207253,
    lng: -83.6865809746638,
    start: 1854,
    end: 1856,
    status: "active",
    icon: greenIcon,
    popup: "Michigan Asylum for Educating the Deaf and Dumb and Blind<br>See Michigan School for the Deaf"
  },
  {
    name: "Michigan Asylum for Educating the Deaf and Dumb and Blind",
    lat: 43.00768860207253,
    lng: -83.6865809746638,
    start: 1856,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "Michigan Asylum for Educating the Deaf and Dumb and Blind<br>See Michigan School for the Deaf"
  },
  // Handle the new location.
  {
    name: "Michigan Asylum for Educating the Deaf and Dumb and Blind",
    lat: 43.005276276726015,
    lng: -83.70332361634084,
    start: 1856,
    end: 1867,
    status: "active",
    icon: greenIcon,
    popup: "Michigan Asylum for Educating the Deaf and Dumb and Blind<br>See Michigan School for the Deaf"
  },
  {
    name: "Michigan Institution for Educating the Deaf and Dumb and Blind",
    lat: 43.005276276726015,
    lng: -83.70332361634084,
    start: 1867,
    end: 1880,
    status: "active",
    icon: greenIcon,
    popup: "Michigan Institution for Educating the Deaf and Dumb and Blind<br>See Michigan School for the Deaf"
  },
  {
    name: "Michigan Institution for Educating the Deaf and Dumb",
    lat: 43.005276276726015,
    lng: -83.70332361634084,
    start: 1880,
    end: 1887,
    status: "active",
    icon: greenIcon,
    popup: "Michigan Institution for Educating the Deaf and Dumb<br>See Michigan School for the Deaf"
  },
  {
    name: "Michigan School for the Deaf",
    lat: 43.005276276726015,
    lng: -83.70332361634084,
    start: 1887,
    end: 1945,
    status: "active",
    icon: greenIcon,
    popup: "Michigan School for the Deaf<br>See Michigan School for the Deaf"
  },
  {
    name: "Michigan School for the Deaf",
    lat: 43.005276276726015,
    lng: -83.70332361634084,
    start: 1945,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "Michigan School for the Deaf<br>See Michigan School for the Deaf<br>NOTE: This did not necessarily close, but stopped acting as a medical facility."
  },

  // Axford Hospital
  {
    name: "Axford Hospital",
    lat: 43.018171991210565,
    lng: -83.68927104156555,
    start: 1862,
    end: 9999,
    status: "proposed",
    icon: purpleIcon,
    popup: "See Axford Hospital"
  },

  // Smallpox Pest House
  {
    name: "Smallpox Pest House",
    lat: 43.00452365608176,
    lng: -83.68319234693392,
    start: 1877,
    end: 1878,
    status: "active",
    icon: greenIcon,
    popup: "See Smallpox Pest House"
  },
  {
    name: "Smallpox Pest House",
    lat: 43.00452365608176,
    lng: -83.68319234693392,
    start: 1878,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See Smallpox Pest House"
  },
  //
  // All of Flint Sanitarium
  //

  // Old location
  {
    name: "Flint Medical and Surgical Institute and Hospital",
    lat: 43.01407730521347,
    lng: -83.68920474378255,
    start: 1881,
    end: 1883,
    status: "active",
    icon: greenIcon,
    popup: "See Flint Sanitarium"
  },
  {
    name: "Flint Medical and Surgical Institute and Hospital",
    lat: 43.01407730521347,
    lng: -83.68920474378255,
    start: 1883,
    end: 9999,
    status: "moved",
    icon: yellowIcon,
    popup: "See Flint Sanitarium"
  },
  // New location
  {
    name: "Flint Sanitarium",
    lat: 43.020435098764914,
    lng: -83.69718679509764,
    start: 1882,
    end: 1888,
    status: "active",
    icon: greenIcon,
    popup: "See Flint Sanitarium"
  },
  {
    name: "Flint Sanitarium",
    lat: 43.020435098764914,
    lng: -83.69718679509764,
    start: 1888,
    end: 1894,
    status: "closed",
    icon: redIcon,
    popup: "See Flint Sanitarium"
  },

  // Oak Grove Sanitarium
  {
    name: "Oak Grove Sanitarium",
    lat: 43.020357041932265,
    lng: -83.6783853860442,
    start: 1891,
    end: 1920,
    status: "active",
    icon: greenIcon,
    popup: "See Oak Grove Sanitarium"
  },
  {
    name: "Oak Grove Sanitarium",
    lat: 43.020357041932265,
    lng: -83.6783853860442,
    start: 1920,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See Oak Grove Sanitarium"
  },
];