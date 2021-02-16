const express = require("express");
const controller = require("./../Controllers/dataController");

const router = express.Router();

router
  .route("/")
  .get(controller.traerDato)
  .post(controller.crearDato);

router
  .route('/')
  .delete(controller.eliminarDato);
  

// app.delete('/datos/:name', (req,res) =>{
//     datos.remove({name: 'name'}).delete();
// });
module.exports = router;
