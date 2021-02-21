// console.log('hello world')
const formEst = document.getElementById("est-form");
const formVehiculos = document.getElementById("vehiculo-form");
const saveButton = document.getElementById("saveButton");
const lista = document.getElementById("tabla").getElementsByTagName('tbody')[0];

const API_URL = "http://127.0.0.1:8080/datos";

let data;
let list;


formVehiculos.style.display = "none";
saveButton.style.display = "none";
lista.style.display = "none";

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

  
});

let auto = formVehiculos.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formVehiculos);

  const tipo = formData.get("cars");
  const modelo = formData.get("modelo");
  const tiempo = formData.get("tiempo");
  const patente = formData.get("patente");

  const vh = {
    tipo,
    modelo,
    tiempo,
    patente
  }
  data.vehiculos.push(vh);
  lista.style.display = "block";

  console.log(data);
});

saveButton.addEventListener("submit", (event) => {
  event.preventDefault();
  
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
  .then((response) => response.json())
  .then((datoCreado) => {
    console.log(datoCreado);
    datoCreado.cars.forEach(auto =>{
      let newRow = lista.insertRow();
      let newCell = newRow.insertCell(cars.lenght);
      let newText = document.createTextNode(`${auto.tipo}`);
      newCell.appendChild(newText);
      
    });
  })
  .catch((err) => console.log(err)); 

  console.log(data);
});



// let patchMethod = () => {
//   return {
//     method: "PATCH",
//     body: JSON.stringify(data),
//     headers: {
//       "content-type": "application/json",
//     }
//   }
// }