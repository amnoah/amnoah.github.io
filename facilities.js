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

  // Allen Sanitarium
  {
    name: "Allen Sanitarium",
    lat: 43.020435098764914,
    lng: -83.69718679509764,
    start: 1894,
    end: 1901,
    status: "active",
    icon: greenIcon,
    popup: "See Flint Sanitarium<br>For previous uses of the facility, see Flint Sanitarium"
  },

  // Cook's Hospital
  {
    name: "Cook's Hospital / Cooke's Hospital",
    lat: 43.008337154580644,
    lng: -83.68549839856323,
    start: 1898,
    end: 1900,
    status: "active",
    icon: greenIcon,
    popup: "Cook's Hospital / Cooke's Hospital"
  },
  {
    name: "Cook's Hospital / Cooke's Hospital",
    lat: 43.008337154580644,
    lng: -83.68549839856323,
    start: 1900,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See Cook's Hospital / Cooke's Hospital"
  },

  // Flint Sanitarium
  {
    name: "Flint City Hospital",
    lat: 43.012515594038724,
    lng: -83.68934252713885,
    start: 1900,
    end: 1901,
    status: "active",
    icon: greenIcon,
    popup: "See Flint City Hospital"
  },
  {
    name: "Flint City Hospital",
    lat: 43.012515594038724,
    lng: -83.68934252713885,
    start: 1901,
    end: 9999,
    status: "moved",
    icon: yellowIcon,
    popup: "See Flint City Hospital"
  },
  {
    name: "Flint City Hospital",
    lat: 43.020435098764914,
    lng: -83.69718679509764,
    start: 1901,
    end: 1907,
    status: "active",
    icon: greenIcon,
    popup: "See Flint City Hospital<>For previous uses of the facility, see Allen Sanitarium<br>For previous uses of the facility, see Flint Sanitarium"
  },
  {
    name: "Flint City Hospital",
    lat: 43.020435098764914,
    lng: -83.69718679509764,
    start: 1907,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See Flint City Hospital<>For previous uses of the facility, see Allen Sanitarium<br>For previous uses of the facility, see Flint Sanitarium"
  },

  // Contagious Disease Hospital
  {
    name: "Contagious Disease Hospital",
    lat: 42.9961305104667,
    lng: -83.67776333279085,
    start: 1901,
    end: 1902,
    status: "active",
    icon: greenIcon,
    popup: "See Contagious Disease Hospital"
  },
  {
    name: "Contagious Disease Hospital",
    lat: 42.9961305104667,
    lng: -83.67776333279085,
    start: 1902,
    end: 9999,
    status: "moved",
    icon: yellowIcon,
    popup: "See Contagious Disease Hospital"
  },
  {
    name: "Contagious Disease Hospital",
    lat: 43.02531738459441,
    lng: -83.67404236203457,
    start: 1901,
    end: 1917,
    status: "active",
    icon: greenIcon,
    popup: "See Contagious Disease Hospital"
  },
  {
    name: "Contagious Disease Hospital",
    lat: 43.02531738459441,
    lng: -83.67404236203457,
    start: 1917,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See Contagious Disease Hospital"
  },

  {
    name: "Detention Hospital",
    lat: 43.017362861284944,
    lng: -83.69348902139981,
    start: 1901,
    end: 1902,
    status: "active",
    icon: greenIcon,
    popup: "See Detention Hospital"
  },
  {
    name: "Detention Hospital",
    lat: 43.017362861284944,
    lng: -83.69348902139981,
    start: 1902,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See Detention Hospital"
  },

  {
    name: "Otter Lake Medical and Surgical Sanitarium",
    lat: 43.22123016755925,
    lng: -83.45920835116783,
    start: 1904,
    end: 1923,
    status: "active",
    icon: greenIcon,
    popup: "See American Legion Billet"
  },
  {
    name: "Otter Lake Medical and Surgical Sanitarium",
    lat: 43.22123016755925,
    lng: -83.45920835116783,
    start: 1923,
    end: 1924,
    status: "closed",
    icon: redIcon,
    popup: "See American Legion Billet"
  },
  {
    name: "American Legion Billet",
    lat: 43.22123016755925,
    lng: -83.45920835116783,
    start: 1924,
    end: 1977,
    status: "active",
    icon: greenIcon,
    popup: "See American Legion Billet"
  },
  {
    name: "American Legion Billet",
    lat: 43.22123016755925,
    lng: -83.45920835116783,
    start: 1977,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See American Legion Billet"
  },

  {
    name: "Hurley Medical Center",
    lat: 43.02151802282558,
    lng: -83.70497004740344,
    start: 1908,
    end: 9999,
    status: "active",
    icon: greenIcon,
    popup: "See Hurley Medical Center"
  },

  {
    name: "Oak Park Hospital",
    lat: 43.040961349521154,
    lng: -83.69102802717755,
    start: 1910,
    end: 1912,
    status: "active",
    icon: greenIcon,
    popup: "See Oak Glen Maternity Home"
  },
  {
    name: "Thomas Medical and Surgical Sanitarium",
    lat: 43.040961349521154,
    lng: -83.69102802717755,
    start: 1912,
    end: 1917,
    status: "active",
    icon: greenIcon,
    popup: "See Oak Glen Maternity Home"
  },
  {
    name: "Oak Glen Maternity Home",
    lat: 43.040961349521154,
    lng: -83.69102802717755,
    start: 1917,
    end: 1920,
    status: "active",
    icon: greenIcon,
    popup: "See Oak Glen Maternity Home"
  },
  {
    name: "Oak Glen Maternity Home",
    lat: 43.040961349521154,
    lng: -83.69102802717755,
    start: 1920,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See Oak Glen Maternity Home"
  },

  {
    name: "Lawrence Hospital / Lawrence Chautauqua Hospital",
    lat: 43.03876462738867,
    lng: -83.6961015456212,
    start: 1915,
    end: 1919,
    status: "active",
    icon: greenIcon,
    popup: "See Lawrence Hospital / Lawrence Chautauqua Hospital"
  },
  {
    name: "Lawrence Hospital / Lawrence Chautauqua Hospital",
    lat: 43.03876462738867,
    lng: -83.6961015456212,
    start: 1919,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See Lawrence Hospital / Lawrence Chautauqua Hospital"
  },

  {
    name: "General Motors Emergency Hospital",
    lat: 43.03576576240505,
    lng: -83.68980457744294,
    start: 1916,
    end: 1919,
    status: "active",
    icon: greenIcon,
    popup: "See General Motors Emergency Hospital"
  },
  {
    name: "General Motors Emergency Hospital",
    lat: 43.03576576240505,
    lng: -83.68980457744294,
    start: 1919,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See General Motors Emergency Hospital"
  },

  {
    name: "Nemo Hospital",
    lat: 43.009107834307734,
    lng: -83.68189304345609,
    start: 1916,
    end: 1917,
    status: "active",
    icon: greenIcon,
    popup: "See Nemo Hospital"
  },
  {
    name: "Nemo Hospital",
    lat: 43.009107834307734,
    lng: -83.68189304345609,
    start: 1917,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See Nemo Hospital"
  },

  {
    name: "Goodrich General Hospital",
    lat: 42.916596215525026,
    lng: -83.50886377178739,
    start: 1916,
    end: 1962,
    status: "active",
    icon: greenIcon,
    popup: "See Genesys Wheelock Memorial Hospital"
  },
  {
    name: "Goodrich General Hospital",
    lat: 42.916596215525026,
    lng: -83.50886377178739,
    start: 1962,
    end: 1964,
    status: "closed",
    icon: redIcon,
    popup: "See Genesys Wheelock Memorial Hospital"
  },
  {
    name: "Goodrich General Hospital",
    lat: 42.916596215525026,
    lng: -83.50886377178739,
    start: 1964,
    end: 9999,
    status: "moved",
    icon: yellowIcon,
    popup: "See Genesys Wheelock Memorial Hospital"
  },
  {
    name: "Wheelock Memorial Hospital",
    lat: 42.925209765484745,
    lng: -83.5041645202944,
    start: 1964,
    end: 1992,
    status: "active",
    icon: greenIcon,
    popup: "See Genesys Wheelock Memorial Hospital"
  },
  {
    name: "Genesys Wheelock Memorial Hospital",
    lat: 42.925209765484745,
    lng: -83.5041645202944,
    start: 1992,
    end: 1998,
    status: "active",
    icon: greenIcon,
    popup: "See Genesys Wheelock Memorial Hospital"
  },
  {
    name: "Genesys Wheelock Memorial Hospital",
    lat: 42.925209765484745,
    lng: -83.5041645202944,
    start: 1998,
    end: 9999,
    status: "closed",
    icon: redIcon,
    popup: "See Genesys Wheelock Memorial Hospital"
  },
];