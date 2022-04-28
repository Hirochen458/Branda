const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a ship.
 */
let VehicleSchema = new Schema({
  /**
   * Make of vehicle
   */
  make: {
    type: String
  },
  /**
   * Model of vehicle.
   */
  model: {
    type: String
  },
  /**
   * Model year of vehicle.
   */
  modelYear: {
    type: Date
  },
  /**
   * MPG of vehicle.
   */
  mpg: {
    type: Number
  },
  /**
   * Odometer miles driven
   */
  odometermiles: {
    type: Number
  },
  /**
   * Engine type of this vehicle
   */
  engine: {
    type: String
  },
  /**
   * Display name of this vehicle.
   */
  displayname: {
    type: String
  },
  /**
   * VIN number
   */
  vin: {
    type: Number
  }
});

let vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = vehicle;