var express = require("express");
var cors = require("cors");
var data = require("./data.json");
const PORT = 3001;

const app = express();

app.use(cors());

app.listen(PORT, () => console.log(`Express App listening on port ${PORT}`));

app.get("/fetchFlights", (req, res, next) => {
  const { source, destination, travelDate } = req.query;
  const flightData = data.filter(
    (dat) =>
      dat.origin === source &&
      dat.destination === destination &&
      travelDate === dat.date
  );
    res.send(flightData);
});
