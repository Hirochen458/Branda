const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
//const router = express.Router();
const PORT = 3000;

// If you type this instead of CTRL+C CTRL+V, note how Visual Studio Code pops up a mini file explorer when you type require("./).
const DB = require("./db");

app.listen(PORT, () => console.info("Server has started on", PORT));
//app.listen(PORT, () => console.info("Server has started on", PORT));



let newShip = require("./routes/newShip");


// on every request, parse the request body using this library.
app.use(bodyParser.json());
// on a request to /, use the newShip code.
// note that the entire URL including the one declared in the file must match.
app.use("/",newShip);


let getShipName = require("./routes/getShipName");
app.use(bodyParser.json());
app.use("/",getShipName);


let getShipChar = require("./routes/getShipChar");
app.use(bodyParser.json());
app.use("/",getShipChar);


let updateShip = require("./routes/updateShip");
app.use(bodyParser.json());
app.use("/",updateShip);
