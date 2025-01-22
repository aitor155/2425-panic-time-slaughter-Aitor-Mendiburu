const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Connfigurate enviroment variables like .env pass as string
dotenv.config();

//Mongo route 
const mongodbRoute = process.env.MONGO_URI;

//ROUTES import
const panicRoutes = require("./routes/panicRoutes");

//Inicialize app express and server
const app = express();
// Start the server
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

//ROUTES
app.use("", panicRoutes);

async function start() {

  try {

    //Start app
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`API running on port ${PORT}`);
    });

    // Connect to mongoose
    await mongoose.connect(mongodbRoute, {});
    console.log('Conexion con Mongo correcta');

  } catch (error) {
    console.log(`<<ERROR>> connecting to the database: ${error.message}`);

  }
}

start();
