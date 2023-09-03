const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const CategoryRouter = require("./API/Category/Router");
const UserRouter = require("./API/Users/Router");
const ProductRouter = require("./API/Product/Router");
const port = process.env.SERVER_PORT || 3200;
const path = require("path");

const clientpath = path.join(__dirname, "./finalproject/dist");
app.use("/", express.static(clientpath));

app.use(bodyParser.json({ limit: "35mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "35mb",
    parameterLimit: 50000,
  })  //this is a limit of 35mb which is allowed to be  uploaded into the server for image
);
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3500"],
  credentials: true
}));
app.use(express.json()) // stringify me change karnay k liye ye karyngy json ko

app.use("/api", CategoryRouter);
app.use("/api", UserRouter);
app.use("/api", ProductRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./finalproject/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
  // console.log('env variables', process.env);
});
