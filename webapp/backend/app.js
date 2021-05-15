const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
var base64ToImage = require("base64-to-image");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

app.post("/saveImg", (req, res) => {
  var base64Str = req.body.data;

  var path = "../src/assets/images/";
  var optionalObj = { fileName: "face", type: "jpeg" };

  let imageInfo = base64ToImage(base64Str, path, optionalObj);
  console.log(imageInfo);
  res.send("OK");
});

app.listen(5000, (req, res) => {
  console.log("Server listening on port 5000");
});
