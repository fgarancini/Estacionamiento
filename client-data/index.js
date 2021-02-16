// console.log('hello world')
const formEst = document.getElementById("est-form");
const formVehiculos = document.getElementById("vehiculo-form");
const saveButton = document.getElementById("saveButton");
const API_URL = "http://127.0.0.1:8080/datos";
let data;
let list;
formVehiculos.style.display = "none";
saveButton.style.display = "none";

let parking = formEst.addEventListener("submit", (event) => {
  event.preventDefault();
  const formDta = new FormData(formEst);

  const nombre = formDta.get("nombre");
  const espacios = formDta.get("espacios");

  formEst.style.display = "none";
  formVehiculos.style.display = "block";
  saveButton.style.display = "block";

  data = {
    nombre,
    espacios,
    vehiculos: [],
  };
  // console.log(estacionamiento);
  // console.log(`Nombre ${nombre.value}, espacios ${espacios.value}`);
});

let auto = formVehiculos.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formVehiculos);

  const tipo = formData.get("cars");
  const modelo = formData.get("modelo");
  const tiempo = formData.get("tiempo");

  const vh = {
    tipo,
    modelo,
    tiempo,
  }
  data.vehiculos.push(vh);

  console.log(data);
  // console.log(`Tipo: ${tipo.value},Modelo: ${modelo.value}, Tiempo: ${tiempo.value}`)
});

saveButton.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(data);
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((datoCreado) => {
      list = datocreado;
      console.log(datoCreado);
    })
    .catch((err) => console.log(err));
});

