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

// --- STATUS TO ICON MAP ---

const statusIcons = {
  active: greenIcon,
  closed: redIcon,
  moved: yellowIcon,
  proposed: purpleIcon
};

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
    popup: "See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Genesee County Infirmary",
    lat: 42.98114030884651,
    lng: -83.6733507576661,
    start: 1903,
    end: 1928,
    status: "active",
    popup: "See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Genesee County Infirmary",
    lat: 42.98114030884651,
    lng: -83.6733507576661,
    start: 1928,
    end: 9999,
    status: "moved",
    popup: "See Walter Winchester Unit of Genesee Memorial Hospital"
  },
// Handle the new location.
  {
    name: "Genesee County Infirmary",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1928,
    end: 1932,
    status: "active",
    popup: "See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Genesee County Hospital and Infirmary",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1932,
    end: 1955,
    status: "active",
    popup: "See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Genesee County Hospital Facility",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1955,
    end: 1961,
    status: "active",
    popup: "See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Walter Winchester Hospital",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1961,
    end: 1969,
    status: "active",
    popup: "See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Walter Winchester Unit of Genesee Memorial Hospital",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1969,
    end: 1970,
    status: "active",
    popup: "See Walter Winchester Unit of Genesee Memorial Hospital"
  },
  {
    name: "Walter Winchester Unit of Genesee Memorial Hospital",
    lat: 43.04029671246202,
    lng: -83.75987331471589,
    start: 1970,
    end: 9999,
    status: "closed",
    popup: "See Walter Winchester Unit of Genesee Memorial Hospital"
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
    popup: "See Michigan School for the Deaf"
  },
  {
    name: "Michigan Asylum for Educating the Deaf and Dumb and Blind",
    lat: 43.00768860207253,
    lng: -83.6865809746638,
    start: 1856,
    end: 9999,
    status: "closed",
    popup: "See Michigan School for the Deaf"
  },
  // Handle the new location.
  {
    name: "Michigan Asylum for Educating the Deaf and Dumb and Blind",
    lat: 43.005276276726015,
    lng: -83.70332361634084,
    start: 1856,
    end: 1867,
    status: "active",
    popup: "See Michigan School for the Deaf"
  },
  {
    name: "Michigan Institution for Educating the Deaf and Dumb and Blind",
    lat: 43.005276276726015,
    lng: -83.70332361634084,
    start: 1867,
    end: 1880,
    status: "active",
    popup: "See Michigan School for the Deaf"
  },
  {
    name: "Michigan Institution for Educating the Deaf and Dumb",
    lat: 43.005276276726015,
    lng: -83.70332361634084,
    start: 1880,
    end: 1887,
    status: "active",
    popup: "See Michigan School for the Deaf"
  },
  {
    name: "Michigan School for the Deaf",
    lat: 43.005276276726015,
    lng: -83.70332361634084,
    start: 1887,
    end: 1945,
    status: "active",
    popup: "See Michigan School for the Deaf"
  },
  {
    name: "Michigan School for the Deaf",
    lat: 43.005276276726015,
    lng: -83.70332361634084,
    start: 1945,
    end: 9999,
    status: "closed",
    popup: "See Michigan School for the Deaf<br>NOTE: This did not necessarily close, but stopped acting as a medical facility."
  },

  {
    name: "Civil War Hospital",
    lat: 43.01019522866988,
    lng: -83.69607486177802,
    start: 1861,
    end: 1864,
    status: "active",
    popup: "See Civil War Hospital"
  },
  {
    name: "Civil War Hospital",
    lat: 43.01019522866988,
    lng: -83.69607486177802,
    start: 1864,
    end: 1921,
    status: "closed",
    popup: "See Civil War Hospital"
  },

  // Axford Hospital
  {
    name: "Axford Hospital",
    lat: 43.018171991210565,
    lng: -83.68927104156555,
    start: 1862,
    end: 9999,
    status: "proposed",
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
    popup: "See Smallpox Pest House"
  },
  {
    name: "Smallpox Pest House",
    lat: 43.00452365608176,
    lng: -83.68319234693392,
    start: 1878,
    end: 9999,
    status: "closed",
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
    popup: "See Flint Sanitarium"
  },
  {
    name: "Flint Medical and Surgical Institute and Hospital",
    lat: 43.01407730521347,
    lng: -83.68920474378255,
    start: 1883,
    end: 9999,
    status: "moved",
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
    popup: "See Flint Sanitarium"
  },
  {
    name: "Flint Sanitarium",
    lat: 43.020435098764914,
    lng: -83.69718679509764,
    start: 1888,
    end: 1894,
    status: "closed",
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
    popup: "See Oak Grove Sanitarium"
  },
  {
    name: "Oak Grove Sanitarium",
    lat: 43.020357041932265,
    lng: -83.6783853860442,
    start: 1920,
    end: 9999,
    status: "closed",
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
    popup: "See Cook's Hospital / Cooke's Hospital"
  },
  {
    name: "Cook's Hospital / Cooke's Hospital",
    lat: 43.008337154580644,
    lng: -83.68549839856323,
    start: 1900,
    end: 9999,
    status: "closed",
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
    popup: "See Flint City Hospital"
  },
  {
    name: "Flint City Hospital",
    lat: 43.012515594038724,
    lng: -83.68934252713885,
    start: 1901,
    end: 9999,
    status: "moved",
    popup: "See Flint City Hospital"
  },
  {
    name: "Flint City Hospital",
    lat: 43.020435098764914,
    lng: -83.69718679509764,
    start: 1901,
    end: 1907,
    status: "active",
    popup: "See Flint City Hospital<>For previous uses of the facility, see Allen Sanitarium<br>For previous uses of the facility, see Flint Sanitarium"
  },
  {
    name: "Flint City Hospital",
    lat: 43.020435098764914,
    lng: -83.69718679509764,
    start: 1907,
    end: 9999,
    status: "closed",
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
    popup: "See Contagious Disease Hospital"
  },
  {
    name: "Contagious Disease Hospital",
    lat: 42.9961305104667,
    lng: -83.67776333279085,
    start: 1902,
    end: 9999,
    status: "moved",
    popup: "See Contagious Disease Hospital"
  },
  {
    name: "Contagious Disease Hospital",
    lat: 43.02531738459441,
    lng: -83.67404236203457,
    start: 1901,
    end: 1917,
    status: "active",
    popup: "See Contagious Disease Hospital"
  },
  {
    name: "Contagious Disease Hospital",
    lat: 43.02531738459441,
    lng: -83.67404236203457,
    start: 1917,
    end: 9999,
    status: "closed",
    popup: "See Contagious Disease Hospital"
  },

  {
    name: "Detention Hospital",
    lat: 43.017362861284944,
    lng: -83.69348902139981,
    start: 1901,
    end: 1902,
    status: "active",
    popup: "See Detention Hospital"
  },
  {
    name: "Detention Hospital",
    lat: 43.017362861284944,
    lng: -83.69348902139981,
    start: 1902,
    end: 9999,
    status: "closed",
    popup: "See Detention Hospital"
  },

  {
    name: "Otter Lake Medical and Surgical Sanitarium",
    lat: 43.22123016755925,
    lng: -83.45920835116783,
    start: 1904,
    end: 1923,
    status: "active",
    popup: "See American Legion Billet"
  },
  {
    name: "Otter Lake Medical and Surgical Sanitarium",
    lat: 43.22123016755925,
    lng: -83.45920835116783,
    start: 1923,
    end: 1924,
    status: "closed",
    popup: "See American Legion Billet"
  },
  {
    name: "American Legion Billet",
    lat: 43.22123016755925,
    lng: -83.45920835116783,
    start: 1924,
    end: 1977,
    status: "active",
    popup: "See American Legion Billet"
  },
  {
    name: "American Legion Billet",
    lat: 43.22123016755925,
    lng: -83.45920835116783,
    start: 1977,
    end: 9999,
    status: "closed",
    popup: "See American Legion Billet"
  },

  // TODO: Finish Hurley

  {
    name: "Hurley Medical Center",
    lat: 43.02151802282558,
    lng: -83.70497004740344,
    start: 1908,
    end: 9999,
    status: "active",
    popup: "See Hurley Medical Center"
  },

  {
    name: "Oak Park Hospital",
    lat: 43.040961349521154,
    lng: -83.69102802717755,
    start: 1910,
    end: 1912,
    status: "active",
    popup: "See Oak Glen Maternity Home"
  },
  {
    name: "Thomas Medical and Surgical Sanitarium",
    lat: 43.040961349521154,
    lng: -83.69102802717755,
    start: 1912,
    end: 1917,
    status: "active",
    popup: "See Oak Glen Maternity Home"
  },
  {
    name: "Oak Glen Maternity Home",
    lat: 43.040961349521154,
    lng: -83.69102802717755,
    start: 1917,
    end: 1920,
    status: "active",
    popup: "See Oak Glen Maternity Home"
  },
  {
    name: "Oak Glen Maternity Home",
    lat: 43.040961349521154,
    lng: -83.69102802717755,
    start: 1920,
    end: 9999,
    status: "closed",
    popup: "See Oak Glen Maternity Home"
  },

  {
    name: "Lawrence Hospital / Lawrence Chautauqua Hospital",
    lat: 43.03876462738867,
    lng: -83.6961015456212,
    start: 1915,
    end: 1919,
    status: "active",
    popup: "See Lawrence Hospital / Lawrence Chautauqua Hospital"
  },
  {
    name: "Lawrence Hospital / Lawrence Chautauqua Hospital",
    lat: 43.03876462738867,
    lng: -83.6961015456212,
    start: 1919,
    end: 9999,
    status: "closed",
    popup: "See Lawrence Hospital / Lawrence Chautauqua Hospital"
  },

  {
    name: "General Motors Emergency Hospital",
    lat: 43.03576576240505,
    lng: -83.68980457744294,
    start: 1916,
    end: 1919,
    status: "active",
    popup: "See General Motors Emergency Hospital"
  },
  {
    name: "General Motors Emergency Hospital",
    lat: 43.03576576240505,
    lng: -83.68980457744294,
    start: 1919,
    end: 9999,
    status: "closed",
    popup: "See General Motors Emergency Hospital"
  },

  {
    name: "Nemo Hospital",
    lat: 43.009107834307734,
    lng: -83.68189304345609,
    start: 1916,
    end: 1917,
    status: "active",
    popup: "See Nemo Hospital"
  },
  {
    name: "Nemo Hospital",
    lat: 43.009107834307734,
    lng: -83.68189304345609,
    start: 1917,
    end: 9999,
    status: "closed",
    popup: "See Nemo Hospital"
  },

  {
    name: "Goodrich General Hospital",
    lat: 42.916596215525026,
    lng: -83.50886377178739,
    start: 1916,
    end: 1962,
    status: "active",
    popup: "See Genesys Wheelock Memorial Hospital"
  },
  {
    name: "Goodrich General Hospital",
    lat: 42.916596215525026,
    lng: -83.50886377178739,
    start: 1962,
    end: 1964,
    status: "closed",
    popup: "See Genesys Wheelock Memorial Hospital"
  },
  {
    name: "Goodrich General Hospital",
    lat: 42.916596215525026,
    lng: -83.50886377178739,
    start: 1964,
    end: 9999,
    status: "moved",
    popup: "See Genesys Wheelock Memorial Hospital"
  },
  {
    name: "Wheelock Memorial Hospital",
    lat: 42.925209765484745,
    lng: -83.5041645202944,
    start: 1964,
    end: 1992,
    status: "active",
    popup: "See Genesys Wheelock Memorial Hospital"
  },
  {
    name: "Genesys Wheelock Memorial Hospital",
    lat: 42.925209765484745,
    lng: -83.5041645202944,
    start: 1992,
    end: 1998,
    status: "active",
    popup: "See Genesys Wheelock Memorial Hospital"
  },
  {
    name: "Genesys Wheelock Memorial Hospital",
    lat: 42.925209765484745,
    lng: -83.5041645202944,
    start: 1998,
    end: 9999,
    status: "closed",
    popup: "See Genesys Wheelock Memorial Hospital"
  },

  {
    name: "Bush Building Emergency Hospital",
    lat: 43.01654149873238,
    lng: -83.69270463236688,
    start: 1917,
    end: 1926,
    status: "active",
    popup: "See Bush Building Emergency Hospital"
  },
  {
    name: "Bush Building Emergency Hospital",
    lat: 43.01654149873238,
    lng: -83.69270463236688,
    start: 1926,
    end: 9999,
    status: "closed",
    popup: "See Bush Building Emergency Hospital"
  },

  // McLaren Flint's block

  {
    name: "Elliot-Girard Hospital",
    lat: 43.01368620020097,
    lng: -83.68700932603501,
    start: 1917,
    end: 1919,
    status: "active",
    popup: "See McLaren Flint"
  },
  {
    name: "The Women's Hospital",
    lat: 43.01368620020097,
    lng: -83.68700932603501,
    start: 1919,
    end: 1923,
    status: "active",
    popup: "See McLaren Flint"
  },
  {
    name: "The Women's Hospital",
    lat: 43.01368620020097,
    lng: -83.68700932603501,
    start: 1923,
    end: 9999,
    status: "moved",
    popup: "See McLaren Flint"
  },
  {
    name: "The Women's Hospital",
    lat: 43.00899233516945,
    lng: -83.66975688899078,
    start: 1923,
    end: 1951,
    status: "active",
    popup: "See McLaren Flint"
  },
  {
    name: "The Women's Hospital",
    lat: 43.00899233516945,
    lng: -83.66975688899078,
    start: 1951,
    end: 9999,
    status: "moved",
    popup: "See McLaren Flint"
  },
  {
    name: "McLaren General Hospital",
    lat: 43.013957552506966,
    lng: -83.732711971603,
    start: 1951,
    end: 1990,
    status: "active",
    popup: "See McLaren Flint"
  },
  {
    name: "McLaren Regional Medical Center",
    lat: 43.013957552506966,
    lng: -83.732711971603,
    start: 1990,
    end: 2012,
    status: "active",
    popup: "See McLaren Flint"
  },
  {
    name: "McLaren Flint",
    lat: 43.013957552506966,
    lng: -83.732711971603,
    start: 2012,
    end: 9999,
    status: "active",
    popup: "See McLaren Flint"
  },

// Chevrolet Hospital
  {
    name: "Chevrolet Hospital",
    lat: 43.01229422627466,
    lng: -83.7019903215259,
    start: 1918,
    end: 1968,
    status: "active",
    popup: "See Chevrolet Hospital"
  },
  {
    name: "Chevrolet Hospital",
    lat: 43.01229422627466,
    lng: -83.7019903215259,
    start: 1968,
    end: 9999,
    status: "closed",
    popup: "See Chevrolet Hospital"
  },

// St. Pauls block
  {
    name: "St. Paul’s Church Emergency Hospital",
    lat: 43.01411898668765,
    lng: -83.6885330898766,
    start: 1918,
    end: 1919,
    status: "active",
    popup: "See St. Paul’s Church Emergency Hospital"
  },
  {
    name: "St. Paul’s Church Emergency Hospital",
    lat: 43.01411898668765,
    lng: -83.6885330898766,
    start: 1919,
    end: 9999,
    status: "closed",
    popup: "See St. Paul’s Church Emergency Hospital"
  },

  // Glenwood Hospital block
  {
    name: "Glenwood Hospital",
    lat: 43.00821087102604,
    lng: -83.70710076385477,
    start: 1918,
    end: 1919,
    status: "active",
    popup: "See Glenwood Hospital"
  },
  {
    name: "Glenwood Hospital",
    lat: 43.00821087102604,
    lng: -83.70710076385477,
    start: 1919,
    end: 9999,
    status: "closed",
    popup: "See Glenwood Hospital"
  },

  // Emergency Hospital block
  {
    name: "Emergency Hospital",
    lat: 43.00993244027801,
    lng: -83.6830507989573,
    start: 1920,
    end: 1921,
    status: "active",
    popup: "See Emergency Hospital"
  },
  {
    name: "Emergency Hospital",
    lat: 43.00993244027801,
    lng: -83.6830507989573,
    start: 1921,
    end: 9999,
    status: "closed",
    popup: "See Emergency Hospital"
  },

  // Hospital at City Mission block
  {
    name: "Hospital at City Mission",
    lat: 43.013664127622285,
    lng: -83.68825028240553,
    start: 1920,
    end: 1921,
    status: "active",
    popup: "See Hospital at City Mission"
  },
  {
    name: "Hospital at City Mission",
    lat: 43.013664127622285,
    lng: -83.68825028240553,
    start: 1921,
    end: 9999,
    status: "closed",
    popup: "See Hospital at City Mission"
  },

  // St. Joseph section
  {
    name: "St. Joseph Hospital",
    lat: 43.01019522866988,
    lng: -83.69607486177802,
    start: 1921,
    end: 1936,
    status: "active",
    popup: "See Genesys East Flint Campus<br>For previous uses of the facility, see Civil War Hospital"
  },
  {
    name: "St. Joseph Hospital",
    lat: 43.01019522866988,
    lng: -83.69607486177802,
    start: 1936,
    end: 1949,
    status: "moved",
    popup: "See Genesys East Flint Campus<br>For previous uses of the facility, see Civil War Hospital"
  },
  {
    name: "St. Joseph Hospital",
    lat: 43.02395562079966,
    lng: -83.66746247369477,
    start: 1936,
    end: 1992,
    status: "active",
    popup: "See Genesys East Flint Campus"
  },
  {
    name: "Genesys St. Joseph Hospital",
    lat: 43.02395562079966,
    lng: -83.66746247369477,
    start: 1992,
    end: 1998,
    status: "active",
    popup: "See Genesys East Flint Campus"
  },
  {
    name: "Genesys East Flint Campus",
    lat: 43.02395562079966,
    lng: -83.66746247369477,
    start: 1998,
    end: 2002,
    status: "active",
    popup: "See Genesys East Flint Campus"
  },
  {
    name: "Genesys East Flint Campus",
    lat: 43.02395562079966,
    lng: -83.66746247369477,
    start: 2002,
    end: 9999,
    status: "moved",
    popup: "See Genesys East Flint Campus"
  },
  {
    name: "Genesys East Flint Campus",
    lat: 43.031187445004285,
    lng: -83.63467596326784,
    start: 2002,
    end: 2011,
    status: "active",
    popup: "See Genesys East Flint Campus"
  },
  {
    name: "Genesys East Flint Campus",
    lat: 43.031187445004285,
    lng: -83.63467596326784,
    start: 2011,
    end: 9999,
    status: "closed",
    popup: "See Genesys East Flint Campus"
  },

  // TODO: Mt. Morris General

  // Davison General Hospital
  {
    name: "Davison General Hospital",
    lat: 43.02695168581914,
    lng: -83.51835386742545,
    start: 1924,
    end: 1925,
    status: "active",
    popup: "See Davison General Hospital"
  },
  {
    name: "Davison General Hospital",
    lat: 43.02695168581914,
    lng: -83.51835386742545,
    start: 1925,
    end: 1926,
    status: "closed",
    popup: "See Davison General Hospital"
  },
  {
    name: "Davison General Hospital",
    lat: 43.02695168581914,
    lng: -83.51835386742545,
    start: 1926,
    end: 1928,
    status: "active",
    popup: "See Davison General Hospital"
  },
  {
    name: "Davison General Hospital",
    lat: 43.02695168581914,
    lng: -83.51835386742545,
    start: 1928,
    end: 9999,
    status: "closed",
    popup: "See Davison General Hospital"
  },

  {
    name: "Industrial Mutual Association Hospital",
    lat: 43.020023262978604,
    lng: -83.69311632411232,
    start: 1924,
    end: 9999,
    status: "proposed",
    popup: "See Industrial Mutual Association Hospital"
  },

  // TODO: Dr. Charter's mess.

  // Kellogg Maternity Home
  {
    name: "Kellogg Maternity Home",
    lat: 42.80082562987472,
    lng: -83.70073132733864,
    start: 1927,
    end: 1928,
    status: "active",
    popup: "See Kellogg Maternity Home"
  },
  {
    name: "Kellogg Maternity Home",
    lat: 42.80082562987472,
    lng: -83.70073132733864,
    start: 1928,
    end: 9999,
    status: "closed",
    popup: "See Kellogg Maternity Home"
  },

  // Metzger Maternity Home
  {
    name: "Metzger Maternity Home",
    lat: 42.98836398982371,
    lng: -83.6664254171693,
    start: 1927,
    end: 1931,
    status: "active",
    popup: "See Metzger Maternity Home"
  },
  {
    name: "Metzger Maternity Home",
    lat: 42.98836398982371,
    lng: -83.6664254171693,
    start: 1931,
    end: 9999,
    status: "closed",
    popup: "See Metzger Maternity Home"
  },

  {
    name: "Flint Osteopathic Hospital",
    lat: 43.02442933015761,
    lng: -83.69828687737248,
    start: 1934,
    end: 1936,
    status: "active",
    popup: "See Genesys West Flint Campus"
  },
  {
    name: "Still Osteopathic Hospital",
    lat: 43.02442933015761,
    lng: -83.69828687737248,
    start: 1936,
    end: 1941,
    status: "active",
    popup: "See Genesys West Flint Campus"
  },
  {
    name: "Still Osteopathic Hospital",
    lat: 43.02442933015761,
    lng: -83.69828687737248,
    start: 1941,
    end: 9999,
    status: "moved",
    popup: "See Genesys West Flint Campus"
  },
  {
    name: "Still Osteopathic Hospital",
    lat: 43.02074200680166,
    lng: -83.70006541205957,
    start: 1941,
    end: 1946,
    status: "active",
    popup: "See Genesys West Flint Campus"
  },
  {
    name: "Flint Osteopathic Hospital",
    lat: 43.02074200680166,
    lng: -83.70006541205957,
    start: 1946,
    end: 1960,
    status: "active",
    popup: "See Genesys West Flint Campus"
  },
  {
    name: "Flint Osteopathic Hospital",
    lat: 43.02074200680166,
    lng: -83.70006541205957,
    start: 1960,
    end: 9999,
    status: "moved",
    popup: "See Genesys West Flint Campus"
  },
  {
    name: "Flint Osteopathic Hospital",
    lat: 43.013151360076584,
    lng: -83.73630597583534,
    start: 1960,
    end: 1992,
    status: "active",
    popup: "See Genesys West Flint Campus"
  },
  {
    name: "Genesys Flint Osteopathic Hospital",
    lat: 43.013151360076584,
    lng: -83.73630597583534,
    start: 1992,
    end: 1998,
    status: "active",
    popup: "See Genesys West Flint Campus"
  },
  {
    name: "Genesys West Flint Campus",
    lat: 43.013151360076584,
    lng: -83.73630597583534,
    start: 1998,
    end: 2011,
    status: "active",
    popup: "See Genesys West Flint Campus"
  },
  {
    name: "Genesys West Flint Campus",
    lat: 43.013151360076584,
    lng: -83.73630597583534,
    start: 2011,
    end: 9999,
    status: "closed",
    popup: "See Genesys West Flint Campus"
  },

  {
    name: "Community Hospital and Maternity Home",
    lat: 43.01394037158871,
    lng: -83.68768332436706,
    start: 1935,
    end: 1937,
    status: "active",
    popup: "See Community Hospital and Maternity Home"
  },
  {
    name: "Community Hospital and Maternity Home",
    lat: 43.01394037158871,
    lng: -83.68768332436706,
    start: 1937,
    end: 9999,
    status: "closed",
    popup: "See Community Hospital and Maternity Home"
  },

  {
    name: "Flint General Hospital",
    lat: 43.02529321797266,
    lng: -83.6932321799237,
    start: 1936,
    end: 1937,
    status: "active",
    popup: "See Family Hospital"
  },
  {
    name: "Flint General Hospital",
    lat: 43.02529321797266,
    lng: -83.6932321799237,
    start: 1937,
    end: 9999,
    status: "moved",
    popup: "See Family Hospital"
  },
  {
    name: "Flint General Hospital",
    lat: 43.03599027876849,
    lng: -83.69090838378025,
    start: 1937,
    end: 1982,
    status: "active",
    popup: "See Family Hospital"
  },
  {
    name: "Family Hospital",
    lat: 43.03599027876849,
    lng: -83.69090838378025,
    start: 1982,
    end: 1984,
    status: "active",
    popup: "See Family Hospital"
  },
  {
    name: "Family Hospital",
    lat: 43.03599027876849,
    lng: -83.69090838378025,
    start: 1984,
    end: 9999,
    status: "closed",
    popup: "See Family Hospital"
  },

  {
    name: "Fenton Memorial Hospital",
    lat: 42.79862371942018,
    lng: -83.69087856318122,
    start: 1943,
    end: 9999,
    status: "proposed",
    popup: "See Fenton Memorial Hospital"
  },

  {
    name: "Elizabeth Hynds Convalescent Hospital",
    lat: 43.01019522866988,
    lng: -83.69607486177802,
    start: 1949,
    end: 1955,
    status: "active",
    popup: "See Elizabeth Hynds Convalescent Hospital<br>For previous uses of the facility, see Genesys East Flint Campus<br>For previous uses of the facility, see Civil War Hospital"
  },
  {
    name: "Elizabeth Hynds Convalescent Hospital",
    lat: 43.01019522866988,
    lng: -83.69607486177802,
    start: 1955,
    end: 9999,
    status: "closed",
    popup: "See Elizabeth Hynds Convalescent Hospital<br>For previous uses of the facility, see Genesys East Flint Campus<br>For previous uses of the facility, see Civil War Hospital"
  },

  {
    name: "Industrial Medical Center",
    lat: 43.00715830832458,
    lng: -83.69328872803527,
    start: 1965,
    end: 1988,
    status: "active",
    popup: "See Industrial Medical Center"
  },
  {
    name: "Industrial Medical Center",
    lat: 43.00715830832458,
    lng: -83.69328872803527,
    start: 1988,
    end: 9999,
    status: "closed",
    popup: "See Industrial Medical Center"
  },

  {
    name: "Mediclinic",
    lat: 43.0216725570331,
    lng: -83.70119675212963,
    start: 1970,
    end: 1973,
    status: "active",
    popup: "See MultiCo"
  },
  {
    name: "Mediclinic",
    lat: 43.0216725570331,
    lng: -83.70119675212963,
    start: 1973,
    end: 9999,
    status: "closed",
    popup: "See MultiCo"
  },
  {
    name: "Pediatric Mediclinic",
    lat: 43.00706762388249,
    lng: -83.70324313939153,
    start: 1971,
    end: 1973,
    status: "active",
    popup: "See MultiCo"
  },
  {
    name: "Pediatric Mediclinic",
    lat: 43.00706762388249,
    lng: -83.70324313939153,
    start: 1973,
    end: 9999,
    status: "closed",
    popup: "See MultiCo"
  },
  {
    name: "MultiCo Grand Blanc Psychiatric Hospital",
    lat: 42.93018022725338,
    lng: -83.5956306641853,
    start: 1971,
    end: 9999,
    status: "proposed",
    popup: "See MultiCo"
  },
  {
    name: "MultiCo Fenton General Hospital",
    lat: 42.79880817552851,
    lng: -83.72152231740606,
    start: 1971,
    end: 9999,
    status: "proposed",
    popup: "See MultiCo"
  },
  {
    name: "MultiCo Flint General Hospital",
    lat: 43.02134943317118,
    lng: -83.70093476072279,
    start: 1971,
    end: 9999,
    status: "proposed",
    popup: "See MultiCo"
  },

  {
    name: "Genesee County Community Mental Health Services",
    lat: 43.02134943317118,
    lng: -83.70093476072279,
    start: 1972,
    end: 1977,
    status: "active",
    popup: "See Genesee County Community Mental Health Services"
  },
  {
    name: "Genesee County Community Mental Health Services",
    lat: 43.02134943317118,
    lng: -83.70093476072279,
    start: 1977,
    end: 9999,
    status: "closed",
    popup: "See Genesee County Community Mental Health Services<br>For previous uses of the facility, see MultiCo"
  },

  {
    name: "Riverfront Medical Center",
    lat: 43.01310312599162,
    lng: -83.68449586506381,
    start: 1982,
    end: 2002,
    status: "active",
    popup: "See Riverfront Medical Center"
  },
  {
    name: "Riverfront Medical Center",
    lat: 43.01310312599162,
    lng: -83.68449586506381,
    start: 2002,
    end: 9999,
    status: "closed",
    popup: "See Riverfront Medical Center"
  },

  {
    name: "Insight Inc Alcoholism Recovery Facility",
    lat: 43.016918278020626,
    lng: -83.56642502832605,
    start: 1978,
    end: 9999,
    status: "proposed",
    popup: "See Insight Inc"
  },
  {
    name: "Insight Inc Addiction Recovery Facility",
    lat: 42.8746780114661,
    lng: -83.69591923283107,
    start: 1980,
    end: 9999,
    status: "proposed",
    popup: "See Insight Inc"
  },
  /* TODO: Find answer
  {
    name: "Hurley-Insight Inc Addiction Recovery Facility",
    lat: 42.8746780114661,
    lng: -83.69591923283107,
    start: 1980,
    end: 1990,
    status: "proposed",
    popup: "See Insight Inc<br>For previous uses of the facility, see Genesee County Community Mental Health Services<br>For previous uses of the facility, see MultiCo"
  },
  */
  {
    name: "Insight at Sherwood Forest",
    lat: 43.067280336998245,
    lng: -83.50694963271731,
    start: 1987,
    end: 9999,
    status: "proposed",
    popup: "See Insight Inc"
  },

  {
    name: "Ambulatory Surgery Center",
    lat: 43.0142131585586,
    lng: -83.68048493507744,
    start: 1984,
    end: 9999,
    status: "proposed",
    popup: "See Ambulatory Surgery Center"
  },

  {
    name: "Flint Psychiatric Hospital",
    lat: 43.00053441776288,
    lng: -83.7738192066805,
    start: 1985,
    end: 9999,
    status: "proposed",
    popup: "See Flint Psychiatric Hospital"
  },

  // TODO: East michigan eye center

  {
    name: "Murray Cosmetic Surgery Center",
    lat: 42.90234670826965,
    lng: -83.60314947712108,
    start: 1991,
    end: 1999,
    status: "active",
    popup: "See Murray Cosmetic Surgery Center"
  },
  {
    name: "Murray Cosmetic Surgery Center",
    lat: 42.90234670826965,
    lng: -83.60314947712108,
    start: 1999,
    end: 9999,
    status: "closed",
    popup: "See Murray Cosmetic Surgery Center"
  },

  // TODO: Finish Genesys

  {
    name: "Henry Ford Genesys Hospital",
    lat: 42.8921667015529,
    lng: -83.64259809499168,
    start: 1997,
    end: 9999,
    status: "active",
    popup: "See Henry Ford Genesys Hospital"
  },

  {
    name: "The Surgery Center",
    lat: 42.97525917465228,
    lng: -83.77919883698998,
    start: 1998,
    end: 9999,
    status: "active",
    popup: "See The Surgery Center"
  },

  {
    name: "Michigan Vision Institute",
    lat: 42.98698893464288,
    lng: -83.76306245281971,
    start: 2005,
    end: 2013,
    status: "active",
    popup: "See Surgery Center at Gateway"
  },
  {
    name: "Michigan Vision Institute",
    lat: 42.98698893464288,
    lng: -83.76306245281971,
    start: 2013,
    end: 9999,
    status: "moved",
    popup: "See Surgery Center at Gateway"
  },
  {
    name: "Michigan Vision Institute",
    lat: 42.94749372603833,
    lng: -83.72174929239526,
    start: 2013,
    end: 2023,
    status: "active",
    popup: "See Surgery Center at Gateway"
  },
  {
    name: "Surgery Center at Gateway",
    lat: 42.94749372603833,
    lng: -83.72174929239526,
    start: 2023,
    end: 9999,
    status: "active",
    popup: "See Surgery Center at Gateway"
  },

  {
    name: "Crowne Point Endoscopy & Surgery Center",
    lat: 42.93715257911961,
    lng: -83.72448349567986,
    start: 2007,
    end: 9999,
    status: "active",
    popup: "See Crowne Point Endoscopy & Surgery Center"
  },

  {
    name: "Insight Institute of Neurosurgery and Neuroscience",
    lat: 42.9828799574848,
    lng: -83.67628688791376,
    start: 2008,
    end: 9999,
    status: "active",
    popup: "See Insight Institute of Neurosurgery and Neuroscience"
  },

  {
    name: "McLaren Fenton",
    lat: 42.79045448326055,
    lng: -83.72328620970097,
    start: 2020,
    end: 9999,
    status: "active",
    popup: "See McLaren Fenton"
  },

  {
    name: "McLaren Regional Cancer Center",
    lat: 43.014933736060314,
    lng: -83.7357660478735,
    start: 1989,
    end: 2001,
    status: "active",
    popup: "See Karmanos Cancer Institute at McLaren Flint"
  },
  {
    name: "Great Lakes Cancer Institute",
    lat: 43.014933736060314,
    lng: -83.7357660478735,
    start: 2001,
    end: 2012,
    status: "active",
    popup: "See Karmanos Cancer Institute at McLaren Flint"
  },
  {
    name: "McLaren Cancer Institute",
    lat: 43.014933736060314,
    lng: -83.7357660478735,
    start: 2012,
    end: 2016,
    status: "active",
    popup: "See Karmanos Cancer Institute at McLaren Flint"
  },
  {
    name: "Karmanos Cancer Institute at McLaren Flint",
    lat: 43.014933736060314,
    lng: -83.7357660478735,
    start: 2016,
    end: 9999,
    status: "active",
    popup: "See Karmanos Cancer Institute at McLaren Flint"
  },
];