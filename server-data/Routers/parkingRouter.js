const express = require("express");
const controller = require("./../Controllers/dataController");

const router = express.Router();

// router.param('nombre', controller.validarNombre);


router
  .route("/")
  .post(controller.crearDato)
  .get(controller.traerDato)
  .get(controller.traerUnDato);
  
  
  // router
  // .route('/:')
  // .get(controller.traerUnDato);
  //.delete(controller.eliminarDato);
  

// app.delete('/datos/:name', (req,res) =>{
//     datos.remove({name: 'name'}).delete();
// });
module.exports = router;
