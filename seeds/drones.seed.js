// Iteration #1

const mongoose = require("mongoose")
const Drone = require("../models/Drone.model")

const MONGO_URI = "mongodb://0.0.0.0/lab-express-drones";

const drones = [
    {
        name: "carapuce",
        propellers: 1,
        maxSpeed : 100,
    },
    {
        name: "salameche",
        propellers: 2,
        maxSpeed : 150,
    },
    {
        name: "bulbizar",
        propellers: 3,
        maxSpeed : 200,
    }
]




mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


  Drone.create(drones)
  .then(function (allDronesFromDB) {
    console.log("all drones created: ", allDronesFromDB);
    
  })
  .catch((err) => console.log(console.log("oooopsyyy"), err))
  .finally(() => {
    mongoose.connection.close()
      .then(() => {
        console.log('Connection to MongoDB closed');
      })
      .catch((err) => {
        console.error('Error closing MongoDB connection:', err);
      })});
  
