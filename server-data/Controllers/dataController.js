const monk = require('monk');
const db = monk(process.env.MONGO_URI ||'localhost:27017/parking');
const datos = db.get('datos');


function isValid(parking) {
  return (
    parking.nombre &&
    parking.nombre.toString().trim() != "" &&
    parking.espacios &&
    parking.espacios.toString().trim() != ""
  );
}

exports.isValidCar = (req, res, next) => {
    console.log('hello');
  if (!isValid(req.body)) {
    return res.status(404).json({
      message: "Name and spaces are required",
    });
  }
  next();
};

exports.crearDato = (req, res) => {
  console.log(req.body.nombre);
  const parking = {
    name: req.body.nombre.toString(),
    spaces: req.body.espacios.toString(),
    cars: req.body.vehiculos,
    created: new Date(),
  };

  datos
  .insert(parking)
  .then((datoCreado) => {
    res.json(datoCreado);
  });
};

exports.traerDato = (req, res) => {
  // if(!datos) return console.log('Datos vacios');

  datos.find().then((datos) =>
    res.status(200).json(datos)
  );
};

exports.eliminarDato = (req,res) => {
  // datos.remove(datos[vehiculos].splice(patente,1))
  const arr = datos[vehiculos].split();
  console.log(arr);
}
