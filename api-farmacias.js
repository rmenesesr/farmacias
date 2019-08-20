const API_URL = 'https://farmanet.minsal.cl/index.php/ws/getLocalesTurnos';

function createSelect(selectId) {
  const select = document.createElement("select");
  select.id = selectId;
  document.body.appendChild(select);
}

function createOption(selectId, text, value) {
  const option = document.createElement('option');
  option.text = text;
  option.value = value;
  document.getElementById(selectId).appendChild(option);
}

function resetSelect(selectId) {
  document.getElementById(selectId).length = 0;
}

  axios.get(API_URL, {
  }).then(function (response) {
    const farma = response.data;
    populateComunas(farma);
    populateFarmacia(document.getElementById("select-comuna").value);
    populateUbica(document.getElementById("select-comuna").value);
  })
  

function populateFarmacia(id) {
  resetSelect("select-farmacia");
  const farmacomuna = farma.filter(farmacia => farmacia.local_id == id);
  for (farmacia of farmacomuna) {
    createOption("select-farmacia", farma.local_nombre, farma.local_id);
  }
}


function populateComunas(farm) {
  //resetSelect("select-comuna");
  const farmacias = farm;
  for (farma of farmacias) {
    createOption("select-comuna", farma.comuna_nombre, farma.local_id);
  }
}


function populateUbica(localID) {
  resetSelect("select-ubica");
  axios.get(API_URL, {
  }).then(function (farmacia) {
  const farmacias = farmacia.data;
  const comunaFarmacia = farmacias.filter(farma => farma.local_id == localID);
  for (ubica of farmacias) {
    createOption("select-ubica", ubica.local_lat, ubica.local_id, ubica.local_lng);
  }
  /* latitud = ubica.local_lat;
  longitud = ubica.local_lng;
  document.getElementById("boton").addEventListener("click", buscaMap(latitud, longitud) {
    axios.get() */
  })
}
createSelect("select-comuna");
createSelect("select-farmacia");
createSelect("select-ubica");
//populateComunas();
populateFarmacia(document.getElementById("select-comuna").value);
//populateUbica(document.getElementById("select-comuna").value);

document.getElementById("select-comuna").addEventListener("change", function() {populateFarmacia(this.value);
})
document.getElementById("select-comuna").addEventListener("change", function() {populateUbica(this.value);
})

  /*     var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      } */

    
    
    