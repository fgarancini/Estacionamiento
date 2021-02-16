const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

/**
 * Llamara a las rutas
 */

const parkingRouter = require('./Routers/parkingRouter');
/**
 * Middleware
 */
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
/**
 * Usar las rutas
 */

app.use(`/datos`,parkingRouter);

module.exports = app;