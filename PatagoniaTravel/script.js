function cambiar(valor) {
  // Get the value for switch key
  var select = document.getElementById("selector").value;

  var image = document.getElementById("image");
  var activity = document.getElementById("activity");
  var location = document.getElementById("location");
  var addInfo = document.getElementById("addInfo");

  // Define constants for image URLs
  const IMAGE_URLS = {
    Trekking:
      "https://res.cloudinary.com/dxfq3iotg/image/upload/v1557246503/3_zoom_1.jpg",
    Natación:
      "https://res.cloudinary.com/dxfq3iotg/image/upload/v1557246502/test_zoom.jpg",
    Ferry:
      "https://res.cloudinary.com/dxfq3iotg/image/upload/v1557246499/3_zoom_2.jpg",
  };

  // Define an object to store data for each case
  const DATA = {
    Trekking: {
      image: IMAGE_URLS.Trekking,
      activity: "Trekking",
      location: '<i class="fa fa-map-marker"> Volcán Villarrica',
      addInfo:
        '"Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional."',
    },
    Natación: {
      image: IMAGE_URLS.Natación,
      activity: "Natación",
      location: '<i class="fa fa-map-marker"> Lago Cochrane',
      addInfo:
        '"Deporte o ejercicio que consiste en nadar; en las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa."',
    },
    Ferry: {
      image: IMAGE_URLS.Ferry,
      activity: "Ferry",
      location: '<i class="fa fa-map-marker"> Lago LLanquihue',
      addInfo:
        '"Embarcación que realiza alternativamente el mismo recorrido entre dos puntos; especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros."',
    },
  };

  // Switch statement
  switch (valor) {
    case "Trekking":
    case "Natación":
    case "Ferry":
      updateElements(DATA[valor]);
      break;
    default:
      break;
  }
}

// Method to update elements
function updateElements(data) {
  image.setAttribute("src", data.image);
  activity.innerHTML = data.activity;
  location.innerHTML = data.location;
  addInfo.innerHTML = data.addInfo;
}
